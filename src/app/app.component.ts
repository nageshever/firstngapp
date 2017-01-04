import { Component } from '@angular/core';
//import {OtherComponent} from './other/other.component'

@Component({
  selector: 'app-root',
  template: `
    <h1> Inline Template {{title}}</h1>
    <fa-other></fa-other>
     <fa-another>
        <div>
          <h2>Hello </h2>
          <p>World!</p>
        </div>
     </fa-another>
     <fa-another>
        <p>Something Else</p>
     </fa-another>
     <fa-databinding></fa-databinding>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'I Changed it!';
}
