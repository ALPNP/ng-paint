import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SvgLayoutService {
  private picture = new Subject<any>();
  private documentMouseUpEvent = new Subject<any>();

  private currentDrawToolId: number = 1;
  private drawTools: any = {
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

  drawingElements: any[] = [];
  drawingStorageElements: any[] = [];
  canvasSize: any = {width: 600, height: 600};
  currentDrawColor: string = '#B34EE9';

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

  setCurrentDrawToolId(id: number) {
    this.currentDrawToolId = id;
  }

  getCurrentDrawToolId(): number {
    return this.currentDrawToolId;
  }

  resetCurrentDrawToolId(): void {
    this.currentDrawToolId = 1;
  }
}
