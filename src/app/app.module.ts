import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {lazyArrayToObj} from 'src/app/lazy-widgets';
import {LAZY_WIDGETS} from 'src/app/tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }],
  bootstrap: [AppComponent]
})
export class AppModule { }
