import {Component, OnInit, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";
declare const SVG:any;

@Component({
  selector: 'ngp-left-toolbar-draw-options',
  templateUrl: 'left-toolbar-draw-options.component.html',
  styleUrls: ['left-toolbar-draw-options.component.scss']
})
export class LeftToolbarDrawOptionsComponent implements OnInit, AfterViewInit {
  @Output() changedDrawColor = new EventEmitter<String>();

  selectedSize: number = 10;
  drawToolExampleElement: any = null;

  constructor(public sls: SvgLayoutService, private el: ElementRef) {
  }

  ngOnInit() {
    this.drawToolExampleElement = SVG('draw-tool-example-element')
      .size(45, 45)
      .circle(this.selectedSize)
      .fill(this.sls.currentDrawColor)
      .move((45 - this.selectedSize) / 2, (45 - this.selectedSize) / 2);
  }

  ngAfterViewInit() {
    this.el.nativeElement.querySelector('.draw-tool-size-picker').value = this.selectedSize.toString();
  }

  drawToolSizePickerChanged(e) {
    this.selectedSize = parseInt(e.target.value);
    this.drawingToolExampleElement();
  }

  drawingToolExampleElement() {
    this.drawToolExampleElement
      .size(this.selectedSize)
      .fill(this.sls.currentDrawColor)
      .move((45 - this.selectedSize) / 2, (45 - this.selectedSize) / 2);

    this.changedDrawColor.emit(this.sls.currentDrawColor);
  }

}
