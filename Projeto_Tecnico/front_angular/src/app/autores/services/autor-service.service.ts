import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  private readonly API = 'http://localhost:8080/api/autores';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.API)
    .pipe(
      first()
    );

  }

}
