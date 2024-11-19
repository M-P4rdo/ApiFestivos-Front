import { Tipo } from './tipo';

export interface Festivo {
    "id": number,
    "nombre": String,
    "dia": number,
    "mes": number,
    "diasPascua": number,
    "tipo": Tipo
}