import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebymonthComponent } from './purchasebymonth.component';

describe('PurchasebymonthComponent', () => {
  let component: PurchasebymonthComponent;
  let fixture: ComponentFixture<PurchasebymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasebymonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasebymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
