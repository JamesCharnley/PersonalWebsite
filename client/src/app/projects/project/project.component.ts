import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined;
  
  constructor(private projectServices: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if(!projectId){
      console.log("ID is null");
      return;
    } 
    this.projectServices.getProject(projectId).subscribe({
      next: project => this.project = project
    })
  }

}
