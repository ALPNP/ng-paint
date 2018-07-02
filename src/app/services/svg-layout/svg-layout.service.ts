import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {DrawTool} from "../../classes/draw-tool";

@Injectable()
export class SvgLayoutService {
  private picture = new Subject<any>();
  private documentMouseUpEvent = new Subject<any>();
  private currentDrawToolSelected = new Subject<any>();

  private currentDrawToolId: number = 2;
  private drawTools: any = {
    1: {
      name: 'rect',
      id: 1,
      pixels: 5
    },
    2: {
      name: 'circle',
      id: 2,
      pixels: 5
    },
    3: {
      name: 'arm',
      id: 3,
      pixels: null
    },
    4: {
      name: 'eraser',
      id: 4,
      pixels: 5
    }
  };
  public currentDrawTool: DrawTool = new DrawTool(this.drawTools[2]);

  drawingElements: any[] = [];
  drawingStorageElements: any[] = [];
  canvasSize: any = {width: 600, height: 600};
  currentDrawColor: string = '#B34EE9';

  constructor() {
    this.currentDrawTool = new DrawTool(this.drawTools[2]);
  }

  getPicture(): Observable<Text | null> {
    return this.picture.asObservable();
  }

  clearPicture(): void {
    this.clearDrawingElements();
    this.resetCurrentDrawTool();
    this.picture.next();
  }

  getDocumentMouseUpEvent(): Observable<null> {
    return this.documentMouseUpEvent.asObservable();
  }

  offDocumentMouseUpEvent(): void {
    this.documentMouseUpEvent.next();
  }

  subsCurrentDrawToolSelected(): Observable<null> {
    return this.currentDrawToolSelected.asObservable();
  }

  sendCurrentDrawToolSelected(): void {
    this.currentDrawToolSelected.next(this.currentDrawTool);
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

  setCurrentDrawTool(id: number) {
    this.currentDrawToolId = id;
    this.currentDrawTool.set(this.drawTools[id]);
  }

  getCurrentDrawTool(): number {
    return this.currentDrawToolId;
  }

  resetCurrentDrawTool(): void {
    this.currentDrawToolId = 2;
    this.currentDrawTool.set(this.drawTools[2]);
  }
}
