export enum SexoEnum{
    Selecione = "Selecione",
    Masculino = "Masculino",
    Feminino = "Feminino"
}

export const SexoLabel:Record<SexoEnum, string> = {
    [SexoEnum.Selecione]: "Selecione",
    [SexoEnum.Masculino]: "Masculino",
    [SexoEnum.Feminino]: "Feminino"
}