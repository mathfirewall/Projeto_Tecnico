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

  getById(id: string){
    return this.httpClient.get<Model>(`${this.API}/${id}`);
  }

  saveAll(dadosForm: Partial<Model>){
    if(dadosForm.id){
      //console.log('update')
      return this.update(dadosForm);
    }
    //console.log('create')
    return this.create(dadosForm);
  }

  private create(dadosForm: Partial<Model>){
    return this.httpClient.post<Model>(this.API, dadosForm).pipe(first());
  }

  private update(dadosForm: Partial<Model>){
    console.log(dadosForm)
    return this.httpClient.put<Model>(`${this.API}/${dadosForm.id}`, dadosForm).pipe(first());
  }

}
