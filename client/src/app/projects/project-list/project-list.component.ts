import { Component, OnInit } from '@angular/core';
import { ProjectCard } from 'src/app/_models/project-card';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  

  projTarot: ProjectCard = {
    id : 1,
    imageUrl: "https://i.imgur.com/bzL7MOv.png",
    title: "Tarot: Arcane Ascension",
    shortDescription: "A medieval, dark fantasy roguelite that immerses you in a quest to reclaim a wronged witch's stolen cards and restore her arcane power."
  }
  projSR: ProjectCard = {
    id : 2,
    imageUrl: "https://i.imgur.com/ZSghKMF.png",
    title: "Salmon Run",
    shortDescription: "Salmon Run follows a school of salmon on their epic journey upstream as part of the famous yearly breeding cycle."
  }
  projSD: ProjectCard = {
    id : 3,
    imageUrl: "https://i.imgur.com/4arKZao.png",
    title: "Spells Disaster",
    shortDescription: "Spells Disaster is a side scrolling action game where a young witch finds her graphic novel world under attack."
  }
  projPVR: ProjectCard = {
    id : 4,
    imageUrl: "https://i.imgur.com/dNElttf.png",
    title: "Pirate VR",
    shortDescription: "A prototype for a vitual reality wave based combat game. Be a pirate that must protect their ship from sea monsters."
  }
  projANTZ: ProjectCard = {
    id : 5,
    imageUrl: "https://i.imgur.com/hryTbiR.png",
    title: "Antz RTS",
    shortDescription: "A prototype for a real time strategy game where the player builds and maintains an ant colony."
  }
  projK: ProjectCard = {
    id : 6,
    imageUrl: "https://i.imgur.com/3RTTzF6.png",
    title: "Kartz",
    shortDescription: "A prototype for a kart racing game."
  }
  projGH: ProjectCard = {
    id : 6,
    imageUrl: "https://i.imgur.com/Z3nKwQh.png",
    title: "Goblin Horder",
    shortDescription: "A prototype for a kart racing game."
  }
  projects: ProjectCard[] = [this.projTarot, this.projSR, this.projANTZ, this.projSD, this.projPVR, this.projK, this.projGH];
  constructor(private projectServices: ProjectsService) { }

  ngOnInit(): void {
    this.loadProjectsLocal();
  }

  loadProjectsLocal(){
    //this.projects[0] = this.projTarot;
  }

  loadProjects() {
    this.projectServices.getProjects().subscribe({
      next: projects => this.projects = projects,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

}
