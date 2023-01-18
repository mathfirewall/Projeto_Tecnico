import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../models/model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorsService {

  private readonly API = 'http://localhost:8080/api/autores';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Model[]>(`${this.API}`)
    .pipe(
      first()
    );
  }

  saveAll(dadosForm: Partial<Model>){
    return this.httpClient.post<Model>(this.API, dadosForm).pipe(first());
  }

}
