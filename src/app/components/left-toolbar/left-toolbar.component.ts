import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngp-left-toolbar',
  templateUrl: 'left-toolbar.component.html',
  styleUrls: ['left-toolbar.component.scss']
})
export class LeftToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectDrawTool(e) {
    console.log(e);
  }

}
