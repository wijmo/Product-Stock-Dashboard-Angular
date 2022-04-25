import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentEditComponent } from './adjustment-edit.component';

describe('AdjustmentEditComponent', () => {
  let component: AdjustmentEditComponent;
  let fixture: ComponentFixture<AdjustmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
