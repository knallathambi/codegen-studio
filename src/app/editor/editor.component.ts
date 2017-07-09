import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  private tabs:any[] = [];

  private selectedTab:any;
  private fileTree: any[] = [];

  constructor() { }

  ngOnInit() {
    this.tabs.push({
      name: 'CONSOLE',
      file: {
        id: "9.9.9",
        name: "CONSOLE",
        type: "console",
        subType: 'console',
        expand: false,
        isLoading: false,  
        isClicked: false,    
        children: []
      },
      isActive: true,
      isClosable: false
    });
  }

  @Input()
  set projectTree(projectTree: any[]){
    this.fileTree = projectTree || [];
    //console.log(JSON.stringify(this.fileTree));
    console.log('Project tree setter');
  }

  get projectTree(){
    return this.fileTree;
  }

  public openFile(fileObject:any){
    var fIndx = this.getTabIndex(fileObject);
    if (fIndx >= 0){
      this.onTabSelect(fIndx);    
    } else {
      this.tabs.push({
        name: fileObject.name,
        file: fileObject,
        isActive: false,
        isClosable: true
      });
      this.onTabSelect(this.tabs.length -1);      
    }
  }

  private getTabIndex(fileObject:any){
    for(var i=0; i<this.tabs.length ; i++){
      if (this.tabs[i].file.id == fileObject.id){
        return i;
      }
    }
    return -1;
  }

  private onTabSelect(tabIndex: number){
  	this.tabs.forEach( tabItem => {
  		tabItem.isActive = false;
  	});
  	this.tabs[tabIndex].isActive = true;
  	this.selectedTab = this.tabs[tabIndex];
  }

  private onTabClose(tabIndex:number){
  	this.tabs.splice(tabIndex, 1);
  	if (this.tabs.length > 0){
  		this.onTabSelect(0);
  	} else {
  		this.selectedTab = null;
  	}
  }

}
