import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Denemeler2 } from './denemeler2';

describe('Denemeler2', () => {
  let component: Denemeler2;
  let fixture: ComponentFixture<Denemeler2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denemeler2],
    }).compileComponents();

    fixture = TestBed.createComponent(Denemeler2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
