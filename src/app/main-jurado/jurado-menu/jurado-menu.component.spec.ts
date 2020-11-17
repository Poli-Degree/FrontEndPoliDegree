import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoMenuComponent } from './jurado-menu.component';

describe('JuradoMenuComponent', () => {
  let component: JuradoMenuComponent;
  let fixture: ComponentFixture<JuradoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
