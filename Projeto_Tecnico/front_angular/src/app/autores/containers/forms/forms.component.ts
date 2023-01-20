import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NonNullableFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AutorsService } from '../../services/autors.service';
import { Model } from '../../models/model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form = this.formBuilder.group({
    id:     [''],
    nome:   [''],
    origem: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private autorsSerivce: AutorsService
  ) { }

  ngOnInit(): void {

    const dataResolver: Model = this.route.snapshot.data['dataResolve'];
    this.form.setValue({
      id:     dataResolver.id,
      nome:   dataResolver.nome,
      origem: dataResolver.origem
    });
  }

  onSubmit() {
    //console.log(this.form.value)
    this.autorsSerivce.saveAll(this.form.value)
      .subscribe(result => {
        this.onSuccess();
      },
        () => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Autor Adicionado Com Sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao Salvar Autor', '', { duration: 2000 });
  }

}
