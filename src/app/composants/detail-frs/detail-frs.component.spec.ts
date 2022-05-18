import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFrsComponent } from './detail-frs.component';

describe('DetailFrsComponent', () => {
  let component: DetailFrsComponent;
  let fixture: ComponentFixture<DetailFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
