import { Component, OnInit } from '@angular/core';
import { AutorServiceService } from '../services/autor-service.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  dataAutores: any[] = [];
  displayedColumns = ['id', 'name', 'origem', 'datecreate']


  constructor(private autorService: AutorServiceService) {
    //this.dataAutores = []


   }

  ngOnInit(): void {

    this.autorService.getAll().subscribe((lista: any) =>
      this.dataAutores = lista.content
    );
  }

}
