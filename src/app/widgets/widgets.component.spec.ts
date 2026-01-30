import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import { LAZY_WIDGETS } from '../tokens';
import { Compiler, EnvironmentInjector } from '@angular/core';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsComponent ],
      providers: [
        { 
          provide: LAZY_WIDGETS, 
          useValue: {} 
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
