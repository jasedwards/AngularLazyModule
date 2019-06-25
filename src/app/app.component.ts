import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyLoaderService} from 'src/app/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;

  constructor() {
  }


}
