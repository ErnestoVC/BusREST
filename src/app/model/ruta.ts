import { CampusService } from './../campus.service';
import { Campus } from "./campus";

export class Ruta {
    id:number;
    nombre:string;
    campus_salida: {
        id: number
        nombre_salida: String
    }
    campus_llegada: {
        id:number
        nombre_llegada: string
    }
}
