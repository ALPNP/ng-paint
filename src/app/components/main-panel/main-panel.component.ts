import {Component, OnInit} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";
import {DomService} from "../../services/dom/dom.service";

@Component({
  selector: 'ngp-main-panel',
  templateUrl: 'main-panel.component.html',
  styleUrls: ['main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  downloadButtonDisabled: boolean = false;

  constructor(private sls: SvgLayoutService, private domService: DomService) {
  }

  ngOnInit() {
  }

  downloadPicture() {
    var timeOut = 50000;
    this.downloadButtonDisabled = !this.downloadButtonDisabled;
    this.domService.downloadPicture(this.sls.getCanvasSize(), timeOut);

    setTimeout(()=> {
      this.downloadButtonDisabled = !this.downloadButtonDisabled;
    }, timeOut)
  }

  clearPicture() {
    this.sls.clearPicture();
  }
}
