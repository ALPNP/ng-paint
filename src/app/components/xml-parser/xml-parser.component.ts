import { Component, OnInit } from '@angular/core';
import {XmlParserService} from "../../services/xml-parser/xml-parser.service";

@Component({
  selector: 'ngp-xml-parser',
  templateUrl: 'xml-parser.component.html',
  styleUrls: ['xml-parser.component.scss']
})
export class XmlParserComponent implements OnInit {
  xml: any;
  cwmContent: any;
  cwmBody: any;

  xmlSerializer: XMLSerializer = new XMLSerializer();
  xmlParser: DOMParser = new DOMParser();

  constructor(public xss: XmlParserService) {
  }

  ngOnInit() {
    this.getXml();
    this.cwmContent = this.xml.getElementsByTagName('CWM:Description')[30];
    this.cwmBody = this.cwmContent.getAttribute('body');

    console.log(this.xmlParser.parseFromString(this.cwmContent.getAttribute('body'), 'text/xml'));
  }

  getXml() {
    this.xml = this.xss.getXmlDoc();
    console.log(this.xml);
  }

}
