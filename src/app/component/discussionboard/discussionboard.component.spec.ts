import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionboardComponent } from './discussionboard.component';

describe('DiscussionboardComponent', () => {
  let component: DiscussionboardComponent;
  let fixture: ComponentFixture<DiscussionboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
