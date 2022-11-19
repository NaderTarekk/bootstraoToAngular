import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  { path: "hero", component: HeroComponent },
  { path: "", component: HeroComponent },
  { path: "about", component: AboutComponent },
  { path: "resume", component: ResumeComponent },
  { path: "service", component: ServiceComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: HeroComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
