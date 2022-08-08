import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { ICliente } from 'src/app/shared/interfaces/ICliente';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  nomeRazao: string = "";

  situacao: string = "";

  form!:FormGroup;

  listCliente: any = [];

  clienteSave: ICliente = {} as ICliente;
  
  public SituacaoLabel = SituacaoLabel;

  public situacoes = Object.values(SituacaoEnum);


  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomeRazao:[''],
      situacao: [''],
      cpf:['']
    }),

    this.getCliente();
      
  }

  findByNome(){
    this.clienteService.GetAll({
      pesquisa:{
        nomeRazao: this.form.value.nomeRazao,
        situacao: this.form.value.situacao
      }
    }).then(success => {
      this.listCliente = success;
    })
  }

  resetForm(){
    this.form.reset()
    this.getCliente();
  }

  getCliente(){
    this.clienteService.GetAll().then(success => {
      this.listCliente = success;
    })

    console.log(this.listCliente);
    
  }
  
  deleteProduto(id: number){
    this.clienteService.delete(id, {useConfirm: false});
    this.listCliente = this.listCliente.filter((item: {id: number}) => item.id != id)
  }


}
