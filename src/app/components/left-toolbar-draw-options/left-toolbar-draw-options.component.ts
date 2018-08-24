import {Component, OnInit, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";
declare const SVG: any;

@Component({
  selector: 'ngp-left-toolbar-draw-options',
  templateUrl: 'left-toolbar-draw-options.component.html',
  styleUrls: ['left-toolbar-draw-options.component.scss']
})
export class LeftToolbarDrawOptionsComponent implements OnInit, AfterViewInit {
  @Output() changedDrawColor = new EventEmitter<String>();

  selectedSize: number;
  drawToolExampleElement: any = null;
  drawOptionsPanelVisible: boolean = true;

  constructor(public sls: SvgLayoutService, private el: ElementRef) {
    this.selectedSize = this.sls.getDrawTools().getCurrentDrawToolPixels();
  }

  ngOnInit() {
    this.drawToolExampleElement = SVG('draw-tool-example-element')
      .size(45, 45)
      .circle(this.selectedSize)
      .fill(this.sls.getDrawTools().getCurrentDrawToolColor())
      .move((45 - this.selectedSize) / 2, (45 - this.selectedSize) / 2);

    this.sls.subsCurrentDrawToolSelected().subscribe(() => {
      this.selectedSize = this.sls.getDrawTools().getCurrentDrawToolPixels();
      if (this.sls.getDrawTools().getCurrentDrawToolId() !== this.sls.getDrawTools().getDrawToolById(3)['id']) {
        this.drawOptionsPanelVisible = true;
        this.el.nativeElement.querySelector('.draw-tool-size-picker').value = this.selectedSize.toString();
        this.drawingToolExampleElement();
      } else {
        this.drawOptionsPanelVisible = false;
      }
    });
  }

  ngAfterViewInit() {
    this.el.nativeElement.querySelector('.draw-tool-size-picker').value = this.selectedSize.toString();
  }

  drawToolSizePickerChanged(e) {
    this.selectedSize = parseInt(e.target.value);
    this.sls.getDrawTools().setCurrentDrawToolPixels(this.selectedSize);
    this.drawingToolExampleElement();
  }

  drawingToolExampleElement() {
    this.drawToolExampleElement
      .size(this.selectedSize)
      .fill(this.sls.getDrawTools().getCurrentDrawToolColor())
      .move((45 - this.selectedSize) / 2, (45 - this.selectedSize) / 2);

    this.changedDrawColor.emit(this.sls.getDrawTools().getCurrentDrawToolColor());
  }
}
