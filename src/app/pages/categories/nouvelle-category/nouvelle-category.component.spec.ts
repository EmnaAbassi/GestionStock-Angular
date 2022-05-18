import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCategoryComponent } from './nouvelle-category.component';

describe('NouvelleCategoryComponent', () => {
  let component: NouvelleCategoryComponent;
  let fixture: ComponentFixture<NouvelleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
