import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AutorsService } from '../services/autors.service';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AutorsResolver implements Resolve<Model> {

  constructor(private autorsSerivce:AutorsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Model> {


    if(route.params && route.params['id']){
      return this.autorsSerivce.getById(route.params['id'])
    }
    return of({id: '', nome: '', origem: ''});
  }
}
