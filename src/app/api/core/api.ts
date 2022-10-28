import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { InternalServerError, NotAuthorize, NotFoundError } from "../errors";
import { AppError } from "../errors/app-error";
import { BadInput } from "../errors/bad-input";
import { NetworkError } from "../errors/network-error";
import { Jwt } from "./jwt";


@Injectable()
export class Api {
    constructor(
        private http: HttpClient,
        private jwtService: Jwt,
        public router: Router
    ) { }

    getUrl(path: string): string {
        if (path.indexOf("http") >= 0) {
            return path
        }

        const url = environment.backend.baseUrl + path
        // const url = `${environment.backend.baseUrl}${path}`
        return url
    }

    get(path: string, httpOptions?: Object): Observable<any> {
        return this.http
            .get(this.getUrl(path), this.getHttpOptions(httpOptions))
            .pipe(catchError(this.handleError));
    }



    private getHttpOptions(options: any): any {
        if (options) {
            return options;
        }

        let headersConfig = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        headersConfig = this.addTokenHeader(headersConfig);

        const httpOptions = {
            headers: new HttpHeaders(headersConfig),
        };

        return httpOptions;
    }

    addTokenHeader(headersConfig: any): any {
        if (this.jwtService.getToken()) {
            headersConfig["Authorization"] = "Bearer" + this.jwtService.getToken();
            // headersConfig["Authorization"] = `Bearer ${this.jwtService.getToken()}`;
        }

        return headersConfig;
    }



    handleError(response: HttpErrorResponse) {
        let errorMessage = "";
        const error = response.error;
        if (typeof response === "string" || response instanceof String) {
            errorMessage = <any>response;
        } else if (
            error &&
            (typeof error === "string" || error instanceof String)
        ) {
            errorMessage = response.error;
        } else if (
            response.error &&
            typeof response.error === "object" &&
            response.error.constructor === Object
        ) {
            errorMessage = response.error.message;
        }

        let customException = null;
        if (response && response.headers) {
            customException = response.headers.get("Custom-Exception");
        }

        switch (response.status) {
            case 400:
                return throwError(() => new BadInput(errorMessage, response));
            case 401:
                if (!customException) {
                    errorMessage = "Vous n'êtes pas autorisé à accéder à cette ressource";
                }

                return throwError(() => new NotAuthorize(errorMessage, response));
            case 404:
                return throwError(() => new NotFoundError(errorMessage, response))
            case 500:
                if (!customException) {
                    errorMessage =
                        "Une erreur non gérée s'est produite dans l'application. " +
                        "Veuillez réessayer ou contacter l'administrateur.";
                }
                return throwError(() => new InternalServerError(errorMessage, response));
            case 0:
                if (!customException) {
                    errorMessage =
                        "Erreur de connexion, vérifiez que vous êtes connecté au réseau.";
                }
                return throwError(() => new NetworkError(errorMessage, response));
            default:
                return throwError(() => new AppError(errorMessage, response));
        }
    }


}