import { Component, OnInit } from '@angular/core';

import stoffe from '../UN-Nummern.json';
import { Stoff } from './stoff.model.js';

@Component({
  selector: 'app-stoffliste',
  templateUrl: './stoffliste.component.html',
  styleUrls: ['./stoffliste.component.scss']
})
export class StofflisteComponent implements OnInit {

  stoffe: Stoff[];
  query: string;

  constructor() { }

  ngOnInit(): void {
    this.stoffe = stoffe;
  }

}
