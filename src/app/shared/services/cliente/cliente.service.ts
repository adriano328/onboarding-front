import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseService } from '../base-service/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<any>{

  constructor(
    @Inject(HttpClient) http: HttpClient,
      @Inject(ConfirmationService) confirmationSrv: ConfirmationService,
      @Inject(MessageService) messageSrv: MessageService
  ) {
    super('cliente', http, confirmationSrv, messageSrv);
  }

}
