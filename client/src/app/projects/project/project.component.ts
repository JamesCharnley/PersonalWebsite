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
  //id: number;
  //imageUrl: string;
  //videoUrl: string;
  //title: string;
  //shortDescription: string;
  //longDescription: string;
  //developmentDescription: string;
  //externalUrl: string;
  //contributions: ProjectContribution[];
  projTarot: Project= {
    id : 1,
    imageUrl: "https://i.imgur.com/bzL7MOv.png",
    title: "Tarot: Arcane Ascension",
    shortDescription: "A medieval, dark fantasy roguelite that immerses you in a quest to reclaim a wronged witch's stolen cards and restore her arcane power.",
    longDescription: "Experience the captivating world of Tarot: Arcane Ascension, a medieval, dark fantasy roguelite that immerses you in a quest to reclaim a wronged witch's stolen cards and restore her arcane power. Engage in satisfying hack 'n' slash combat, honing your skills and adapting your play style through the strategic use of collected cards. Prepare to face formidable bosses representing the iconic Major Arcana of tarot, defeating them grants powerful abilities that will aid you on your journey.",
    videoUrl: "https://www.youtube.com/embed/1ouDMGMvD_Q",
    developmentDescription: "This video game was collaboratively developed by a team of programmers and artists as part of a university project, showcasing the entire production cycle from prototype to release.",
    externalUrl: "https://big-wheel-games.itch.io/tarot",
    contributions: ["NPC behaviour", "NPC combat", "NPC animation controllers", "NPC spawning system", "Level selection system", "Controller support for UI"]
  }
  projSR: Project = {
    id : 2,
    imageUrl: "https://i.imgur.com/ZSghKMF.png",
    title: "Salmon Run",
    shortDescription: "Salmon Run follows a school of salmon on their epic journey upstream as part of the famous yearly breeding cycle.",
    longDescription: "Salmon Run follows a school of salmon on their epic journey upstream as part of the famous yearly breeding cycle. While tackling currents and rapids, the salmon will travel through all different unique environments that will put the salmon to the ultimate test. Will you make it to the end and strengthen the salmon population for years to come?",
    videoUrl: "",
    developmentDescription: "This video game was collaboratively developed by a team of programmers and artists as part of a university project using Unity and C#. The project showcases the early stages of the production cycle from prototype to vertical slice.",
    externalUrl: "https://the-reel-deal.itch.io/salmon-run",
    contributions: ["NPC behaviour", "River building tools", "River current system", "River obstacle system"]
  }
  projSD: Project = {
    id : 3,
    imageUrl: "https://i.imgur.com/4arKZao.png",
    title: "Spells Disaster",
    shortDescription: "Spells Disaster is a side scrolling action game where a young witch finds her graphic novel world under attack.",
    longDescription: "",
    videoUrl: "",
    developmentDescription: "",
    externalUrl: "",
    contributions: ["ssdfsd", "sdfdsf"]
  }
  projPVR: Project = {
    id : 4,
    imageUrl: "https://i.imgur.com/dNElttf.png",
    title: "Pirate VR",
    shortDescription: "A prototype for a vitual reality wave based combat game. Be a pirate that must protect their ship from sea monsters.",
    longDescription: "",
    videoUrl: "",
    developmentDescription: "",
    externalUrl: "",
    contributions: ["ssdfsd", "sdfdsf"]
  }
  projANTZ: Project = {
    id : 5,
    imageUrl: "https://i.imgur.com/hryTbiR.png",
    title: "Antz RTS",
    shortDescription: "A prototype for a real time strategy game where the player builds and maintains an ant colony.",
    longDescription: "",
    videoUrl: "",
    developmentDescription: "",
    externalUrl: "",
    contributions: ["ssdfsd", "sdfdsf"]
  }
  projK: Project = {
    id : 6,
    imageUrl: "https://i.imgur.com/3RTTzF6.png",
    title: "Kartz",
    shortDescription: "A prototype for a kart racing game.",
    longDescription: "",
    videoUrl: "",
    developmentDescription: "",
    externalUrl: "",
    contributions: ["ssdfsd", "sdfdsf"]
  }
  projGH: Project = {
    id : 6,
    imageUrl: "https://i.imgur.com/Z3nKwQh.png",
    title: "Goblin Horder",
    shortDescription: "A prototype for a kart racing game.",
    longDescription: "",
    videoUrl: "",
    developmentDescription: "",
    externalUrl: "",
    contributions: ["ssdfsd", "sdfdsf"]
  }
  projects: Project[] = [this.projTarot, this.projSR];
  project: Project | undefined;
  
  constructor(private projectServices: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.loadProject();
    var projectId = this.route.snapshot.paramMap.get('id');
    if(projectId)
    {
      var projectIdNum: number = +projectId;
      projectIdNum--;
      this.project = this.projects[projectIdNum];
    }
    
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
