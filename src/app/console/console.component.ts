import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {ConsoleService} from '../service/console.service';


@Component({
	selector: 'app-console',
	templateUrl: './console.component.html',
	styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, AfterViewChecked {

	@ViewChild('console_container')
	private consoleContainer:ElementRef;

	consoleLines:any[] = [];

	constructor(private consoleService:ConsoleService) { 
		this.consoleService.consoleLineStream$.subscribe(
			line => {
				//this.consoleLines.push(line);	
				this.consoleLines.splice(0, 0, line);			
			});

	}

	ngOnInit() {
	}

	ngAfterViewChecked() {        
	} 

	scrollToBottom(): void {
		try {
			this.consoleContainer.nativeElement.scrollTop = this.consoleContainer.nativeElement.scrollHeight;
		} catch(err) { }                 
	}
}
