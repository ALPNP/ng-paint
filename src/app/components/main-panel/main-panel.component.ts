import {Component, OnInit} from '@angular/core';
import {SvgLayoutService} from "../../services/svg-layout/svg-layout.service";

@Component({
  selector: 'ngp-main-panel',
  templateUrl: 'main-panel.component.html',
  styleUrls: ['main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  constructor(private sls: SvgLayoutService) {
  }

  ngOnInit() {
  }

  clearPicture(e) {
    this.sls.clearPicture();
  }
}
