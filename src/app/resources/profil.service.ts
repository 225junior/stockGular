import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from "./base";

@Injectable({
    providedIn: 'root'
})
export class ProfilService extends BaseRepository {

    constructor(http: HttpClient, appStorageService: AppStorageService) {
        super('user/profile', http, appStorageService);
    }

    public profil(httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName, this.appStorageService.getHttpOptions(httpOptions));
    }

}
