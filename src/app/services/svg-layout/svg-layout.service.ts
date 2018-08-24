import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {DrawTools} from "../../classes/draw-tools.class";

@Injectable()
export class SvgLayoutService {
  private picture = new Subject<any>();
  private documentMouseUpEvent = new Subject<any>();
  private currentDrawToolSelected = new Subject<any>();

  private drawTools: DrawTools;

  drawingElements: any[] = [];
  drawingStorageElements: any[] = [];
  canvasSize: any = {width: 600, height: 600};

  constructor() {
    this.drawTools = new DrawTools(2);
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
    this.currentDrawToolSelected.next();
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

  resetCurrentDrawTool(): void {
    this.drawTools.setCurrentDrawToolId(2);
  }

  getDrawTools(): DrawTools {
    return this.drawTools;
  }
}
