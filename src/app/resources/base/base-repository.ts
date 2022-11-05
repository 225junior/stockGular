import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AppStorageService } from '../app-storage.service';

export class BaseRepository {

    constructor(
        protected controllerName: string,
        public http: HttpClient,
        public appStorageService: AppStorageService) {
    }

    url = `${environment.backend.apiUrl}`;

    public getAll(httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName, this.appStorageService.getHttpOptions(httpOptions));
    }


    public getForId(id: string, httpOptions?: Object): Observable<any> {
        return this.http.get<any>(this.url + this.controllerName + '/' + id, this.appStorageService.getHttpOptions(httpOptions));
    }

    public update(id: string, body: any, httpOptions?: Object): Observable<any> {
        return this.http.put<any>(this.url + this.controllerName + '/' + id, body, this.appStorageService.getHttpOptions(httpOptions));
    }

    public add(body: any, httpOptions?: Object): Observable<any> {
        return this.http.post<any>(this.url + this.controllerName, body, this.appStorageService.getHttpOptions(httpOptions));
    }

    public delete(id: string, httpOptions?: Object): Observable<any> {
        return this.http.delete<any>(this.url + this.controllerName + '/' + id, this.appStorageService.getHttpOptions(httpOptions));
    }

}