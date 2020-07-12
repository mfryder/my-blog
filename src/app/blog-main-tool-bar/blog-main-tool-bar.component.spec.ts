import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMainToolBarComponent } from './blog-main-tool-bar.component';

describe('BlogMainToolBarComponent', () => {
  let component: BlogMainToolBarComponent;
  let fixture: ComponentFixture<BlogMainToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMainToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMainToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
