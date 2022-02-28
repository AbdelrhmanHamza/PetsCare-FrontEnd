import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUpdateFormComponent } from './business-update-form.component';

describe('BusinessUpdateFormComponent', () => {
  let component: BusinessUpdateFormComponent;
  let fixture: ComponentFixture<BusinessUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
