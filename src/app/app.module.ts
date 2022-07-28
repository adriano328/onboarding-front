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
import { FormBuilder } from '@angular/forms';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { ConfirmationService, MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenuComponent,
    FooterComponent,
    CategoriaComponent,
    CategoriaListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
    
    

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
