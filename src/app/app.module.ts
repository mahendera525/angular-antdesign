import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzDemoButtonLoadingComponent } from './zorro-button/zorro-button.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgZorroAntdModule ],
  declarations: [ AppComponent, HelloComponent,NzDemoButtonLoadingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
