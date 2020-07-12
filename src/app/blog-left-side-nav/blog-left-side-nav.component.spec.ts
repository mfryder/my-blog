import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftSideNavComponent } from './blog-left-side-nav.component';

describe('BlogLeftSideNavComponent', () => {
  let component: BlogLeftSideNavComponent;
  let fixture: ComponentFixture<BlogLeftSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLeftSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
