import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { IProduto } from 'src/app/shared/interfaces/IProduto';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  nome: string = "";

  form!:FormGroup;

  ProdutoSave: IProduto = {} as IProduto; 

  situacaoSelect!: number;

  listCategoria: any = [];

  public SituacaoLabel = SituacaoLabel;

  public situacoes = Object.values(SituacaoEnum);

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private categoriaService: CategoriaService
  ){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      situacao: ['']
    }),

    this.categoriaService.GetAll().then(success => {
      this.listCategoria = success;
    })

  }

  findByNome(){

  }

  resetForm(){

  }

  getCategoria(){
    this.categoriaService.GetAll().then(success => {
      this.listCategoria = success;
    })
  }
  
}
