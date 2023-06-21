import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbymonthComponent } from './salesbymonth.component';

describe('SalesbymonthComponent', () => {
  let component: SalesbymonthComponent;
  let fixture: ComponentFixture<SalesbymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesbymonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesbymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
