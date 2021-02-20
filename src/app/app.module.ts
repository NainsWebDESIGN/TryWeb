import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';
import { Skills_chartComponent } from './skills_chart/skills_chart.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DevelopmentComponent,
    Skills_chartComponent,
    EducationComponent,
    PortfolioComponent,
      PricingComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
