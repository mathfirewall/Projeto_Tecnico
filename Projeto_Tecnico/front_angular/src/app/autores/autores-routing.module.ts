import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './autores/autores.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: '', component: AutoresComponent },
  { path: 'new', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
