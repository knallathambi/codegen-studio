import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'brace/theme/twilight';
import 'brace/mode/json';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

  text: string = "";
  options:any = {maxLines: 5000, printMargin: false};
  _file:any;
  modifiedText:string = "";

  constructor(private consoleService:ConsoleService) { }

  ngOnInit() {
  }    

  @Input()
  set file(file: any){
    this._file = file || {};
    this.text = JSON.stringify(this.file.content, null, 4);
    this.modifiedText = this.text;
  }

  get file(){
    return this._file;
  }  

  onChange(code) {
    this.modifiedText = code;
  }

  onSave(){
    this.consoleService.write('Saving file '+this._file.name);
    this.consoleService.write(this.modifiedText);
    this._file.content = JSON.parse(this.modifiedText);
  }
}
