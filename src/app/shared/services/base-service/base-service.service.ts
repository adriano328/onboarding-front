import {HttpClient} from '@angular/common/http';
import { IResultHttp } from '../../interfaces/IResultHttp';
import { environment } from 'src/environments/environment';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Inject} from '@angular/core';
import * as _ from 'lodash';


export abstract class BaseService<T> {

  urlBase: string = '';
  http: HttpClient;
  confirmationSrv: ConfirmationService;
  messageSrv: MessageService;
  private readonly urlBaseOriginal: string;

  protected constructor(
    public url: string,
    @Inject(HttpClient) http: HttpClient,
    @Inject(ConfirmationService) confirmationSrv: ConfirmationService,
    @Inject(MessageService) messageSrv: MessageService
  ) {
    this.urlBase = `${environment.API_URL}/${this.url}`;
    this.urlBaseOriginal = `${environment.API_URL}/${this.url}`;
    this.http = http;
    this.confirmationSrv = confirmationSrv;
    this.messageSrv = messageSrv;
  }

  setParamsFromUrl(fields: string[], values: any[]) {
    this.urlBase = this.urlBaseOriginal;
    fields.forEach((f, i) => {
      this.urlBase = this.urlBase.replace(f, values[i]);
    });
  }

  
  public async GetAll(): Promise<IResultHttp<T[]>> {
    return await this.http.get<IResultHttp<T[]>>(`${this.urlBase}`).toPromise().then();
  }

 
  public async GetById(id: number): Promise<IResultHttp<T>> {
    const result = await this.http.get(`${this.urlBase}/${id}`).toPromise();
    return result as IResultHttp<T>;
  }

  public post(model: T): Promise<IResultHttp<T>> {
    return this.http.post(this.urlBase, model).toPromise() as Promise<IResultHttp<T>>;
  }

  public put(model: T, id: number): Promise<IResultHttp<T>> {
    return this.http.put(`${this.urlBase}/${id}`, model).toPromise() as Promise<IResultHttp<T>>;
  }

  public async delete(id: number, options: { message?: string, field?: string, useConfirm?: boolean }) {
    const message = _.get(options, 'message');
    const useConfirm: boolean = _.get(options, 'useConfirm', true);

    return new Promise(async (resolve, reject) => {
      if (useConfirm) {
        this.confirmationSrv.confirm({
          message: message || `Deseja realmente excluir o regristro?`,
          key: 'deleteConfirm',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          accept: async () => {
            try {
              const result = await this.http.delete(`${this.urlBase}/${id}`).toPromise();
              setTimeout(() => {
                this.messageSrv.add({severity: 'success', summary: 'Sucesso', detail: 'Registro excluído com sucesso'});
              }, 300);
          //    resolve(result['success']);
            } catch (error) {
              reject(error);
              console.error(`delete-${this.url}-${id}-reason:`, error);
            }
          },
          reject: () => {
            resolve(false);
          }
        });
      } else {
        try {
          const result = await this.http.delete(`${this.urlBase}/${id}`).toPromise();
        //  resolve(result['success']);
        } catch (error) {
          reject(error);
          console.error(`delete-${this.url}-${id}-reason:`, error);
        }
      }
    });
  }
}