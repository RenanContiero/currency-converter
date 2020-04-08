import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustralianComponent } from './australian.component';

describe('AustralianComponent', () => {
  let component: AustralianComponent;
  let fixture: ComponentFixture<AustralianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustralianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustralianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
