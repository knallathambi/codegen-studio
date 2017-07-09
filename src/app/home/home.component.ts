import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { NewprojectComponent } from '../newproject/newproject.component';
import { EditorComponent } from '../editor/editor.component';

import {ProjectService} from '../service/project.service';
import {ConsoleService} from '../service/console.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild(LoadingComponent)
  private loadingComponent: LoadingComponent;

  @ViewChild(NewprojectComponent)
  private newprojectComponent: NewprojectComponent;  

  @ViewChild(EditorComponent)
  private editorComponent: EditorComponent;  

  projectTree:any[] = [];
  selectedFile:any = {};
  isEnableNew:boolean = true;
  isEnableGenerate:boolean = true;
  isEnableDelete:boolean = true;
  isEnableDeploy:boolean = true;

  constructor(private projectService:ProjectService, private consoleService:ConsoleService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public onProjectAdd(){
  	// this.loadingComponent.show();
  	// this.projectService.getNewProject()
  	// 	.then(response => {
  	// 		this.projectTree.push(response);
  	// 		this.loadingComponent.close();
  	// 	})
  	// 	.catch(err => {
  	// 		console.log('Error occurred - '+err);
  	// 		this.loadingComponent.close();
  	// 	})
  	// 	;
  	//this.projectTree.push(newProject);
  	this.newprojectComponent.show();
    this.consoleService.write('New Project create request');
  }

  public onProjectCreated(newProject:any){
  	this.projectTree.push(newProject);
  }

  private onFileClicked(fileClicked:any){
  	this.selectedFile = fileClicked;
  	if (fileClicked.type == 'file'){
  		this.editorComponent.openFile(fileClicked);
  	}
  }

}
