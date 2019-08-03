import { Component } from '@angular/core';
import {take} from 'rxjs/operators';  
const BREATHE = ['INHALE', 'HOLD', 'EXHALE', 'HOLD'];
const DIRECTION = ['LEFT', 'RIGHT'];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  counter = 0;
  breatheOperation = 0;
  interval;
  direction = false;
  constructor() {
    this.interval = setInterval(()=> {
      this.counter++;
      if (this.counter > 4){
        this.counter = 1;
        this.breatheOperation = (this.breatheOperation + 1)%4;
        if (this.breatheOperation % 2) {
          this.direction = !this.direction;
        }
      }
    }, 2000);
  }


  public isEnabled(operation: string, index: number, direction?: string) {
    if (BREATHE[this.breatheOperation] == operation && this.counter === index ) {
      if (direction) {
        if (DIRECTION[this.direction? 1: 0] === direction) {
          console.log(index);
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(index.toString()));
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }

  public getBreatheOperation() {
    return BREATHE[this.breatheOperation];
  }

  public speak(text: string) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    return true;
  }
}
