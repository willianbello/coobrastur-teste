import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCardComponent } from './usuario-card.component';

describe('UsuarioCardComponent', () => {
  let component: UsuarioCardComponent;
  let fixture: ComponentFixture<UsuarioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
