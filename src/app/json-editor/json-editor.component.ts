import { Component, OnInit, ViewChild } from '@angular/core';
import 'brace/theme/twilight';
import 'brace/mode/json';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

    text: string = "";
    options:any = {maxLines: 1000, printMargin: false};

	constructor() { }

	ngOnInit() {
	}    
    
    onChange(code) {
        
    }
}
