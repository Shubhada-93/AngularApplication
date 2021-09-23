import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum : number = 0;
  title = 'Marvellous Infosystems';
  fun() 
  {
  this.sum=10+20;
 
  }
}
