import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSubscriptionTabComponent } from './business-subscription-tab.component';

describe('BusinessSubscriptionTabComponent', () => {
  let component: BusinessSubscriptionTabComponent;
  let fixture: ComponentFixture<BusinessSubscriptionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSubscriptionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSubscriptionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
