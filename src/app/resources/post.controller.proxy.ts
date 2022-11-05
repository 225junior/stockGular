import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from "./base";

@Injectable({
	providedIn: 'root'
})
export class PostControllerProxy extends BaseRepository {

	constructor(http: HttpClient, appStorageService: AppStorageService) {
		super('post', http, appStorageService);
	}

	public getDocument(id, httpOptions?: Object): Observable<any> {
		return this.http.get<any>(this.url + this.controllerName + '?ID=' + id, this.appStorageService.getHttpOptions(httpOptions));
	}

	public addPostImputation(documentId, body, serviceId, httpOptions?: Object): Observable<any> {
		return this.http.post<any>(this.url + this.controllerName, body, this.appStorageService.getHttpOptionsFormData(httpOptions, serviceId));
	}

	public addPostPrincipal(documentId, body, serviceId, httpOptions?: Object): Observable<any> {
		return this.http.post<any>(this.url + this.controllerName +"/PostPrincipal", body, this.appStorageService.getHttpOptionsFormData(httpOptions, serviceId));
	}

	public download(postID, filename, serviceId, httpOptions?: Object): Observable<any> {
		return this.http.get<any>(this.url + '' + this.controllerName + '/attachment/' + postID + '/' + filename, this.appStorageService.getHttpOptions(httpOptions, serviceId));
	}

	public addUserRight(id, body, httpOptions?: Object): Observable<any> {
		return this.http.patch<any>(this.url + this.controllerName + '/addright/' + id, body, this.appStorageService.getHttpOptionsFormData(httpOptions));
	}

	public deleteRight(id, body, httpOptions?: Object): Observable<any> {
		return this.http.patch<any>(this.url + this.controllerName + '/deleteright/' + id, body, this.appStorageService.getHttpOptionsFormData(httpOptions));
	}

	public deleteAllPostsInDocument(document, serviceId, httpOptions?: Object): Observable<any> {
		return this.http.delete<any>(this.url + '' + this.controllerName + '/imputations/' + document.ID, this.appStorageService.getHttpOptions(httpOptions, serviceId));
	}

}
