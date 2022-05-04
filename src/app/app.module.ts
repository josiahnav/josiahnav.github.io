import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ResumePageComponent } from './components/pages/resume-page/resume-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillCardComponent } from './components/pages/home-page/skill-section/skill-card/skill-card.component';
import { SkillSpecificComponent } from './components/pages/home-page/skill-section/skill-card/skill-section/skill-specific.component';
import { SkillSectionComponent } from './components/pages/home-page/skill-section/skill-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutPageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    BlogPageComponent,
    SkillCardComponent,
    SkillSpecificComponent,
    SkillSectionComponent
  ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
