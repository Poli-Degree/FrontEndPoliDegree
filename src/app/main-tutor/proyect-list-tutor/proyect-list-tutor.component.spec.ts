import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectListTutorComponent } from './proyect-list-tutor.component';

describe('ProyectListTutorComponent', () => {
  let component: ProyectListTutorComponent;
  let fixture: ComponentFixture<ProyectListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectListTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
