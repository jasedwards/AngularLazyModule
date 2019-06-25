import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OtherLazyComponent} from 'src/app/other-lazy/other-lazy.component';

@NgModule({
  declarations: [OtherLazyComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [OtherLazyComponent]
})
export class OtherLazyModule {
  static entry = OtherLazyComponent;
}
