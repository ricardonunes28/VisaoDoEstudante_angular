import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacaoAmbienteComponent } from './preparacao-ambiente.component';

describe('PreparacaoAmbienteComponent', () => {
  let component: PreparacaoAmbienteComponent;
  let fixture: ComponentFixture<PreparacaoAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacaoAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacaoAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
