import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailUserComponent } from './dtail-user.component';

describe('DtailUserComponent', () => {
  let component: DtailUserComponent;
  let fixture: ComponentFixture<DtailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
