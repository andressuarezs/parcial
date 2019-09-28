import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupobComponent } from './grupob.component';

describe('GrupobComponent', () => {
  let component: GrupobComponent;
  let fixture: ComponentFixture<GrupobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
