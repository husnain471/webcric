import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { ResultsComponent } from './results/results.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SwitchingComponent } from './switching/switching.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    ImagesliderComponent,
    BroadcastComponent,
    ResultsComponent,
    StatisticsComponent,
    HomecontentComponent,
    SigninComponent,
    SignupComponent,
    AdmindashboardComponent,
    SwitchingComponent,
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
