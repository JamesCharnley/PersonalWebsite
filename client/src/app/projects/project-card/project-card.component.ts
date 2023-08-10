import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from 'src/app/_models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectCard | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
