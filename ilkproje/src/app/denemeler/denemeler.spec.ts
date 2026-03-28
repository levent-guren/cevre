import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Denemeler } from './denemeler';

describe('Denemeler', () => {
  let component: Denemeler;
  let fixture: ComponentFixture<Denemeler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denemeler],
    }).compileComponents();

    fixture = TestBed.createComponent(Denemeler);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
