import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
import { ObtenirB3Component } from './obtenir-b3/obtenir-b3.component';
import {ReleveCnamComponent } from './releve-cnam/releve-cnam.component';
import {RouterModule, Routes} from "@angular/router";
import { CitoyenFormComponent } from './citoyen-form/citoyen-form.component';


import {HttpModule} from '@angular/http';
import { CitoyenService } from '../services/citoyenservice';
import {B3Service} from '../services/B3Service';
import {CnamService} from '../services/CnamService';
import {FormsModule} from '@angular/forms';
import { CitoyenEditComponent } from './citoyen-edit/citoyen-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignService } from '../services/SignService';

const appRoutes:Routes =[
  {path:'citoyen-list' , component: CitoyenListComponent},
  {path:'obtenir-b3' , component: ObtenirB3Component},
  {path:'releve-cnam' , component: ReleveCnamComponent},
  {path:'citoyen-form' , component: CitoyenFormComponent},
  {path:'citoyen-edit/:id', component: CitoyenEditComponent},
  {path:'sign-in', component: SignInComponent},
  {path :'' , component: SignInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CitoyenListComponent,
    ObtenirB3Component,
    ReleveCnamComponent,
    CitoyenFormComponent,
    CitoyenEditComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CitoyenService,B3Service,CnamService,SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
