import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  private tabs:any[] = [
  {
  	name: 'file1.txt',
  	isActive: true
  },
  {
  	name: 'file2.txt',
  	isActive: false
  }

  ];

  private selectedTab:any;

  constructor() { }

  ngOnInit() {
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
