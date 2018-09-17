import {Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef} from '@angular/core';
import {ImgSaverComponent} from "../../components/img-saver/img-saver.component";

@Injectable()
export class DomService {

  constructor(private cfr: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
  }

  downloadPicture() {
    let html = document.body.querySelector('#canvas').innerHTML;
    this.appendComponentToBody(ImgSaverComponent, {html: html});
  }

  appendComponentToBody(component: any, params?: any) {
    const componentRef = this.cfr.resolveComponentFactory(component).create(this.injector);
    componentRef.instance['params'] = params;

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 3000);
  }
}
