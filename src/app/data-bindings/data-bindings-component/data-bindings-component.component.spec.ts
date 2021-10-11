import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingsComponentComponent } from './data-bindings-component.component';

describe('DataBindingsComponentComponent', () => {
  let component: DataBindingsComponentComponent;
  let fixture: ComponentFixture<DataBindingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
