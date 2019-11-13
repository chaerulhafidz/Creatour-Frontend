import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // List of projects variable
  // projects = {};

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    //this.projectService.getProjects()
    //  .subscribe(pr);
  }

  getProjects(){

  }

}
