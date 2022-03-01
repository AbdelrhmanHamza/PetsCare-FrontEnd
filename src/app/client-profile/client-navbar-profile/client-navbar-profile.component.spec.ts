import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavbarProfileComponent } from './client-navbar-profile.component';

describe('ClientNavbarProfileComponent', () => {
  let component: ClientNavbarProfileComponent;
  let fixture: ComponentFixture<ClientNavbarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNavbarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavbarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
