import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ngp-img-saver',
  templateUrl: 'img-saver.component.html',
  styleUrls: ['img-saver.component.scss']
})
export class ImgSaverComponent implements OnInit {
  @Input('params') params: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.params);
  }

  // let canvas = this.el.nativeElement.querySelector('canvas');
  // let context = canvas.getContext('2d');
  //
  // canvas.setAttribute('width', this.sls.getCanvasSize().width);
  // canvas.setAttribute('height', this.sls.getCanvasSize().height);
  //
  // let image = new Image();
  // image.crossOrigin = 'Anonymous';
  // image.src = 'data:image/svg+xml:base64,' + btoa(html);
  //
  // console.log(image);
  // Здесь что-то не работает, нужно разобраться !!!
  // image.onload = () => {
  //   context.drawImage(image, 0, 0);
  //   let canvasdata = canvas.toDataURL('image/png');
  //   let a = document.createElement('a');
  //   a.download = "export_" + Date.now() + ".png";
  //   a.href = canvasdata;
  //   document.body.appendChild(a);
  //   a.click();
  //   canvas.parentNode.removeChild(canvas);
  //   document.body.removeChild(a);
  //   console.log(a);
  // };
}
