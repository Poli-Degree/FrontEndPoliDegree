import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoProfileComponent } from './jurado-profile.component';

describe('JuradoProfileComponent', () => {
  let component: JuradoProfileComponent;
  let fixture: ComponentFixture<JuradoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
