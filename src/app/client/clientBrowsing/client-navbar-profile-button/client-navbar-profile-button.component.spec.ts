import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavbarProfileButtonComponent } from './client-navbar-profile-button.component';

describe('ClientNavbarProfileButtonComponent', () => {
  let component: ClientNavbarProfileButtonComponent;
  let fixture: ComponentFixture<ClientNavbarProfileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNavbarProfileButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavbarProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
