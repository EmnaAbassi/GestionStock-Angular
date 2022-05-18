import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailArticleComponent } from './dtail-article.component';

describe('DtailArticleComponent', () => {
  let component: DtailArticleComponent;
  let fixture: ComponentFixture<DtailArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
