import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
