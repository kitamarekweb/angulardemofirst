import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainlistComponent} from "./components/mainlist/mainlist.component";


const routes: Routes = [
  {path: '', component: MainlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
