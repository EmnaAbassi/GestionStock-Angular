import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailCommandeClientComponent } from './dtail-commande-client.component';

describe('DtailCommandeClientComponent', () => {
  let component: DtailCommandeClientComponent;
  let fixture: ComponentFixture<DtailCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailCommandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
