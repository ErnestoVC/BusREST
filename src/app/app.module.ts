import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateViajeComponent } from './create-viaje/create-viaje.component';
import { CreatePagoComponent } from './create-pago/create-pago.component';
import { CreateEstudianteComponent } from './create-estudiante/create-estudiante.component';
import { CreateClaseComponent } from './create-clase/create-clase.component';
import { ViajeDetailsComponent } from './viaje-details/viaje-details.component';
import { PagoDetailsComponent } from './pago-details/pago-details.component';
import { EstudianteDetailsComponent } from './estudiante-details/estudiante-details.component';
import { ClaseDetailsComponent } from './clase-details/clase-details.component';
import { ClasesListComponent } from './clases-list/clases-list.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagosListComponent } from './pagos-list/pagos-list.component';
import { EstudiantesListComponent } from './estudiantes-list/estudiantes-list.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { SearchClasesComponent } from './search-clases/search-clases.component';
import { SearchEstudiantesComponent } from './search-estudiantes/search-estudiantes.component';
import { SearchPagosComponent } from './search-pagos/search-pagos.component';
import { SearchViajesComponent } from './search-viajes/search-viajes.component';
import { CreateRutaComponent } from './create-ruta/create-ruta.component';
import { RutaDetailsComponent } from './ruta-details/ruta-details.component';
import { RutasListComponent } from './rutas-list/rutas-list.component';
import { SearchRutasComponent } from './search-rutas/search-rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateViajeComponent,
    CreatePagoComponent,
    CreateEstudianteComponent,
    CreateClaseComponent,
    ViajeDetailsComponent,
    PagoDetailsComponent,
    EstudianteDetailsComponent,
    ClaseDetailsComponent,
    ClasesListComponent,
    EstudianteListComponent,
    PagoListComponent,
    PagosListComponent,
    EstudiantesListComponent,
    ViajesListComponent,
    SearchClasesComponent,
    SearchEstudiantesComponent,
    SearchPagosComponent,
    SearchViajesComponent,
    CreateRutaComponent,
    RutaDetailsComponent,
    RutasListComponent,
    SearchRutasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
