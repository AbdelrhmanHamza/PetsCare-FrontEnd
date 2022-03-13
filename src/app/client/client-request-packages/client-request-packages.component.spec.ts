import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRequestPackagesComponent } from './client-request-packages.component';

describe('ClientRequestPackagesComponent', () => {
  let component: ClientRequestPackagesComponent;
  let fixture: ComponentFixture<ClientRequestPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRequestPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRequestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
