import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  category: string;
  values: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { category: 'PROGRAMMING LANGUAGES', values: 'Python, TypeScript, PHP, HAML ' }
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
}
