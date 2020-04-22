import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StofflisteComponent } from './stoffliste/stoffliste.component';


const routes: Routes = [
  {
    path: '',
    component: StofflisteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GefahrgutRoutingModule { }
