import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';


const routes: Routes = [
  {
    path:'componente1',
    component:Componente1Component
  },
  {
    path:'componente2',
    component:Componente2Component
  },
  {
    path:'componente3',
    component:Componente3Component
  },
  {
    path:'componente4',
    component:Componente4Component
  },
  {
    path:'componente5',
    component:Componente5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoaRoutingModule { }
