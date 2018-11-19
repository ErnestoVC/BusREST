import { CampusService } from './../campus.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Campus } from '../model/campus';

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.css']
})
export class CampusListComponent implements OnInit {

  campuses: Observable<Campus[]>

  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.campuses=this.campusService.getCampusList();
  }

}
