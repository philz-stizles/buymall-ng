import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryUpsertComponent } from './sub-category-upsert.component';

describe('CategoryUpsertComponent', () => {
  let component: SubCategoryUpsertComponent;
  let fixture: ComponentFixture<SubCategoryUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubCategoryUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
