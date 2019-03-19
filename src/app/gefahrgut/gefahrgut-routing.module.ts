import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoffListeComponent } from './stoff-liste/stoff-liste.component';

const routes: Routes = [
  {
    path: '',
    component: StoffListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GefahrgutRoutingModule { }
