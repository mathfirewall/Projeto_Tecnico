import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  dataAutores: any[] = [
    { id: "1", name: "Teste", origem: "Brasil", date: "17/01/2023"}
  ];
  displayedColumns = ['id', 'name', 'origem', 'datecreate']
  constructor() {
    //this.dataAutores = []
   }

  ngOnInit(): void {
  }

}
