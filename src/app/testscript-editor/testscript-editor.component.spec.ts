import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptEditorComponent } from './testscript-editor.component';

describe('TestscriptEditorComponent', () => {
  let component: TestscriptEditorComponent;
  let fixture: ComponentFixture<TestscriptEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
