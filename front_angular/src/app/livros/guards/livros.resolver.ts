import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Livrosi } from '../models/livrosi';
import { LivrosServicesService } from '../services/livros-services.service';

@Injectable({
  providedIn: 'root'
})
export class LivrosResolver implements Resolve<Livrosi> {

  constructor(private serviceLivros: LivrosServicesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livrosi> {

    if (route.params && route.params['id']) {
      return this.serviceLivros.loadById(route.params['id']);
    }

    return of({ id: '', nome_autor: '', id_autor: '', titulo: '', paginas: '', preco: '' });
  }
}
