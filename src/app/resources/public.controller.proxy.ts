import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { AppStorageService } from './app-storage.service';


@Injectable({
    providedIn: 'root'
})
export class PublicControllerProxy {

    url = `${environment.backend.apiUrl}`;
    controller = 'public';
    constructor(public http: HttpClient,
        public appStorageService: AppStorageService) {
    }

    public getToken(GUID, httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controller + '/json/' + GUID, this.appStorageService.getHttpOptions(httpOptions));
    }

}
