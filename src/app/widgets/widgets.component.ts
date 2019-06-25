import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyLoaderService} from 'src/app/lazy-loader.service';
import {lazyWidgets} from 'src/app/lazy-widgets';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;

  constructor(private loader: LazyLoaderService) {
  }

  load() {
    this.container.clear();
    for (const w of lazyWidgets) {
      this.loader.load(w.name, this.container);
    }

  }

}
