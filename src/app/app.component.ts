import { Component } from '@angular/core';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})




export class AppComponent {

  results: any;
  

  constructor(private serverService: ServerService) { }

  fetchWeather(){
    this.serverService.getData()
      .subscribe(
      (data) => {
        this.results = data;
        console.log(this.results);
      },
      (error) => {
        this.results = error;
        console.log(error);
      },
      () => {
        console.log('completed!');
      }
    )
  }

}
