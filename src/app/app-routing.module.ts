import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { ResultsComponent } from './results/results.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path:'',component:HomecontentComponent},
  {path:'live',component:BroadcastComponent},
  {path:'result',component:ResultsComponent},
  {path:'rankings',component:StatisticsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
