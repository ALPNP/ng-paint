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
  draw = null;

  constructor(private sls: SvgLayoutService) {
    this.clearPictureSubscription = this.sls.getPicture().subscribe(() => {this.svgInit()});
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
    } else {
      this.draw.clear();
    }

    const background = this.draw.rect('100%', 400).fill('#FFFFFF');
    background.on('click', this.drawElement, this);
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
