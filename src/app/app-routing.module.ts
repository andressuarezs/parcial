import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'grupoa',
    children:[
      {
        path:'',
        loadChildren:'./grupoa/grupoa.module#GrupoaModule'
      }
    ]
  
  },
  {
    path:'grupob',
    children:[
      {
        path:'',
        loadChildren:'./grupob/grupob.module#GrupobModule'
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
