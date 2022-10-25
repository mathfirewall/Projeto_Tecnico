import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';



@NgModule({
  declarations: [
    ErroDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],

  exports:[ErroDialogComponent]
})
export class SharedModule { }
