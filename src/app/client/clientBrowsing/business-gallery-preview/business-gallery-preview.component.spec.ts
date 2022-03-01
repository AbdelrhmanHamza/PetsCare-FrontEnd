import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGalleryPreviewComponent } from './business-gallery-preview.component';

describe('BusinessGalleryPreviewComponent', () => {
  let component: BusinessGalleryPreviewComponent;
  let fixture: ComponentFixture<BusinessGalleryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessGalleryPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessGalleryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
