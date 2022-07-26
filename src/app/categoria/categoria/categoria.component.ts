import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SituacaoEnum } from 'src/app/shared/interfaces/enums/situacaoEnum';



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

  constructor(
    private formBuilder: FormBuilder,
  
  ) { 
    this.form = this.formBuilder.group({
      nome:[''],
      situacao:['']
    })
  }

  ngOnInit(): void {
  }

  

}
