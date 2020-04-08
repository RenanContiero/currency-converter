import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianComponent } from './canadian.component';

describe('CanadianComponent', () => {
  let component: CanadianComponent;
  let fixture: ComponentFixture<CanadianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
