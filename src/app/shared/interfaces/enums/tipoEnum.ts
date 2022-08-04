export enum TipoEnum{
    Selecione = "Selecione",
    Pessoa_Fisica = "Pessoa Física",
    Pessoa_Juridica = "Pessoa Jurídica"
}

export const TipoLabel: Record<TipoEnum, string> = {
    [TipoEnum.Selecione]: "Selecione",
    [TipoEnum.Pessoa_Fisica]: "Pessoa Física",
    [TipoEnum.Pessoa_Juridica]: "Pessoa Jurídica"
}