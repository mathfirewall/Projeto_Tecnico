import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Livrosi } from './../models/livrosi';

@Injectable({
  providedIn: 'root'
})
export class LivrosServicesService {

  private readonly API = 'http://localhost:8080/api/livros';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<Livrosi[]>(this.API)
    .pipe(
      first(),
      //delay(500),
      //tap(livros => console.log(livros))
    );
  }


  listarAutor() {
    return this.httpClient.get<any>("http://localhost:8080/api/autores")
    .pipe(
      first(),
      //delay(500),
      //tap(livros => console.log(livros))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Livrosi>(`${this.API}/${id}`);
  }

  salvar(dadosForm: Partial<Livrosi>){
    console.log(dadosForm);
    if(dadosForm.id){
      //console.log('update')
      return this.update(dadosForm);
    }
    //console.log('create')
    return this.create(dadosForm);
  }

  private create(dadosForm: Partial<Livrosi>){
    return this.httpClient.post<Livrosi>(this.API, dadosForm).pipe(first());
  }

  private update(dadosForm: Partial<Livrosi>){
    return this.httpClient.put<Livrosi>(`${this.API}/${dadosForm.id}`, dadosForm).pipe(first());
  }

  delete(id: string){
    console.log(`${this.API+'/delete?id='}${id}`);
    return this.httpClient.delete(`${this.API+'/delete?id='}${id}`);
  }


}
