import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SituacaoEnum } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { BaseService } from 'src/app/shared/services/base-service/base-service.service';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  situacao : String = '';

  form!: FormGroup;

  enumSituacao!: SituacaoEnum[];

  selectedCity: any;

  categoriaSave: ICategoria = {} as ICategoria;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
  
  ) { 
    this.form = this.formBuilder.group({
      nome:[''],
      situacao:['']
    })
  }

  ngOnInit(): void {
  }

  save(){
    this.categoriaSave.nome = "alefe";
    this.categoriaSave.situacao = true;

    this.categoriaService.post(this.categoriaSave);
  }

}
