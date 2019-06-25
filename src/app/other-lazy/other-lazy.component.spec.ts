import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLazyComponent } from './other-lazy.component';

describe('OtherLazyComponent', () => {
  let component: OtherLazyComponent;
  let fixture: ComponentFixture<OtherLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
