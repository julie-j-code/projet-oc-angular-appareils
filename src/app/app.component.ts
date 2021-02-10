import { Component, OnInit } from '@angular/core';
import {logging} from "selenium-webdriver";
import addConsoleHandler = logging.addConsoleHandler;
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
}

  onAllumer(){
    this.appareilService.switchOnAll();
    console.log("on allume tout");
  }
  onEteindre(){
    this.appareilService.switchOffAll();
    console.log("on éteint tout");
  }



}
