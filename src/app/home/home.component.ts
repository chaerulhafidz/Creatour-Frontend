import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentProjects = {};

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.recentProjects = projects.data.slice(0,4);
        console.log(this.recentProjects);
      });
  }

}
