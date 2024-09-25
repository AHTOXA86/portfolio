import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
    standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './grass.component.html'
})
export class GrassComponent {

}
