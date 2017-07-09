import { Component, OnInit } from '@angular/core';

import {ProjectService} from '../service/project.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  private fileTree: any[] = [];

  private clickedFileItem:any;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  	this.projectService.getNewProject()
  		.then(response => this.fileTree = response )
  		.catch(err => console.log(err))
  		;
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
  }

}
