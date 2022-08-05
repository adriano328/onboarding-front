export enum SexoEnum{
    Selecione = "Selecione",
    Masculino = "MASCULINO",
    Feminino = "FEMENINO"
}

export const SexoLabel:Record<SexoEnum, string> = {
    [SexoEnum.Selecione]: "Selecione",
    [SexoEnum.Masculino]: "mascu",
    [SexoEnum.Feminino]: "Feminino"
}