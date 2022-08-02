import { ICategoria } from "./ICategoria";

export interface IProduto{
    id: number,
    nomeProduto?: string,
    categoria?: ICategoria,
    situacao?: boolean
}