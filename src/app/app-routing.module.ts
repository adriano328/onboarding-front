import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { HomeComponent } from './home/home/home.component';
import { ProdutoListComponent } from "./produto/produto-list/ProdutoListComponent";
import { ProdutoComponent } from './produto/produto/produto.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'categoria/:id', component: CategoriaComponent},
   {path: 'categoria', component: CategoriaComponent},
   {path: 'categoria-list', component: CategoriaListComponent},
   {path: 'produto', component: ProdutoComponent},
   {path: 'produto/:id', component: ProdutoComponent},
   {path: 'produto-list', component: ProdutoListComponent},
   {path: 'cliente', component: ClienteComponent},
   {path: 'cliente-list', component: ClienteListComponent},
   {path: 'cliente/:id', component:ClienteComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
