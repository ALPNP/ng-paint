import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ngp-img-saver',
  templateUrl: 'img-saver.component.html',
  styleUrls: ['img-saver.component.scss']
})
export class ImgSaverComponent implements OnInit {
  @Input('params') params: any;

  ngOnInit() {
    console.log("Ничего не работает вообще...");
    console.log(this.params);
  }
}
