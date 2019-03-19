import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


import { GefahrgutRoutingModule } from './gefahrgut-routing.module';
import { StoffListeComponent } from './stoff-liste/stoff-liste.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StoffListeComponent, SearchPipe],
  imports: [
    CommonModule,
    GefahrgutRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class GefahrgutModule { }
