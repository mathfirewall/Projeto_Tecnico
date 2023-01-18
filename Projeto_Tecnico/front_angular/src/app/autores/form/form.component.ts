import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NonNullableFormBuilder } from '@angular/forms';
import { AutorServiceService } from '../services/autor-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {




  constructor(
              private location: Location,

              private autorService: AutorServiceService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){


  }


  onCancel() {
    this.location.back();
  }


  private onSuccess() {
    this.snackBar.open('Autor Adicionado Com Sucesso!', '', { duration: 2000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao Salvar', '', { duration: 1000 });
  }

}
