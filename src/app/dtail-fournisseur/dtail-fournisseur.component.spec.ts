import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailFournisseurComponent } from './dtail-fournisseur.component';

describe('DtailFournisseurComponent', () => {
  let component: DtailFournisseurComponent;
  let fixture: ComponentFixture<DtailFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
