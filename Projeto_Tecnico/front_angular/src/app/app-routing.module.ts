import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'livros'},
  { path: 'livros', loadChildren:() => import('./livros/livros.module').then(m => m.LivrosModule)},
  { path: 'autores', loadChildren:() => import('./autores/autores.module').then(m => m.AutoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
