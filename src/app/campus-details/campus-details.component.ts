import { CampusListComponent } from './../campus-list/campus-list.component';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Campus } from '../model/campus';
import { CampusService } from '../campus.service';

@Component({
  selector: 'app-campus-details',
  templateUrl: './campus-details.component.html',
  styleUrls: ['./campus-details.component.css']
})
export class CampusDetailsComponent implements OnInit {

  @Input() campus: Campus;

  constructor(private campusService: CampusService,
              private listComponent: CampusListComponent){

  } 

  ngOnInit() {
  }

 
}
