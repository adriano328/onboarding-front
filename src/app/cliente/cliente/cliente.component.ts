import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SexoEnum, SexoLabel } from 'src/app/shared/interfaces/enums/sexoEnum';
import { TipoEnum, TipoLabel } from 'src/app/shared/interfaces/enums/tipoEnum';
import { ICliente } from 'src/app/shared/interfaces/ICliente';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  
  clienteSave: any = [];

  form!: FormGroup;

  form_endereco!: FormGroup;

  form_telefone!: FormGroup;

  situacao!: any;

  sexo!: string;

  tipo!:string;
  
  public SexoLabel = SexoLabel;
  public sexos = Object.values(SexoEnum);

  public TipoLabel = TipoLabel;
  public tipos = Object.values(TipoEnum);


  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:['Lucas Adriano Dias'],
      sexo:['Masculino'],
      tipo: [''],
      cpf:['048.146.171-00'],
      inscricao_estadual:['235797-15'],
      situacao:[''],
      data_nascimento:['26/04/1995'],
    })

    this.form_endereco  = this.formBuilder.group({
      endereco:['Rua México, N° 08'],
      bairro:['Jardim Imperial'],
      cep:['78143-312'],
      municipio:['Várzea Grande'],
      uf:['MT'],
    })

    this.form_telefone = this.formBuilder.group({
      telefone:['65-99901-1697'],
      celular:['65-99288-6664'],
      contato:['65-3695-1499']
    })
  }


  save(){
      this.clienteSave.nome = this.form.value.nome;
      this.clienteSave.sexo = this.sexo;
      this.clienteSave.tipo = this.tipo;
      this.clienteSave.cpf = this.form.value.cpf;
      this.clienteSave.inscricao_estadual = this.form.value.inscricao_estadual;
      this.clienteSave.situacao = this.situacao;
      this.clienteSave.data_nascimento = this.form.value.data_nascimento;
      this.clienteSave.endereco = this.form.value.endereco;
      this.clienteSave.bairro = this.form.value.bairro;
      this.clienteSave.cep = this.form.value.cep;
      this.clienteSave.municipio = this.form.value.municipio;
      this.clienteSave.uf = this.form.value.uf;
      this.clienteSave.telefone = this.form.value.telefone;
      this.clienteSave.celular = this.form.value.celular;
      this.clienteSave.contato = this.form.value.contato

      this.clienteService.post(this.clienteSave)

      console.log(this.clienteSave);
      
  }

}
