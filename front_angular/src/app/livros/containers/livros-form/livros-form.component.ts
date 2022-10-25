import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { LivrosServicesService } from '../../services/livros-services.service';
import { Livrosi } from '../../models/livrosi';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.scss']
})
export class LivrosFormComponent implements OnInit {

  form = this.formBuilder.group( {
    id:       [''],
    titulo:   [''],
    paginas:  [''],
    preco:    ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private livroService: LivrosServicesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

    //this.form =

   }

  ngOnInit(): void {

    const livro: Livrosi = this.route.snapshot.data['livros'];
    this.form.setValue( {
      id:       livro.id,
      titulo:   livro.titulo,
      paginas:  livro.paginas,
      preco:    livro.preco
    });
  }

  onSubmit(){
    this.livroService.salvar(this.form.value)
    .subscribe(result =>{
      this.onSuccess()
    },
      error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Livro Adicionado Com Sucesso!', '', { duration: 2000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao Salvar', '', { duration: 1000 });
  }

}
