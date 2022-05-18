import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommandeFournisseurComponent } from './update-commande-fournisseur.component';

describe('UpdateCommandeFournisseurComponent', () => {
  let component: UpdateCommandeFournisseurComponent;
  let fixture: ComponentFixture<UpdateCommandeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommandeFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
