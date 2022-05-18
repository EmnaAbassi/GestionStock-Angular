import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailCommandeFournisseurComponent } from './dtail-commande-fournisseur.component';

describe('DtailCommandeFournisseurComponent', () => {
  let component: DtailCommandeFournisseurComponent;
  let fixture: ComponentFixture<DtailCommandeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailCommandeFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
