import {Component, OnInit} from '@angular/core';
declare const SVG:any;

const drawTools: any = {
  1: {
    name: 'rect',
    id: 1,
    pixels: 1
  },
  2: {
    name: 'circle',
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
  rectDrawTool = null;
  circleDrawTool = null;

  constructor() {
  }

  ngOnInit() {
    this.svgInit();
  }

  svgInit() {
    this.rectDrawTool = SVG('rect-draw-tool').size(20, 20).rect(20, 20).fill('#B34EE9');
    this.circleDrawTool = SVG('circle-draw-tool').size(20, 20).circle(20).fill('#B34EE9');
  }

  selectDrawTool(e) {
    let drawToolId: number = parseInt(e.currentTarget.getAttribute('data-drawtoolid'));
    if (this.selectedDrawToolId !== drawToolId) {
      this.selectedDrawToolId = drawToolId;
    }
  }

}
