import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AnotherComponent } from './another/another.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const rootConfig = [
  { path:'',component: HomeComponent},
  { path:'home',component: HomeComponent},
  { path:'user',component: UserComponent},
  { path:'first',component: FirstComponent},
  { path:'another',component: AnotherComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AnotherComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(rootConfig),
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
