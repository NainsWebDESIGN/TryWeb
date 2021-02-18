import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';


@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
      HomeComponent,
      AboutComponent,
      DevelopmentComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
