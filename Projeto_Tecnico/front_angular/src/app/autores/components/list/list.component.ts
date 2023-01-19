import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() dataAutores$!: Observable<Model[]>;
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delet = new EventEmitter(false)
  readonly displayedColumns = ['nome', 'origem', 'data_criacao', 'acoes'];

  constructor() { }

  ngOnInit(): void {

  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(dataAutores : Model){
    this.edit.emit(dataAutores)
  }

  onDelete(id: Model){
    this.delet.emit(id.id)
  }

}
