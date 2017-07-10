import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGenerateComponent } from './code-generate.component';

describe('CodeGenerateComponent', () => {
  let component: CodeGenerateComponent;
  let fixture: ComponentFixture<CodeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
