import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SexoEnum, SexoLabel } from 'src/app/shared/interfaces/enums/sexoEnum';
import { TipoEnum, TipoLabel } from 'src/app/shared/interfaces/enums/tipoEnum';
import { ICliente } from 'src/app/shared/interfaces/ICliente';
import { IEmail } from 'src/app/shared/interfaces/IEmail';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { ITelefone } from 'src/app/shared/interfaces/ITelefone';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],

})
export class ClienteComponent implements OnInit {
  
  clienteSave: any = {} as any;

  enderecoSave: any = {} as IEndereco;

  emailSave: any = {} as IEmail;

  telefoneSave: ITelefone = {} as ITelefone;

  form_pessoa!: FormGroup;

  form_endereco!: FormGroup;

  form_telefone!: FormGroup;

  form_email!: FormGroup;

  situacao!: any;

  sexo!: string;

  tipo!:string;

    

  idClienteFind!: number;
    
  public SexoLabel = SexoLabel;
  public sexos = Object.values(SexoEnum);

  public TipoLabel = TipoLabel;
  public tipos = Object.values(TipoEnum);


  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form_pessoa = this.formBuilder.group({
      nomeRazao:[''],
      sexo:[''],
      tipo: [''],
      cpfoucnpj:[''],
      inscricaoEstadual:[''],
      situacao:[''],
      dtaNascimento:[''],
    })

    this.form_endereco  = this.formBuilder.group({
      endereco:[''],
      bairro:[''],
      cep:[''],
      municipio:[''],
      uf:[''],
    })

    this.form_telefone = this.formBuilder.group({
      numeroTelefone:[''],
      celular:[''],
      contato:['']
    })

    this.form_email = this.formBuilder.group({
      email:['']
    })

    this.idClienteFind = parseInt(this.route.snapshot.paramMap.get('id')!);
    if(this.idClienteFind){
      this.clienteService.GetById(this.idClienteFind).then(success => {
        this.clienteSave = success!;
        this.fillFormValues(success)
      }) 
    }
  }

    fillFormValues(cliente :any){
        this.form_pessoa.controls['tipo'].setValue(cliente.tipo)
        this.form_pessoa.controls['cpfoucnpj'].setValue(cliente.cpfoucnpj)
        this.form_pessoa.controls['inscricaoEstadual'].setValue(cliente.inscricaoEstadual)
        this.form_pessoa.controls['situacao'].setValue(cliente.situacao)
        this.form_pessoa.controls['nomeRazao'].setValue(cliente.nomeRazao)
        this.form_pessoa.controls['sexo'].setValue(cliente.sexo)
        this.form_pessoa.controls['dtaNascimento'].setValue(cliente.dtaNascimento)
        this.form_endereco.controls['endereco'].setValue(cliente.endereco?.endereco)
        this.form_endereco.controls['bairro'].setValue(cliente.endereco?.bairro)
        this.form_endereco.controls['cep'].setValue(cliente.endereco?.cep)
        this.form_endereco.controls['municipio'].setValue(cliente.endereco?.municipio)
        this.form_endereco.controls['uf'].setValue(cliente.endereco?.uf)
        this.form_telefone.controls['numeroTelefone'].setValue(cliente.telefone?.numeroTelefone)
        this.form_telefone.controls['celular'].setValue(cliente.telefone?.celular)
        this.form_telefone.controls['contato'].setValue(cliente.telefone?.contato)
        this.form_email.controls['email'].setValue(cliente.email?.email)

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

      if(this.idClienteFind){
        this.clienteService.put(this.clienteSave, this.idClienteFind);
      }else{
          this.clienteSave.cpfoucnpj = this.form_pessoa.value.cpfoucnpj;
          this.clienteSave.inscricaoEstadual = this.form_pessoa.value.inscricaoEstadual;
          this.clienteSave.nomeRazao = this.form_pessoa.value.nomeRazao;
          this.clienteSave.dtaNascimento = this.form_pessoa.value.dtaNascimento;
          this.clienteSave.tipo = this.form_pessoa.value.tipo;
          this.clienteSave.situacao = this.situacao;
          this.clienteSave.sexo = this.sexo;
          this.clienteSave.endereco = this.enderecoSave;
          this.clienteSave.telefone = this.telefoneSave
          this.clienteSave.email = this.emailSave
     
      this.clienteService.post(this.clienteSave)
        console.log(this.clienteSave);
        

      }
  }

  

}
