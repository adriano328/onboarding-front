import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { IProduto } from 'src/app/shared/interfaces/IProduto';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  situacao: any;

  form!: FormGroup;

  ProdutoSave: any = {} as IProduto;

  categoriaSave: any = {} as ICategoria;

  categoria: ICategoria = {} as ICategoria;

  listCategoria: any = [];

  listProduto: any = [];

  selectedCat!: ICategoria;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
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

  getProduto(){
    this.produtoService.GetAll().then(success => {
      this.listProduto = success;
    })
  }

  

  getCategoria(){
    this.categoriaService.GetAll().then(success => {
      this.listCategoria = success;
    })
  }

  save(){   
    this.ProdutoSave.nome = this.form.value.nome;
    this.ProdutoSave.situacao = this.situacao;
    this.ProdutoSave.categoria = this.selectedCat;
    this.produtoService.post(this.ProdutoSave)

    console.log(this.ProdutoSave);
    
  }

}
