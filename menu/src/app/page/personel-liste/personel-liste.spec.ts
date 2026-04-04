import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelListe } from './personel-liste';

describe('PersonelListe', () => {
  let component: PersonelListe;
  let fixture: ComponentFixture<PersonelListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelListe],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonelListe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
