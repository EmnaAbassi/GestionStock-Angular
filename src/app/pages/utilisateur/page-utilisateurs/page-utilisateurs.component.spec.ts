import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilisateursComponent } from './page-utilisateurs.component';

describe('PageUtilisateursComponent', () => {
  let component: PageUtilisateursComponent;
  let fixture: ComponentFixture<PageUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
