import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { calculadoraRoutes} from './calculadora/calculadora-routing.module';
import { DashboardaRoutes } from './dashboard/dashboard-routing.module';
import { dataBindingsRoutes } from './data-bindings/data-bindings-routing.module';
import { homeRoutes } from './home/home-component-routing.module';
import { ambienteRoutes } from './preparacao-ambiente/preparacao-ambiente-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home-component',
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...dataBindingsRoutes,
  ...ambienteRoutes ,
  ...calculadoraRoutes,
  ...DashboardaRoutes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
