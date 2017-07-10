import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testdata-editor',
  templateUrl: './testdata-editor.component.html',
  styleUrls: ['./testdata-editor.component.css']
})
export class TestdataEditorComponent implements OnInit {

  tabIndex:number = 0;
  _testCase:any;
  isShow:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // @Input()
  // set testCase(testCase: any){
  //   this._testCase = testCase || {};
  // }

  // get testCase(){
  //   return this._testCase;
  // } 

  show(testCase:any){
  	this._testCase = testCase;
  	this.isShow = true;
  }     

  close(){
  	this.isShow = false;  	
  }

  save(){
  	this.close();
  }

}
