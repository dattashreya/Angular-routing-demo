import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  object: Object = 
        {
          foo: 'bar', 
          baz: 'qux', 
          nested: 
            {
              xyz: 3, 
              numbers: [1, 2, 3, 4, 5]
            }
        };
}
