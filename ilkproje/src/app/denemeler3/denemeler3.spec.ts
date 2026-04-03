import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Denemeler3 } from './denemeler3';

describe('Denemeler3', () => {
  let component: Denemeler3;
  let fixture: ComponentFixture<Denemeler3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denemeler3],
    }).compileComponents();

    fixture = TestBed.createComponent(Denemeler3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
