import { Component, OnInit } from '@angular/core';
import { AutorServiceService } from '../services/autor-service.service';
import { Model } from '../models/model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  dataAutores: Model[] = [];
  displayedColumns = ['name', 'origem', 'datecreate', 'acoes']


  constructor(
    private autorService: AutorServiceService,
    private router: Router,
    private route: ActivatedRoute ) {
    //this.dataAutores = []


   }

  ngOnInit(): void {

    this.autorService.getAll().subscribe((lista: any) =>
      this.dataAutores = lista.content
    );
  }

  onAdd(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
