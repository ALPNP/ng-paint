import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SvgLayoutService {
  private picture = new Subject<any>();

  drawingElements: any[] = [];
  drawingStorageElements: any[] = [];
  canvasSize: any = {width: '100%', height: 400};

  constructor() { }

  getPicture() {
    return this.picture.asObservable();
  }

  clearPicture() {
    this.clearDrawingElements();
    this.picture.next();
  }

  getCanvasSize() {
    return this.canvasSize;
  }

  addDrawingElement(element) {
    this.drawingElements.push(element.drawingElement);
    this.drawingStorageElements.push(element.drawingStorageElement);
  }

  clearDrawingElements() {
    this.drawingElements = [];
    this.drawingStorageElements = [];
  }
}
