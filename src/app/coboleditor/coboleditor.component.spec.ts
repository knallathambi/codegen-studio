import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoboleditorComponent } from './coboleditor.component';

describe('CoboleditorComponent', () => {
  let component: CoboleditorComponent;
  let fixture: ComponentFixture<CoboleditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoboleditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoboleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
