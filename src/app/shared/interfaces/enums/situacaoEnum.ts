export enum SituacaoEnum {
    Ativo = "Ativo",
    Inativo = "Inativo"
}

export const SituacaoLabel:Record<SituacaoEnum, string> = {
    [SituacaoEnum.Ativo]: "Ativo",
    [SituacaoEnum.Inativo]: "Inativo",
}