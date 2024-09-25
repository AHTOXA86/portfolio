import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Project } from '../intefaces'
import { data } from '../data'


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = data.projects;
  displayedColumns = Object.keys(this.projects[0]);

}
