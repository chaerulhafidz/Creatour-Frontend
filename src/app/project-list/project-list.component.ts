import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // List of projects variable
  projects: any=[];

  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects.data;
        console.log(this.projects);
      });
  }

}
