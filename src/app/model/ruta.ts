import { CampusListComponent } from './../campus-list/campus-list.component';
import { CampusService } from './../campus.service';
import { Campus } from "./campus";
import { ViewChild } from '@angular/core';

export class Ruta {
    
    id:number;
    nombre:string;
    campus_salida: Campus
    campus_llegada: Campus
    
}
