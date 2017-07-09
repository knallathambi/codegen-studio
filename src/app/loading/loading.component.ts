import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  private isShow:boolean = false;

  constructor() { }

  ngOnInit() {
  	console.log('App loading component');
  }

  public show(){
  	this.isShow = true;
  }

  public close(){
  	this.isShow = false;
  }

}
