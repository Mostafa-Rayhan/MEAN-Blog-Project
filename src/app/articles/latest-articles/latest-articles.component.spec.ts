import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArticlesComponent } from './latest-articles.component';

describe('LatestArticlesComponent', () => {
  let component: LatestArticlesComponent;
  let fixture: ComponentFixture<LatestArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestArticlesComponent]
    });
    fixture = TestBed.createComponent(LatestArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
