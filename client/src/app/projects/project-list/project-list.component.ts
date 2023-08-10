import { Component, OnInit } from '@angular/core';
import { ProjectCard } from 'src/app/_models/project-card';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ProjectCard[] = [];
  
  constructor(private projectServices: ProjectsService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectServices.getProjects().subscribe({
      next: projects => this.projects = projects,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

}
