import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCommandeFournisseurComponent } from './nouvelle-commande-fournisseur.component';

describe('NouvelleCommandeFournisseurComponent', () => {
  let component: NouvelleCommandeFournisseurComponent;
  let fixture: ComponentFixture<NouvelleCommandeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCommandeFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
