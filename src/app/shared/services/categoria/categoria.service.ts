import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseService } from '../base-service/base-services.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService  extends BaseService<any>{

  constructor(
    @Inject(HttpClient) http: HttpClient,
      @Inject(ConfirmationService) confirmationSrv: ConfirmationService,
      @Inject(MessageService) messageSrv: MessageService
  ) {
    super('categorias', http, confirmationSrv, messageSrv);
  }
  
}
