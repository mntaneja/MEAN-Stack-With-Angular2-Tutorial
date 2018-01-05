import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent // The Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent // The Dashboard Route
  },
  //{ path: '**', component: HomeComponent } // The "Catch-All" Route
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }