import { Component, OnInit, Input } from '@angular/core';
import { Ruta } from '../model/ruta';
import { RutasListComponent } from '../rutas-list/rutas-list.component';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-ruta-details',
  templateUrl: './ruta-details.component.html',
  styleUrls: ['./ruta-details.component.css']
})
export class RutaDetailsComponent implements OnInit {

  @Input() ruta: Ruta;

  constructor(private rutaService: RutaService,
              private listComponent: RutasListComponent) { }

  ngOnInit() {
  }

}
