import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorageService } from './app-storage.service';
import { Observable } from 'rxjs';
import { BaseRepository } from "./base";

@Injectable({
    providedIn: 'root'
})
export class UserControllerProxy extends BaseRepository {

    constructor(http: HttpClient, appStorageService: AppStorageService) {
        super('user', http, appStorageService);
    }

    public updateAccessLevel(id: string, body: any, httpOptions?: Object): Observable<any> {
        return this.http.patch<any>(this.url + this.controllerName + '/AccessLevel/' + id, body, this.appStorageService.getHttpOptions(httpOptions));
    }

    public getAdministrators(httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName + '/administrators', this.appStorageService.getHttpOptions(httpOptions));
    }

    public search(search: string, httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName + '/find/' + search, this.appStorageService.getHttpOptions(httpOptions));
    }

    public test(httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + 'categories/', this.appStorageService.getHttpOptions(httpOptions));
    }
}
