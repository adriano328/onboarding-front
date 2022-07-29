import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { zipAll } from 'rxjs';
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

  situacao : any;

  form!: FormGroup;

  enumSituacao!: SituacaoEnum[];

  selectedCity: any;

  categoriaSave: any = {} as ICategoria;

  idCategoriaFind!: number;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  
  ) { 
    
    
    this.idCategoriaFind = parseInt(this.route.snapshot.paramMap.get('id')!);


   if(this.idCategoriaFind){
    this.categoriaService.GetById(this.idCategoriaFind).then(success => {
      this.categoriaSave = success
    })
   }
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome:[''],
      situacao:['']
    })
  }

  save(){

    this.categoriaSave.nome = this.form.value.nome;
    this.categoriaSave.situacao = this.situacao;

    
    if(this.idCategoriaFind){
      
       this.categoriaService.put(this.categoriaSave, this.idCategoriaFind);
        
    } else {
      this.categoriaService.post(this.categoriaSave);
    }
    
  }



 

}
