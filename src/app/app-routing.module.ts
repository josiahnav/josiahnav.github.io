import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {AboutPageComponent} from './components/pages/about-page/about-page.component';
import {ResumePageComponent} from './components/pages/resume-page/resume-page.component';
import {BlogPageComponent} from './components/pages/blog-page/blog-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'resume', component: ResumePageComponent},
  {path: 'blog', component: BlogPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


