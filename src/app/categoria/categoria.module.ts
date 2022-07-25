import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriaModule { }
