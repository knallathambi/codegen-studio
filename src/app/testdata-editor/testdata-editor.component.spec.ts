import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdataEditorComponent } from './testdata-editor.component';

describe('TestdataEditorComponent', () => {
  let component: TestdataEditorComponent;
  let fixture: ComponentFixture<TestdataEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdataEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
