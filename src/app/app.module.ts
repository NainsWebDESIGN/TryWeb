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
import { BlogComponent } from './blog/blog.component';
import { LoadComponent } from './Load/Load.component';

import { LanguageService } from '@service/Language.service';
import { ShareDataService } from '@service/ShareData.service';
import { ApiService } from '@service/Api.service';
import { LanguagePipe } from '@pipe/language.pipe';


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
    PricingComponent,
    BlogComponent,
    LanguagePipe,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LanguageService, ShareDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
