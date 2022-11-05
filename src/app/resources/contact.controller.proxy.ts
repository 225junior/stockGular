import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from "./base";

@Injectable({
    providedIn: 'root'
})
export class ContactControllerProxy extends BaseRepository {

    constructor(http: HttpClient, appStorageService: AppStorageService) {
        super('contact', http, appStorageService);
    }

    public override add(body, httpOptions?: Object): Observable<any> {
        return this.http.post<any>(this.url + this.controllerName, body, this.appStorageService.getHttpOptions(httpOptions));
    }

    public search(search, httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName + '/search/' + search, this.appStorageService.getHttpOptions(httpOptions));
    }

}
