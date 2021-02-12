import { Component, OnDestroy, OnInit } from '@angular/core';
import {logging} from "selenium-webdriver";
import addConsoleHandler = logging.addConsoleHandler;
// import { FormsModule } from '@angular/forms';
// import { AppareilService } from './services/appareil.service';
// import { AuthService } from './services/auth.service';
import { Observable } from "rxjs/observable";
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // on ajoute une propriété qui correspondra au nombre de secondes de connexion de l'utilisateur
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}



