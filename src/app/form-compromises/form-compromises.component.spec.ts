import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompromisesComponent } from './form-compromises.component';

describe('FormCompromisesComponent', () => {
  let component: FormCompromisesComponent;
  let fixture: ComponentFixture<FormCompromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
