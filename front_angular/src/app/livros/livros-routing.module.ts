import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosFormComponent } from './containers/livros-form/livros-form.component';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivrosResolver } from './guards/livros.resolver';

const routes: Routes = [

  { path: '', component: LivrosComponent },
  { path: 'new', component: LivrosFormComponent, resolve: { livros: LivrosResolver } },
  { path: 'edit/:id', component: LivrosFormComponent, resolve: { livros: LivrosResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
