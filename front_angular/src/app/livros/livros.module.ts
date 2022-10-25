import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivrosFormComponent } from './containers/livros-form/livros-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivrosListComponent } from './components/livros-list/livros-list.component';





@NgModule({
  declarations: [
    LivrosComponent,
    LivrosFormComponent,
    LivrosListComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LivrosModule { }
