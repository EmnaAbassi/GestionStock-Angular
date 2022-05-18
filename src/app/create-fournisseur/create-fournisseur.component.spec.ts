import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFournisseurComponent } from './create-fournisseur.component';

describe('CreateFournisseurComponent', () => {
  let component: CreateFournisseurComponent;
  let fixture: ComponentFixture<CreateFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
