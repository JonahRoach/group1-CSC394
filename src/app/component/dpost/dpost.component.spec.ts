import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPostComponent } from './dpost.component';

describe('DPostComponent', () => {
  let component: DPostComponent;
  let fixture: ComponentFixture<DPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
