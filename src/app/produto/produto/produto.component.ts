import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from 'src/app/shared/interfaces/ICategoria';
import { IProduto } from 'src/app/shared/interfaces/IProduto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  situacao: any;

  form!: FormGroup;

  ProdutoSave: any = {} as ICategoria;

  categoriaSave: any = {} as ICategoria;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
      
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:[''],
      situacao: [''],
      categoria: ['']
    })
  }

  save(){
    console.log("Funcionou");
    
  }

}
