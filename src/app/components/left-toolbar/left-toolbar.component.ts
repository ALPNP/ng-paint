import {Component, OnInit} from '@angular/core';

const drawTools: any = {
  1: {
    name: 'pencil',
    id: 1,
    pixels: 1
  },
  2: {
    name: 'brush',
    id: 2,
    pixels: 1
  },
  3: {
    name: 'arm',
    id: 3,
    pixels: null
  },
  4: {
    name: 'eraser',
    id: 4,
    pixels: 1
  }
};

@Component({
  selector: 'ngp-left-toolbar',
  templateUrl: 'left-toolbar.component.html',
  styleUrls: ['left-toolbar.component.scss']
})
export class LeftToolbarComponent implements OnInit {
  selectedDrawToolId: number = 1;

  constructor() { }

  ngOnInit() {
  }

  selectDrawTool(e) {
    let drawToolId: number = parseInt(e.currentTarget.getAttribute('data-drawtoolid'));
    if (this.selectedDrawToolId !== drawToolId) {
      this.selectedDrawToolId = drawToolId;
    }
  }

}
