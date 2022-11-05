import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from "./base";

@Injectable({
    providedIn: 'root'
})
export class LoginProxy extends BaseRepository {


    constructor(http: HttpClient, appStorageService: AppStorageService) {
        super('login/logout', http, appStorageService);
    }

    public logout(httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName, this.appStorageService.getHttpOptions(httpOptions));
    }

    public logonUser(passordOrGuid): Observable<any> {
        let _url = this.url + 'login/';

        return this.http.post<any>(_url, passordOrGuid,
            {
                headers: {
                    "Content-Type": "text/plain", //"application/x-www-form-urlencoded",
                    "Accept": "application/json"
                }
            });
    }

}
