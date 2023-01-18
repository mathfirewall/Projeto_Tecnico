import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../models/model';
import { AutorServiceService } from '../services/autor-service.service';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss']
})
export class AutoresListComponent implements OnInit {

  @Input() dataAutores: Model[] = [];
  @Output() add = new EventEmitter(false)
  readonly displayedColumns = ['name', 'origem', 'datecreate', 'acoes']

  constructor(
    private autorService: AutorServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.autorService.getAll().subscribe((lista: any) =>
      this.dataAutores = lista.content
    );
  }


  onAdd(){
    this.add.emit(true)
  }

}
