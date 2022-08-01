import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { IProduto } from 'src/app/shared/interfaces/IProduto';


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
    private router: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      situacao: ['']
    })

  }

  findByNome(){

  }

  resetForm(){

  }
  
}
