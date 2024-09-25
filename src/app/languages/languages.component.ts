import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { data } from '../data'


@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages = data.languages
}
