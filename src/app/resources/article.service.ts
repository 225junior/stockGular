import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStorageService } from './app-storage.service';
import { BaseRepository } from './base';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseRepository {

  constructor(http: HttpClient, appStorageService: AppStorageService) {
    super('articles', http, appStorageService);
  }


  // public download(postID, filename, serviceId, httpOptions?: Object): Observable<any> {
  // 	return this.http.get<any>(this.url + '' + this.controllerName + '/attachment/' + postID + '/' + filename, this.appStorageService.getHttpOptions(httpOptions, serviceId));
  // }

}
