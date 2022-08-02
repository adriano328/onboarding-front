import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ICategoria } from '../../interfaces/ICategoria';
import { BaseService } from '../base-service/base-service.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService  extends BaseService<any>{

  constructor(
    @Inject(HttpClient) http: HttpClient,
      @Inject(ConfirmationService) confirmationSrv: ConfirmationService,
      @Inject(MessageService) messageSrv: MessageService
  ) {
    super('categoria', http, confirmationSrv, messageSrv);
  }

  searchByName(nome: string){
    return this.http.get<ICategoria>(`${this.urlBase}/listar-por-nome`,
    {params: new HttpParams().set('nome', nome || '').set('situacao', 0)}).pipe(
      
    )
  }
  
  
}
