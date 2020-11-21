import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompromisesTutorComponent } from './form-compromises-tutor.component';

describe('FormCompromisesTutorComponent', () => {
  let component: FormCompromisesTutorComponent;
  let fixture: ComponentFixture<FormCompromisesTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompromisesTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompromisesTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
