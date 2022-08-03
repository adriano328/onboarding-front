import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { IProduto } from 'src/app/shared/interfaces/IProduto';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto/produto.service';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  nome: string = "";

  form!:FormGroup;

  ProdutoSave: IProduto = {} as IProduto; 

  categoriaSave: any = {} as ICategoria;

  situacaoSelect!: number;

  listCategoria: any = [];

  listProduto: any = [];

  public SituacaoLabel = SituacaoLabel;

  public situacoes = Object.values(SituacaoEnum);

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      situacao: [''],
      categoria: ['']
    })

   

  }

  findByNome(){

  }

  resetForm(){

  }

  getProduto(){
    this.produtoService.GetAll().then(success => {
      this.listProduto = success;
    })
    
  }
  
}
