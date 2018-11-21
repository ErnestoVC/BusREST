import { CreateCampusComponent } from './create-campus/create-campus.component';
import { CampusListComponent } from './campus-list/campus-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasListComponent } from './rutas-list/rutas-list.component';

const routes: Routes = [
    { path: '', redirectTo : 'customer', pathMatch: 'full'},
    { path: 'list', component: CampusListComponent },
    { path: 'new', component: CreateCampusComponent},
    { path: 'rutas', component: RutasListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
