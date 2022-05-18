import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommandeClientComponent } from './update-commande-client.component';

describe('UpdateCommandeClientComponent', () => {
  let component: UpdateCommandeClientComponent;
  let fixture: ComponentFixture<UpdateCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
