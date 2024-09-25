import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [MatToolbarModule, MatToolbarRow, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  @Input() title="";

}
