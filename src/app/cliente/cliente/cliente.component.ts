import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SexoEnum, SexoLabel } from 'src/app/shared/interfaces/enums/sexoEnum';
import { TipoEnum, TipoLabel } from 'src/app/shared/interfaces/enums/tipoEnum';
import { ICliente } from 'src/app/shared/interfaces/ICliente';
import { IEmail } from 'src/app/shared/interfaces/IEmail';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { ITelefone } from 'src/app/shared/interfaces/ITelefone';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  
  clienteSave: ICliente = {} as ICliente;

  enderecoSave: IEndereco = {} as IEndereco;

  emailSave: IEmail = {} as IEmail;

  telefoneSave: ITelefone = {} as ITelefone;

  form_pessoa!: FormGroup;

  form_endereco!: FormGroup;

  form_telefone!: FormGroup;

  form_email!: FormGroup;

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
    this.form_pessoa = this.formBuilder.group({
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

    this.form_email = this.formBuilder.group({
      email:['lucasadrianodias@gmail.com']
    })
  }




  save(){

      this.enderecoSave.bairro = this.form_endereco.value.bairro;
      this.enderecoSave.endereco = this.form_endereco.value.endereco;
      this.enderecoSave.cep = this.form_endereco.value.cep
      this.enderecoSave.municipio = this.form_endereco.value.municipio;
      this.enderecoSave.uf = this.form_endereco.value.uf;

      this.telefoneSave.numeroTelefone = this.form_telefone.value.telefone;
      this.telefoneSave.celular = this.form_telefone.value.celular;
      this.telefoneSave.contato = this.form_telefone.value.contato;

      this.emailSave.email = this.form_email.value.email;
      
      this.clienteSave.cpfoucnpj = this.form_pessoa.value.cpf;
      this.clienteSave.inscricaoEstadual = this.form_pessoa.value.inscricao_estadual;
      this.clienteSave.nomeRazao = this.form_pessoa.value.nome;
      this.clienteSave.dtaNascimento = this.form_pessoa.value.data_nascimento;
      this.clienteSave.tipo = this.tipo;
      this.clienteSave.situacao = this.situacao;
      this.clienteSave.sexo = this.sexo;
      this.clienteSave.endereco = this.enderecoSave;
      this.clienteSave.telefone = this.telefoneSave
      this.clienteSave.email = this.emailSave


      console.log(this.clienteSave);
      
      this.clienteService.post(this.clienteSave)

      
      
  }

}
