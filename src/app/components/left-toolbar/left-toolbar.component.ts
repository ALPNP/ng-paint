import {Component, OnInit} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";
declare const SVG:any;

@Component({
  selector: 'ngp-left-toolbar',
  templateUrl: 'left-toolbar.component.html',
  styleUrls: ['left-toolbar.component.scss']
})
export class LeftToolbarComponent implements OnInit {
  strokeProps: any = {color: 'white', opacity: 1, width: 1};
  circleDrawToolLayout = null;
  rectDrawToolLayout = null;

  constructor(private sls: SvgLayoutService) {
  }

  ngOnInit() {
    this.svgInit();
  }

  svgInit() {
    this.circleDrawToolLayout = SVG('circle-draw-tool')
      .size(20, 20)
      .circle(20)
      .fill(this.sls.currentDrawColor)
      .stroke(this.strokeProps);

    this.rectDrawToolLayout = SVG('rect-draw-tool')
      .size(20, 20)
      .rect(20, 20)
      .fill(this.sls.currentDrawColor)
      .stroke(this.strokeProps);
  }

  selectDrawTool(e) {
    let drawToolId: number = parseInt(e.currentTarget.getAttribute('data-drawtoolid'));
    if (this.sls.getCurrentDrawTool() !== drawToolId) {
      this.sls.setCurrentDrawTool(drawToolId);
      this.sls.sendCurrentDrawToolSelected();
    }
  }

  changedDrawColor(e) {
    this.circleDrawToolLayout.fill(e);
    this.rectDrawToolLayout.fill(e);
  }

}
