import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from "./base";

@Injectable({
    providedIn: 'root'
})
export class InstructionsService extends BaseRepository {

    constructor(http: HttpClient, appStorageService: AppStorageService) {
        super('setting/mail/instructions', http, appStorageService);
    }

    public addPut(body: any, httpOptions?: Object): Observable<any> {
        return this.http.put<any>(this.url + this.controllerName, body, this.appStorageService.getHttpOptions(httpOptions));
    }
}
