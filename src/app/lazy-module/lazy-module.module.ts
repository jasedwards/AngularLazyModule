import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyModuleComponent} from 'src/app/lazy-module/lazy-module.component';

@NgModule({
  declarations: [LazyModuleComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModuleModule {
  static entry = LazyModuleComponent;
}
