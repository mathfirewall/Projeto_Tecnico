import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './containers/autores/autores.component';
import { FormsComponent } from './containers/forms/forms.component';
import { AutorsResolver } from './guards/autors.resolver';

const routes: Routes = [
  { path: '', component: AutoresComponent },
  { path: 'new', component: FormsComponent, resolve: {dataResolve: AutorsResolver}},
  { path: 'edit/:id', component: FormsComponent, resolve: {dataResolve: AutorsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
