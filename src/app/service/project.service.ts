import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  private fileTree: any[] = [
  {
  	id: "1",
  	name: "Project1",
  	type: "dir",
  	expand: false,
  	isLoading: false,
  	children: [
  	{
	  	id: "1.1",
	  	name: "src",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: [
		  {
		  	id: "1.1.1",
		  	name: "file1",
		  	type: "file",
		  	expand: false,
		  	isLoading: false,
		  	children: [
		  	]
		  },
		  {
		  	id: "1.1.2",
		  	name: "file2",
		  	type: "file",
		  	expand: false,
		  	isLoading: false,
		  	children: [
		  	]
		  }    	
	  	]  		
  	},
  	{
	  	id: "1.2",
	  	name: "build",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.3",
	  	name: "test",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.4",
	  	name: "log",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.5",
	  	name: "project.json",
	  	type: "file",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	}  	  	  	 	  	
  	]
  },
  {
  	id: "2",
  	name: "Project2",
  	type: "dir",
  	expand: false,
  	isLoading: false,
  	children: []  	
  }
  ];	

  private newProjectTemplate = {
  	id: "1",
  	name: "Project1",
  	type: "dir",
  	expand: false,
  	isLoading: false,
  	isClicked: false,
  	children: [
  	{
	  	id: "1.1",
	  	name: "src",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	isClicked: false,
	  	children: [
		  {
		  	id: "1.1.1",
		  	name: "file1",
		  	type: "file",
		  	expand: false,
		  	isLoading: false,
		  	children: [
		  	]
		  },
		  {
		  	id: "1.1.2",
		  	name: "file2",
		  	type: "file",
		  	expand: false,
		  	isLoading: false,
		  	children: [
		  	]
		  }    	
	  	]  		
  	},
  	{
	  	id: "1.2",
	  	name: "build",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.3",
	  	name: "test",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.4",
	  	name: "log",
	  	type: "dir",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	},
  	{
	  	id: "1.5",
	  	name: "project.json",
	  	type: "file",
	  	expand: false,
	  	isLoading: false,  		
	  	children: []  		
  	}  	  	  	 	  	
  	]
  };

  constructor(private http: Http) { }

  public getNewProject(): Promise<any> {
  	var newProject = JSON.parse(JSON.stringify(this.newProjectTemplate));
  	return Promise.resolve(newProject);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
