import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisesListComponent } from './compromises-list.component';

describe('CompromisesListComponent', () => {
  let component: CompromisesListComponent;
  let fixture: ComponentFixture<CompromisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromisesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
