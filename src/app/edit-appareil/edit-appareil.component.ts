import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { NgForm } from '@angular/forms';
// je suis pas certaine
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor(private appareilService:AppareilService,  private router:Router) { }

  ngOnInit() {
  }



onSubmit(form: NgForm) {
  const name = form.value['name'];
  const status = form.value['status'];

  this.appareilService.addAppareil(name, status);
  this.router.navigate(['/appareils']);
  
}



}
