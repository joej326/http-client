import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { GenericComponent } from './generic/generic.component';


@NgModule({
  declarations: [
    AppComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
