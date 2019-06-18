import { Component } from '@angular/core';
import {logging} from "selenium-webdriver";
import addConsoleHandler = logging.addConsoleHandler;
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject)=> {
    const date = new Date ();
    setTimeout(
      ()=>{
        resolve(date);
    },2000
    );

})

appareils = [
  {
  name:"Machine à laver",
  status:"éteint"},
  {
  name:"four",
  status:"allumé"},
{
  name:"ordinateur",
    status:"éteint"}
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer(){
    console.log("on allume tout");
  }
}
