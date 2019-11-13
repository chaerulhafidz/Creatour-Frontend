import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment'

@Injectable({ providedIn: 'root' })
export class ProjectService {
  public API_URL:string = 'http://localhost:8888';

  constructor(
    private http: HttpClient
  ) {}

  // Get all projects
  // GET /api/projects
  getProjects(): Observable<any>{
    return this.http.get(this.API_URL+'/api/projects');
  }

}
