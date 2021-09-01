export interface Perfil{
    id: number;
    photo: string;
    name: string;
    email: string;
    about: string;
}

export type Perfilador = Array<Perfil>
