import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniSifreComponent } from './yeni-sifre-component';

describe('YeniSifreComponent', () => {
  let component: YeniSifreComponent;
  let fixture: ComponentFixture<YeniSifreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YeniSifreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YeniSifreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
