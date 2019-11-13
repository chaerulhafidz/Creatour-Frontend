import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment'

export class ProjectService {
  public API_URL:string = 'http://localhost:8888';

  constructor(
    private http: HttpClient
  ) {}

  // Get all projects
  // GET /api/projects
  getProjects(): Observable<any>{
    console.log(this.API_URL+'/api/projects');
    return this.http.get(this.API_URL+'/api/projects');
  }

}