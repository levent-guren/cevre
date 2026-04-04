import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasArama } from './demirbas-arama';

describe('DemirbasArama', () => {
  let component: DemirbasArama;
  let fixture: ComponentFixture<DemirbasArama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemirbasArama],
    }).compileComponents();

    fixture = TestBed.createComponent(DemirbasArama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
