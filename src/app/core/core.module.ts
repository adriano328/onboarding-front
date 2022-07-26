import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    
  ],
  imports: [],
  exports: [
    InputTextModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MenubarModule,
    TableModule,
    
    
    ]
})
export class CoreModule { }
