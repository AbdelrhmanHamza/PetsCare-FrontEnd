import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileContainerComponent } from './client-profile-container.component';

describe('ClientProfileContainerComponent', () => {
  let component: ClientProfileContainerComponent;
  let fixture: ComponentFixture<ClientProfileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
