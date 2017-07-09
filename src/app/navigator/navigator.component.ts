import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ProjectService} from '../service/project.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  @Output()
  onFileClick = new EventEmitter<any>();

  private fileTree: any[] = [];
  private clickedFileItem:any;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  }

  @Input()
  set projectTree(projectTree: any[]){
    this.fileTree = projectTree || [];
    console.log('Project tree setter');
  }

  get projectTree(){
    return this.fileTree;
  }


  public fileClick(fileItem:any){
  	if (fileItem.type == 'dir'){
  		fileItem.isExpand = !fileItem.isExpand;
  	}  	

  	if (this.clickedFileItem){
  		this.clickedFileItem.isClicked = false;
  	}
  	this.clickedFileItem = fileItem;
  	fileItem.isClicked = true;

    this.onFileClick.emit(this.clickedFileItem);
  }

}
