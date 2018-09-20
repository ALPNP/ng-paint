import {Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef} from '@angular/core';
import {ImgSaverComponent} from "../../components/img-saver/img-saver.component";

@Injectable()
export class DomService {

  constructor(private cfr: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
  }

  downloadPicture(canvasSize: any, timeOut: number) {
    let svgString = new XMLSerializer().serializeToString(document.body.querySelector('#canvas').childNodes[0]);
    this.appendComponentToBody(ImgSaverComponent, {
      svgString: svgString,
      canvasSize: canvasSize
    }, timeOut);
  }

  appendComponentToBody(component: any, params?: any, timeOut?: number) {
    const componentRef = this.cfr.resolveComponentFactory(component).create(this.injector);
    componentRef.instance['params'] = params;

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    if (timeOut) {
      setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }, timeOut);
    }
  }
}
