import { Routes } from '@angular/router';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component'
import { ProjectsComponent } from "./projects/projects.component";
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';

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
    {
        path: 'languages',
        title: 'Languages',
        component: LanguagesComponent,
      },
    {
        path: 'education',
        title: 'Education',
        component: EducationComponent,
      },
];
