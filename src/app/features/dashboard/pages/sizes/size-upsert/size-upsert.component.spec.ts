import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeUpsertComponent } from './size-upsert.component';

describe('SizeUpsertComponent', () => {
  let component: SizeUpsertComponent;
  let fixture: ComponentFixture<SizeUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizeUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
