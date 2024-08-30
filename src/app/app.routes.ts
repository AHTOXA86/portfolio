import { Routes } from '@angular/router';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component'
import { ProjectsComponent } from "./projects/projects.component";

export const routes: Routes = [
    {
        path: '',
        title: 'Technical skills',
        component: TechnicalSkillsComponent,
      },
    {
        path: 'projects',
        title: 'Projects',
        component: ProjectsComponent,
      },
];
