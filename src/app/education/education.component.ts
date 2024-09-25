import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { data } from '../data'

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = data.education
}
