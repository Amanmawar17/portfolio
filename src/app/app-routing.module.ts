import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
