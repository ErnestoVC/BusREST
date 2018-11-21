import { HttpClient } from '@angular/common/http';
import { Viaje } from './model/viaje';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicio de buses UPC';
}
