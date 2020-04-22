import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GefahrgutRoutingModule } from './gefahrgut-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from './search.pipe';
import { StofflisteComponent } from './stoffliste/stoffliste.component';

@NgModule({
  declarations: [StofflisteComponent, SearchPipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    GefahrgutRoutingModule
  ]
})
export class GefahrgutModule { }
