import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoEvaluacionComponent } from './formato-evaluacion.component';

describe('FormatoEvaluacionComponent', () => {
  let component: FormatoEvaluacionComponent;
  let fixture: ComponentFixture<FormatoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
