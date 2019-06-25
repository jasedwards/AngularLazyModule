import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from '../widgets/widgets.component';
import {LAZY_WIDGETS} from 'src/app/tokens';
import {lazyArrayToObj} from 'src/app/lazy-widgets';

@NgModule({
  declarations: [WidgetsComponent],
  exports: [WidgetsComponent],
  imports: [
    CommonModule
  ],
  providers: [{ provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }]
})
export class WidgetsModule { }
