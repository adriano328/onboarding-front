import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: ICategoria[];

  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pagina Incial',
          icon: 'pi pi-home',
      },
      {
          label: 'Cadastro',
          icon: 'pi pi-th-large',
          items: [
              {label: 'Categoria'},
              {label: 'Produto'},
              {label: 'Cliente'}
          ]
      }
  ];
  }

}
