import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { lorem } from "faker";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText : string= lorem.sentence();
  inputText:string='';
  
  onChangeInput(text:string){
    this.inputText=text;
    }

    compare(letterRandom:string, letterEnter:string):string{
      if (!letterEnter){
        return 'pending';
      }
      return letterEnter === letterRandom?'correct':'incorrect';  
    }
  };

