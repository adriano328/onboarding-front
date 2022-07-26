import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';

const routes: Routes = [
   {path: 'categoria', component: CategoriaComponent},
   {path: 'categoria-list', component: CategoriaListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
