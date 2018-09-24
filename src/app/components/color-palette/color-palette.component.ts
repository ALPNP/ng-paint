import {Component, OnInit} from '@angular/core';
import {ByParamsComponent} from "../by-params/by-params.component";

@Component({
  selector: 'ngp-color-palette',
  templateUrl: 'color-palette.component.html',
  styleUrls: ['color-palette.component.scss']
})
export class ColorPaletteComponent extends ByParamsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  overlayClick(e) {
    if (e.target.className === 'overlay') {
      this.ctx.destroy();
    }
  }
}
