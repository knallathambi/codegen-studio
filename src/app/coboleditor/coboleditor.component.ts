import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coboleditor',
  templateUrl: './coboleditor.component.html',
  styleUrls: ['./coboleditor.component.css']
})
export class CoboleditorComponent implements OnInit {

  text: string = "";
  options:any = {maxLines: 5000, printMargin: false};
  _file:any;
  modifiedText:string = "";

  constructor() { }

  ngOnInit() {
  }    

  @Input()
  set file(file: any){
    this._file = file || {};
    this.text = this._file.content.source;
    this.modifiedText = this.text;
  }

  get file(){
    return this._file;
  }  

  onChange(code) {
    this.modifiedText = code;
  }

  onSave(){
    this._file.content = this.modifiedText;
  }

}
