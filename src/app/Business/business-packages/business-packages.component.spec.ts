import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPackagesComponent } from './business-packages.component';

describe('BusinessPackagesComponent', () => {
  let component: BusinessPackagesComponent;
  let fixture: ComponentFixture<BusinessPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
