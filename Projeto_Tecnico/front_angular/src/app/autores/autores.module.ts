import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormComponent } from './form/form.component';
import { AutoresListComponent } from './autores-list/autores-list.component';


@NgModule({
  declarations: [
    AutoresComponent,
    FormComponent,
    AutoresListComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule
  ]
})
export class AutoresModule { }
