import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TestdataEditorComponent } from '../testdata-editor/testdata-editor.component';

@Component({
  selector: 'app-testscript-editor',
  templateUrl: './testscript-editor.component.html',
  styleUrls: ['./testscript-editor.component.css']
})
export class TestscriptEditorComponent implements OnInit, AfterViewInit {

  @ViewChild(TestdataEditorComponent)
  private testdataEditorComponent: TestdataEditorComponent; 
  jsonEditor:boolean = false;


  _file:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }  

  @Input()
  set file(file: any){
    this._file = file || {};
  }

  get file(){
    return this._file;
  }    

  editTestData(testCase:any){
    this.testdataEditorComponent.show(testCase);
  }

  toggleEditor(){
    this.jsonEditor = !this.jsonEditor;
  }

}
