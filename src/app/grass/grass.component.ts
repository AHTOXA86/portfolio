import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { extend, NgtBeforeRenderEvent, NgtArgs, NGT_STORE} from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import * as THREE from 'three';

extend(THREE);
extend({ OrbitControls });

@Component({
    standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgtArgs],
  templateUrl: './grass.component.html'
})
export class GrassComponent {
  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
}


private readonly store = inject(NGT_STORE);
readonly camera = this.store.get('camera');
readonly glDom = this.store.get('gl', 'domElement');

}
