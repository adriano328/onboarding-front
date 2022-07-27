import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SituacaoEnum, SituacaoLabel } from 'src/app/shared/interfaces/enums/situacaoEnum';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { CategoriaService } from 'src/app/shared/services/categoria/categoria.service';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  form!: FormGroup;

  categoriaSave: ICategoria = {} as ICategoria

  listCategoria: any = [];

  public SituacaoLabel = SituacaoLabel;

  public situacoes = Object.values(SituacaoEnum);

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
  ) { 
    this.categoriaService.GetAll().then(success =>{
      
      this.listCategoria = success;
       console.log(this.listCategoria);
    })

   
    
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:['']
    })
  }

 
      
    
  } 
 


