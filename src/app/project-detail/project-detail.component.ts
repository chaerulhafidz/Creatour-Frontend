import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
       return this.projectService.getProjectById(+params.get('projectId'));
     })).subscribe(project => {this.project = project.data; console.log(this.project)});
  }
}
