import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  private readonly API = 'http://localhost:8080/api/autores';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Model[]>(this.API)
    .pipe(
      first()
    );

  }

  save(recor: Partial<Model>){
    return this.httpClient.post<Model>(this.API, recor).pipe(first());
  }

}
