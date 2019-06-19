import { Title } from '@angular/platform-browser';

export interface Usuario {
    id?: number;
    nombre?: string;
    apellidoM?: string;
    apellidoP?: string;
    direccion?:string;
    telefono?: string;
    correo?: string;
    plantel?: string;
    perfil?: string;
    user_id?: number;
    creado?: Date
};

