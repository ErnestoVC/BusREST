import { ViajeService } from './../viaje.service';
import { Viaje } from './../model/viaje';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent implements OnInit {

  viajes: Viaje[];

  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
  }

  reloadData(){
    this.viajeService.getViajeList().subscribe(viajes=>{
      this.viajes=viajes;
      console.log(this.viajes);
    })
  }

}
