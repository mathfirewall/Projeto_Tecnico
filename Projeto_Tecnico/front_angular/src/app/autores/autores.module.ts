import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './containers/autores/autores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsComponent } from './containers/forms/forms.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AutoresComponent,
    FormsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AutoresModule { }
