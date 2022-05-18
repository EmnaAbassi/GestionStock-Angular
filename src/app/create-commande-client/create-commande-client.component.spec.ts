import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommandeClientComponent } from './create-commande-client.component';

describe('CreateCommandeClientComponent', () => {
  let component: CreateCommandeClientComponent;
  let fixture: ComponentFixture<CreateCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
