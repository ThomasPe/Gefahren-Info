import { Component, OnInit } from '@angular/core';
import stoffe from '../UN-Nummern.json';
import { Stoff } from '../stoff.model.js';

@Component({
  selector: 'app-stoff-liste',
  templateUrl: './stoff-liste.component.html',
  styleUrls: ['./stoff-liste.component.scss']
})
export class StoffListeComponent implements OnInit {

  stoffe: Stoff[];
  query: string;

  constructor() { }

  ngOnInit() {
    this.stoffe = stoffe;
  }



}
