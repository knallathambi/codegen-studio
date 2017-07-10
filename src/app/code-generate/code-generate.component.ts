import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ConsoleService} from '../service/console.service';

@Component({
	selector: 'app-code-generate',
	templateUrl: './code-generate.component.html',
	styleUrls: ['./code-generate.component.css']
})
export class CodeGenerateComponent implements OnInit {

	private isShow:boolean = false;
	private isFormComplete:boolean = true;
	private userId:string = '';
	private password:string = '';
	private _project:any;

	@Output() onGenerate = new EventEmitter<any>();	

	constructor(private consoleService:ConsoleService) { }

	ngOnInit() {
	}

	@Input()
	set project(project: any){
		this._project = project || {};
	}

	get project(){
		return this._project;
	}  	

	public show(){
		this.isShow = true;
	}

	public close(){
		this.isShow = false;
	}

	private modelChange(){
		if (this.userId.length > 0 && this.password.length > 0){
			this.isFormComplete = true;
		}
	}

	public onFinish(){
		this.consoleService.write('Generating code for project - '+this._project.name);
		var buildDir = this.searchFile(this._project, 'build');
		if (buildDir){
			buildDir.children = [];
			var cobolFile = {
				id: buildDir.id + '.' + '1',
				name: 'COBOL001.cbl',
				type: 'file',
				subType: 'cobol',
				isExpand: false,
				isLoading: false,
				isClicked: false,   
				content: {
					id: 'COBOL001',
					source: '        IDENTIFICATION DIVISION.'
				},       
				children: []
			};
			buildDir.children.push(cobolFile);
			buildDir.isExpand = true;			
		}

		var testDir = this.searchFile(this._project, 'test');
		if (testDir){
			testDir.children = [];
			var testScript = {
				id: testDir.id + '.' + '1',
				name: 'COBOL001.test',
				type: 'file',
				subType: 'test',
				isExpand: false,
				isLoading: false,
				isClicked: false,   
				content: {
					config: {
						moduleId: 'COBOL001'
					},
					testCases: [
					{
						id: 'case1',
						description: 'CRUD DB Insert',
						data: {},
						assertions: [],
						status: '',
						result: false
					}
					]
				},       
				children: []
			};
			testDir.children.push(testScript);
			testDir.isExpand = true;			
		}
		this.consoleService.write('Generation complete');
		this.close();
	}

	private searchFile(fileObject:any, fileName:string){
		if (fileObject.name == fileName){
			return fileObject;
		} else {
			for(var i=0; i< fileObject.children.length; i++){
				var searchFile = this.searchFile(fileObject.children[i], fileName);
				if (searchFile){
					return searchFile;
				}
			}
		}
	}  	

}
