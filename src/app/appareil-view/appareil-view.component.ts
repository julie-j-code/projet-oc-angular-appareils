import { Component, OnInit } from '@angular/core';
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

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
