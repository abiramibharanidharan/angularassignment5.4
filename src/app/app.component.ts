import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['background-color:red'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Emulated works!'
 

}
