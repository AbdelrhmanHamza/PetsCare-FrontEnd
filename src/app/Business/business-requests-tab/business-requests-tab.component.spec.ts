import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRequestsTabComponent } from './business-requests-tab.component';

describe('BusinessRequestsTabComponent', () => {
  let component: BusinessRequestsTabComponent;
  let fixture: ComponentFixture<BusinessRequestsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRequestsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRequestsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
