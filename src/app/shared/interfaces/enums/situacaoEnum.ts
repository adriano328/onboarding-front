export enum SituacaoEnum {
    Ativo = "ATIVO",
    Inativo = "INATIVO"
}



export const SituacaoLabel:Record<SituacaoEnum, string> = {
    [SituacaoEnum.Ativo]: "Ativo",
    [SituacaoEnum.Inativo]: "Inativo",
}