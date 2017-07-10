import { Component, OnInit, EventEmitter, Output, NgZone } from '@angular/core';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  private isShow:boolean = false;
  private isFormComplete:boolean = false;

  @Output() onCreated = new EventEmitter<any>();

  private templateList:any = [
  { id: 'cob_crud_code_generate', description: 'COB CRUD Code generate'},
  { id: 'cob_rules_code_generate', description: 'COB Validation rules Code generate'},
  ];

  private project:any = {};
  private crudDbConfig:any = {};
  private projectStructure:any = {};

  constructor() { }

  ngOnInit() {
    console.log('New project component loaded..');
    this.init();
    this.modelChange();
  }

  public init(){
    this.isFormComplete = false;
    this.project = {
      name: 'Name_address_crud',
      version: '0.0.1',    
      template: {
        id: 'cob_crud_code_generate',
        description: 'COB CRUD Code generate'
      },
      author: '',
      git: '',
      config: {}
    };

    this.crudDbConfig = {
      module: {
        id: 'WORL051P',
        description: 'Name & Address module'
      },
      schema: 'TDB2PNAM',
      auditTable: 'WF1T',
      baseTable: 'WCMT',
      columnMapping: []
    };

    this.projectStructure = {
      id: "1",
      name: "untitled1",
      type: "dir",
      subType: 'project',
      isExpand: false,
      isLoading: false,
      isClicked: false,
      children: [
      {
        id: "1.1",
        name: "src",
        type: "dir",
        subType: 'folder',
        isExpand: false,
        isLoading: false,  
        isClicked: false,    
        children: [
        {
          id: "1.1.1",
          name: "dbConfig.json",
          type: "file",
          subType: 'json',
          isExpand: false,
          isLoading: false,
          isClicked: false,
          content: {},
          children: [
          ]
        }
        ]      
      },
      {
        id: "1.2",
        name: "build",
        type: "dir",
        subType: 'folder',
        isExpand: false,
        isLoading: false,   
        isClicked: false,   
        children: []      
      },
      {
        id: "1.3",
        name: "test",
        type: "dir",
        subType: 'folder',
        isExpand: false,
        isLoading: false,   
        isClicked: false,   
        children: []      
      },
      {
        id: "1.4",
        name: "log",
        type: "dir",
        subType: 'folder',
        isExpand: false,
        isLoading: false,  
        isClicked: false,    
        children: []      
      },
      {
        id: "1.5",
        name: "project.json",
        type: "file",
        subType: 'json',
        isExpand: false,
        isLoading: false,   
        isClicked: false,   
        content: {},
        children: []      
      }                   
      ]
    };

  }

  public show(){
  	this.isShow = true;
  }

  public close(){
  	this.isShow = false;
  }

  private modelChange(){
    if (this.project.name.length > 0 && this.project.version.length > 0 &&
          this.crudDbConfig.module.id.length > 0 && this.crudDbConfig.module.description.length > 0 &&
          this.crudDbConfig.schema.length > 0 && this.crudDbConfig.auditTable.length > 0 &&
          this.crudDbConfig.baseTable.length > 0 
      ){
        this.isFormComplete = true;
    } else {
      this.isFormComplete = false;
    }
  }

  private onFinish(){
    this.projectStructure.name = this.project.name;
    var projectPropFile = this.searchFile(this.projectStructure, 'project.json');
    projectPropFile.content = this.project;

    var crudConfigFile = this.searchFile(this.projectStructure, 'dbConfig.json');
    crudConfigFile.content = this.crudDbConfig;

    //console.log(JSON.stringify(this.projectStructure, null, 2));
    this.close();
    this.onCreated.emit(JSON.parse(JSON.stringify(this.projectStructure)));
    this.init();
  }

  private searchFile(fileObject:any, fileName:string){
    //console.log(JSON.stringify(fileObject));
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
