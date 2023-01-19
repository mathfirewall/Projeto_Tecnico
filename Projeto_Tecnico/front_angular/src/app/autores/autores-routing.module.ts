import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './containers/autores/autores.component';
import { FormsComponent } from './containers/forms/forms.component';

const routes: Routes = [
  { path: '', component: AutoresComponent },
  { path: 'new', component: FormsComponent},
  { path: 'edit', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
