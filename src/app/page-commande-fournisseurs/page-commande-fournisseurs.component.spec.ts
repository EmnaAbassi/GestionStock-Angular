import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeFournisseursComponent } from './page-commande-fournisseurs.component';

describe('PageCommandeFournisseursComponent', () => {
  let component: PageCommandeFournisseursComponent;
  let fixture: ComponentFixture<PageCommandeFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommandeFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommandeFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
