import { CreateCampusComponent } from './create-campus/create-campus.component';
import { CampusListComponent } from './campus-list/campus-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo : 'customer', pathMatch: 'full'},
    { path: 'list', component: CampusListComponent },
    { path: 'new', component: CreateCampusComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
