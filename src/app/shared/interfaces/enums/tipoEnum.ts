export enum TipoEnum{
    Selecione = "Selecione",
    Pessoa_Fisica = "PESSOA_FISICA",
    Pessoa_Juridica = "PESSOA_JURIDICA"
}

export const TipoLabel: Record<TipoEnum, string> = {
    [TipoEnum.Selecione]: "Selecione",
    [TipoEnum.Pessoa_Fisica]: "Pessoa Física",
    [TipoEnum.Pessoa_Juridica]: "Pessoa Jurídica"
}