import { IEmail } from "./IEmail";
import { IEndereco } from "./IEndereco";
import { ITelefone } from "./ITelefone";

export interface ICliente{
    id: number;
    nomeRazao?: string;
    sexo?: string;
    tipo?: string;
    cpfoucnpj?: string;
    inscricaoEstadual?: string;
    situacao?: string;
    dtaNascimento?: string;
    endereco?: IEndereco;
    telefone?: ITelefone;
    email?: IEmail;
}