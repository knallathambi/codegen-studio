import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testscript-editor',
  templateUrl: './testscript-editor.component.html',
  styleUrls: ['./testscript-editor.component.css']
})
export class TestscriptEditorComponent implements OnInit {

  _file:any;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set file(file: any){
    this._file = file || {};
  }

  get file(){
    return this._file;
  }    

}
