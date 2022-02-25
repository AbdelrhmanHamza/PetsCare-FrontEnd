import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessProfileFormComponent } from './add-business-profile-form.component';

describe('AddBusinessProfileFormComponent', () => {
  let component: AddBusinessProfileFormComponent;
  let fixture: ComponentFixture<AddBusinessProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
