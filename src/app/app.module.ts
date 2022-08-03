import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProdutoListComponent } from "./produto/produto-list/ProdutoListComponent";
import { ProdutoComponent } from './produto/produto/produto.component';
import { ProdutoModule } from './produto/produto.module';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenuComponent,
    FooterComponent,
    CategoriaComponent,
    CategoriaListComponent,
    ProdutoComponent,
    ProdutoListComponent,
    ClienteComponent,
    ClienteListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
