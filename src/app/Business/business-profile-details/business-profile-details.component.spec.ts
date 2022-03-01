import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProfileDetailsComponent } from './business-profile-details.component';

describe('BusinessProfileDetailsComponent', () => {
  let component: BusinessProfileDetailsComponent;
  let fixture: ComponentFixture<BusinessProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
