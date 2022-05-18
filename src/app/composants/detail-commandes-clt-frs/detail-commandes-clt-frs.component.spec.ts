import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandesCltFrsComponent } from './detail-commandes-clt-frs.component';

describe('DetailCommandesCltFrsComponent', () => {
  let component: DetailCommandesCltFrsComponent;
  let fixture: ComponentFixture<DetailCommandesCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommandesCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommandesCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
