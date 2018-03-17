import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RECOMMENDED (doesn't work with system.js)
import { TabsModule } from 'ngx-bootstrap/tabs';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
