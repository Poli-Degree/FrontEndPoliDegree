import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTasksTutorComponent } from './form-tasks-tutor.component';

describe('FormTasksTutorComponent', () => {
  let component: FormTasksTutorComponent;
  let fixture: ComponentFixture<FormTasksTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTasksTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTasksTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
