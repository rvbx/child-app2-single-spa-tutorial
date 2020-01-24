import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const ROUTES_MICRO_APP: Routes = [
  {
    path: 'app2',
    component: Example1Component
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_MICRO_APP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
