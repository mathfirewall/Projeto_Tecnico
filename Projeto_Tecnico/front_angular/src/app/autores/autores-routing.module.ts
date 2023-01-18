import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './autores/autores.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: AutoresComponent},
  { path: 'new', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
