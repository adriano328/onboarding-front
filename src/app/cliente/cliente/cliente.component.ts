import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SexoEnum, SexoLabel } from 'src/app/shared/interfaces/enums/sexoEnum';
import { TipoEnum, TipoLabel } from 'src/app/shared/interfaces/enums/tipoEnum';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  form!: FormGroup;

  situacao!: string;

  sexo!: string;
  
  public SexoLabel = SexoLabel;
  public sexos = Object.values(SexoEnum);

  public TipoLabel = TipoLabel;
  public tipos = Object.values(TipoEnum);


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      sexo:[''],
      tipo: [''],
    })
  }

}
