import { Component } from '@angular/core';
import {SvgLayoutService} from "./services/svg-layout/svg-layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private sls: SvgLayoutService) {
    document.addEventListener('mouseup', () => {sls.offDocumentMouseUpEvent()});
  }

  requestPentahoRest(e) {
    this.sls.requestPentahoRest(e)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
