import { ErroDialogComponent } from '../../../shared/components/erro-dialog/erro-dialog.component';
import { LivrosServicesService } from '../../services/livros-services.service';
import { Livrosi } from '../../models/livrosi';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros$: Observable<Livrosi[]>;


  //livrosservice:LivrosServicesService;

  constructor(
    private livrosservice: LivrosServicesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {

    this.livros$ = this.livrosservice.listar()
      .pipe(
        catchError(error => {
          this.onError('Erro ao Carregar os Dados')
          return of([])
        })
      )
  }

  onError(errorMsg: String) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(livro: Livrosi){
    this.router.navigate(['edit', livro.id], { relativeTo: this.route })
    console.log(livro);
  }

  onDelete(livro: Livrosi){
    this.livrosservice.delete(livro.id).subscribe()
    this.snackBar.open('Livro Deletado Com Sucesso!', '', { duration: 2000 });
    this.router.navigate(['livros/'])
    console.log(livro.id);
  }

}


