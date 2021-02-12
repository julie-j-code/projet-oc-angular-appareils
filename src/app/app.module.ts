import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth.guard.service';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'new-user', component: NewUserComponent},
  { path: 'users', component: UserListComponent},
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    EditAppareilComponent,
    FourOhFourComponent,
    NewUserComponent,
    UserListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
],

  providers: [AppareilService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
