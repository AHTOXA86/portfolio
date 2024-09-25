import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component'
import { NgOptimizedImage } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgtCanvas } from 'angular-three';
import { GrassComponent } from './grass/grass.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavmenuComponent, NgOptimizedImage, MatGridListModule, NgtCanvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Anton Chahan';
  readonly SceneGraph = GrassComponent;
}
