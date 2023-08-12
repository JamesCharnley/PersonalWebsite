import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ProjectCard } from '../_models/project-card';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<ProjectCard[]>(this.baseUrl + 'projects')
  }
  getProject(id: string) {
    return this.http.get<Project>(this.baseUrl + 'projects/' + id)
  }
}
