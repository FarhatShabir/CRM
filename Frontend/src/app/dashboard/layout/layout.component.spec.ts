import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< Updated upstream:Frontend/src/app/dashboard/components/layout/layout.component.spec.ts
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
========
import { LayoutsComponent } from './layouts.component';

describe('LayoutsComponent', () => {
  let component: LayoutsComponent;
  let fixture: ComponentFixture<LayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsComponent);
>>>>>>>> Stashed changes:Frontend/src/app/sales/layouts/layouts.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
