import {Component, OnInit, OnDestroy} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";
import {Subscription} from 'rxjs/Subscription';
declare const SVG:any;

@Component({
  selector: 'ngp-svg-layout',
  templateUrl: 'svg-layout.component.html',
  styleUrls: ['svg-layout.component.scss']
})
export class SvgLayoutComponent implements OnInit, OnDestroy {
  clearPictureSubscription: Subscription;
  offDocumentMouseUpEvent: Subscription;
  draw = null;

  constructor(private sls: SvgLayoutService) {
    this.clearPictureSubscription = this.sls.getPicture().subscribe(() => {this.svgInit()});
    this.offDocumentMouseUpEvent = this.sls.getDocumentMouseUpEvent().subscribe(() => {this.mouseMoveOff()});
  }

  ngOnInit() {
    this.svgInit(true);
  }

  ngOnDestroy() {
    this.clearPictureSubscription.unsubscribe();
  }

  svgInit(startInit?) {
    if (startInit) {
      this.draw = SVG('canvas').size(this.sls.getCanvasSize().width, this.sls.getCanvasSize().height);
      this.setEvents();
    } else {
      this.draw.clear();
    }

    this.draw.rect(this.sls.getCanvasSize().width, this.sls.getCanvasSize().height).fill('#FFFFFF');
  }

  setEvents() {
    this.draw.on('mousedown', (e) => {
      e.stopPropagation();
      this.drawElement(e);
      this.draw.on('mousemove', this.drawElement, this);
    });

    this.draw.on('mouseup', (e) => {
      e.stopPropagation();
      this.draw.off('mousemove', this.drawElement);
    });

    this.draw.on('mouseout', (e) => {
      e.stopPropagation();
      if (e.relatedTarget === null) {
        this.mouseMoveOff();
      }

      if (e.relatedTarget) {
        if ((e.relatedTarget.id && e.relatedTarget.id.indexOf('Svg') === -1) && (e.relatedTarget.id && e.relatedTarget.id !== 'canvas')) {
          this.mouseMoveOff();
        }
      }
    });
  }

  mouseMoveOff() {
    this.draw.off('mousemove');
  }

  drawElement(e) {
    let size: number = 10;
    let color: string = '#B34EE9';
    let moveX = (this.draw.node.clientWidth - (this.draw.node.clientWidth - e.offsetX)) - (size / 2);
    let moveY = (this.draw.node.clientHeight - (this.draw.node.clientHeight - e.offsetY)) - (size / 2);
    let drawingElement = this.draw.circle(size).fill(color).move(moveX, moveY);
    let drawingStorageElement = {moveX: moveX, moveY: moveY, size: size, color: color};

    this.sls.addDrawingElement({drawingElement: drawingElement, drawingStorageElement: drawingStorageElement});
  }
}
