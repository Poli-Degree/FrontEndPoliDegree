import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaCalificacionComponent } from './acta-calificacion.component';

describe('ActaCalificacionComponent', () => {
  let component: ActaCalificacionComponent;
  let fixture: ComponentFixture<ActaCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaCalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
