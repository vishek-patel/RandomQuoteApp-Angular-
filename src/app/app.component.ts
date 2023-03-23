import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomQuote';
  quote:string = "----Random quote comes here...---"
  author:string="---author name---"
  API_KEY = "caaa0681fae72d1818249bc9511fabc8"
  location:string = "new delhi"

  constructor(private http:HttpClient){
    
  }

  getQuote(){

    //open weather app api

    // this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.API_KEY}`).subscribe((data:any)=>{
    //     console.log(data);
    //     console.log(data.main.temp)
    //     console.log(data.main.feels_like)
    //     console.log(data.main.humidity)
    //     console.log(data.main.pressure)
    //     console.log(data.weather[0].description)

    //    })


   

  // quote api call method
  this.http.get('https://api.quotable.io/random').subscribe((data:any)=>{
    this.quote = data.content;
    this.author = data.author;
  })


  }
}
