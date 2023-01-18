import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutorsService } from '../services/autors.service';
import { Model } from '../models/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  dataAutores$!: Observable<Model[]>;
  displayedColumns = ['nome', 'origem', 'data_criacao', 'acoes'];


  constructor(
    private autorsSerivce: AutorsService,
    private router: Router,
    private route: ActivatedRoute,) {

   }

  ngOnInit(): void {

    this.autorsSerivce.getAll().subscribe((data: any): void =>{
      this.dataAutores$ = data.content
    });
  }

  onAdd(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(){
    console.log("teste btn editar")
  }

  onDelete(){
    console.log("teste btn deletar")
  }

}
