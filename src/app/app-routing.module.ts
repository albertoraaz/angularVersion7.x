import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// agregamos las rutas
const routes: Routes =
  [{ path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { redirectTo: 'dashboard', pathMatch: 'full', path: '' },
  { path: 'detail/:id', component: HeroDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



