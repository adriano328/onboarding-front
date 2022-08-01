import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { IProduto } from 'src/app/shared/interfaces/IProduto';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  situacao: any;

  form!: FormGroup;

  ProdutoSave: any = {} as ICategoria;

  categoriaSave: any = {} as ICategoria;

  listCategoria: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {
      
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      situacao: [''],
      categoria: ['']
    });

    this.getCategoria();

    
  }

  save(){
    console.log("Funcionou");
    
  }

  getCategoria(){
    this.categoriaService.GetAll().then(success => {
      this.listCategoria = success;
    })
  }

}
