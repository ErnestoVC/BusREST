import { Campus } from './../model/campus';
import { Component, OnInit } from '@angular/core';
import { Ruta } from '../model/ruta';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-rutas-list',
  templateUrl: './rutas-list.component.html',
  styleUrls: ['./rutas-list.component.css']
})
export class RutasListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
