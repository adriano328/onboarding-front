export enum SexoEnum{
    Selecione = 'Selecione',
    Masculino = 'MASCULINO',
    Feminino = 'FEMININO'
}

export const SexoLabel:Record<SexoEnum, string> = {
    [SexoEnum.Selecione]: "Selecione",
    [SexoEnum.Masculino]: "Masculino",
    [SexoEnum.Feminino]: "Feminino"
}