import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfilePetsComponent } from './client-profile-pets.component';

describe('ClientProfilePetsComponent', () => {
  let component: ClientProfilePetsComponent;
  let fixture: ComponentFixture<ClientProfilePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfilePetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfilePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
