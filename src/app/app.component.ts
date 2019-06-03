import { Component } from '@angular/core';
import { NzButtonModule} from 'ng-zorro-antd';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  button = 'Demo Button';
}
