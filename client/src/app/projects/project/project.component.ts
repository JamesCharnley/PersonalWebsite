import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';
import {DomSanitizer} from '@angular/platform-browser';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined;
  urlName: string | undefined;
  
  constructor(private projectServices: ProjectsService, private route: ActivatedRoute, private sanitizerService: DomSanitizer) { }

  ngOnInit(): void {
    this.loadProject();
    //this.urlName = this.getExternalUrlName();
  }

  loadProject() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if(!projectId){
      console.log("ID is null");
      return;
    } 
    this.projectServices.getProject(projectId).subscribe({
      next: project => this.project = project,
      error: error => console.log(error),
      complete: () => this.urlName = this.getExternalUrlName()
    })
  }

  getExternalUrlName()
  {
    if(this.project)
    {
      if(this.project.externalUrl)
      {
        let substr= 'itch';

        if(this.containsSubStr(this.project.externalUrl.toString(), substr))
        {
          return 'Itch.io';
        }

        substr = 'github';

        if(this.containsSubStr(this.project.externalUrl.toString(), substr))
        {
          return 'Github';
        }
        
        return 'More';
      }
    }
    else
    {
      console.log("project is null");
    }
    console.log("getExternalUrl returned undefined");
    return undefined;
  }
  containsSubStr(str: string, substr: string)
  {
    const result = str.includes(substr);
    if(result)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  videoURL(){
    if(this.project)
    return this.sanitizerService.bypassSecurityTrustResourceUrl(this.project.videoUrl);
    else
    return undefined;
  }

}
