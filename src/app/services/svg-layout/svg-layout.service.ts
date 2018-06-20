import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SvgLayoutService {
  private picture = new Subject<any>();
  private documentMouseUpEvent = new Subject<any>();

  drawingElements: any[] = [];
  drawingStorageElements: any[] = [];
  canvasSize: any = {width: 500, height: 500};

  constructor() {
  }

  getPicture(): Observable<Text | null> {
    return this.picture.asObservable();
  }

  clearPicture(): void {
    this.clearDrawingElements();
    this.picture.next();
  }

  getDocumentMouseUpEvent(): Observable<null> {
    return this.documentMouseUpEvent.asObservable();
  }

  offDocumentMouseUpEvent(): void {
    this.documentMouseUpEvent.next();
  }

  getCanvasSize() {
    return this.canvasSize;
  }

  addDrawingElement(element): void {
    this.drawingElements.push(element.drawingElement);
    this.drawingStorageElements.push(element.drawingStorageElement);
  }

  getDrawingElements(): {} {
    return {drawingElements: this.drawingElements, drawingStorageElements: this.drawingStorageElements};
  }

  clearDrawingElements(): void {
    this.drawingElements = [];
    this.drawingStorageElements = [];
  }
}
