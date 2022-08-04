import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {


  nome: string = "";

  situacao: string = "";

  form!:FormGroup;
  
  public SituacaoLabel = SituacaoLabel;

  public situacoes = Object.values(SituacaoEnum);

  listCliente: any = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

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
    this.form.reset()
  }

}
