import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  category: string;
  values: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { category: 'PROGRAMMING LANGUAGES AND TECHNOLOGIES', values: 'Python, TypeScript, HAML, HTML5, CSS3, SASS, JavaScript, UML, PHP, C/C++' },
  { category: 'WEB SERVERS', values: 'Gunicorn, Sshd, Apache HTTPD, Nginx, FTP ' },
  { category: 'VERSION CONTROL TOOLS', values: 'Git, GitLab, Bitbucket ' },
  { category: 'OPERATING SYSTEMS ', values: 'macOS, Linux, Windows, Android (desktop)' },

];

const ELEMENT_DATA2: PeriodicElement[] = [

  { category: 'FRAMEWORKS AND LIBRARIES ', values: 'Django, Flask, aiohttp, Silex, React.js, Angular ' },
  { category: 'WEB TECHNOLOGIES ', values: 'JavaScript ES6, JSON, XML, CSS, HTML/DHTML, RESTful API ' },
  { category: 'SHELL SCRIPTING ', values: 'GBash, Zsh ' },
  { category: 'DEVELOPMENT TOOLS ', values: 'Docker, Kubernetes, Pytest, Jira, Jenkins, VirtualBox, Vagrant, PyLint, ESLint, pre-commit' },
  { category: 'SERVICES', values: 'AWS' },
  { category: 'DATABASES', values: 'PostgreSQL, MySQL, MongoDB ' },
  { category: 'METHODOLOGIES', values: 'TDD, Continuous Integration, Scrum ' },
 
];

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [MatCardModule, MatTableModule],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss'
})
export class TechnicalSkillsComponent {
  displayedColumns: string[] = ['category', 'values'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
}
