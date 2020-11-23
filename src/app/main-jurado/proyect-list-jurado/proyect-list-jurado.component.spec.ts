import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectListJuradoComponent } from './proyect-list-jurado.component';

describe('ProyectListJuradoComponent', () => {
  let component: ProyectListJuradoComponent;
  let fixture: ComponentFixture<ProyectListJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectListJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectListJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
