import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../core/api';
import { Articles } from '../Models/Articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private api: Api
  ) { }

  get(): Observable<Articles[]> {
    return this.api.get(environment.backend.baseUrl + "/categories");
  }
}