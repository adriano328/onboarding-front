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

  situacao!: string;

  form!:FormGroup;

  ProdutoSave: IProduto = {} as IProduto; 

  categoriaSave: any = {} as ICategoria;

  situacaoSelect!: number;

  listCategoria: any = [];

  listProduto: any = [];

  selectedCat!: ICategoria;

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
    }),

   this.getProduto();

   this.getCategoria();

  }

  findByNome(){    
    console.log(this.selectedCat);
    
    this.produtoService.GetAll({
      pesquisa:{
        nome: this.form.value.nome,
        situacao: this.form.value.situacao,
        categoria: this.selectedCat.nome
      }
    }).then(success => {
      this.listProduto = success;
    })
  }

  resetForm(){
    this.form.reset();
    this.getProduto();
  }


  getCategoria(){
    this.categoriaService.GetAll().then(success => {
      this.listCategoria = success;
    })
  }

  getProduto(){
    this.produtoService.GetAll().then(success => {
      this.listProduto = success;
    })
    
  }

  deleteProduto(id: number){
    this.produtoService.delete(id, {useConfirm: false});
    this.listProduto = this.listProduto.filter((item: {id: number}) => item.id != id );
  }
  
}
