import { Component, OnInit } from '@angular/core';
declare const SVG:any;

@Component({
  selector: 'ngp-svg-layout',
  templateUrl: 'svg-layout.component.html',
  styleUrls: ['svg-layout.component.scss']
})
export class SvgLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const draw = SVG('canvas').size(400, 400);
    const rect = draw.rect(100, 100);
    rect.draggable();
  }

}
