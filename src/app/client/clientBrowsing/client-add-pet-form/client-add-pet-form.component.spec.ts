import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddPetFormComponent } from './client-add-pet-form.component';

describe('ClientAddPetFormComponent', () => {
  let component: ClientAddPetFormComponent;
  let fixture: ComponentFixture<ClientAddPetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddPetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
