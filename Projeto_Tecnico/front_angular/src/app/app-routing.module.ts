import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vitrine'},
  { path: 'vitrine', loadChildren:() => import('./vitrine/vitrine.module').then(m => m.VitrineModule)},
  { path: 'livros', loadChildren:() => import('./livros/livros.module').then(m => m.LivrosModule)},
  { path: 'autores', loadChildren:() => import('./autores/autores.module').then(m => m.AutoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
