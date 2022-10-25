import { Livrosi } from '../../models/livrosi';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss']
})
export class LivrosListComponent implements OnInit {

  @Input() livros: Livrosi[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delet = new EventEmitter(false);

  readonly displayedColumns = ['id', 'autor', 'titulo', 'paginas', 'preco', 'data_cadastro', 'acoes'];
  showFirstLastButtons = [];

  constructor(private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(livros: Livrosi){
    this.edit.emit(livros);
  }

  onDelete(livros: Livrosi){
    this.delet.emit(livros);
    //this.snackBar.open('Livro Deletado Com Sucesso!', '', { duration: 2000 });
  }


}
