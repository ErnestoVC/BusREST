import { Time } from "@angular/common";
import { Ruta } from "./ruta";

export class Viaje {
    id: number
    fecha: Date
    horaInicio: Time
    horaFinal: Time
    ruta: Ruta
}
