import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  animalList: string[] = [
    "fox",
    "rabbit",
    "ox",
    "platypus"
  ]

  colorList: string[] = [
    "red",
    "yellow",
    "green",
    "blue"
  ]

  ngOnInit() {
  }

  toggleAList() {

  }

  toggleCList() {

  }

  toggleDList() {

  }
}
