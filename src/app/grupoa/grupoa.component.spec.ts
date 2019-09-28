import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoaComponent } from './grupoa.component';

describe('GrupoaComponent', () => {
  let component: GrupoaComponent;
  let fixture: ComponentFixture<GrupoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
