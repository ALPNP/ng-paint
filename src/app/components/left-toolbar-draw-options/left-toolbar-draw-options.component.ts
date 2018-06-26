import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngp-left-toolbar-draw-options',
  templateUrl: 'left-toolbar-draw-options.component.html',
  styleUrls: ['left-toolbar-draw-options.component.scss']
})
export class LeftToolbarDrawOptionsComponent implements OnInit {
  currentColor: string = '#B34EE9';

  constructor() {
  }

  ngOnInit() {
  }

}
