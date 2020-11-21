import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromiseComponent } from './compromise.component';

describe('CompromiseComponent', () => {
  let component: CompromiseComponent;
  let fixture: ComponentFixture<CompromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
