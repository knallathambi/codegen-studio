import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ConsoleService {

  private consoleLineSource = new Subject<String>();

  consoleLineStream$ = this.consoleLineSource.asObservable();

  constructor() { }

  write(line:string){
  	this.consoleLineSource.next(line);
  }

}
