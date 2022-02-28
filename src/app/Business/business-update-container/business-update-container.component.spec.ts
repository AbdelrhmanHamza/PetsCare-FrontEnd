import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUpdateContainerComponent } from './business-update-container.component';

describe('BusinessUpdateContainerComponent', () => {
  let component: BusinessUpdateContainerComponent;
  let fixture: ComponentFixture<BusinessUpdateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUpdateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
