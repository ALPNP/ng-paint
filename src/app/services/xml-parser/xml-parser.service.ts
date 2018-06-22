import {Injectable} from '@angular/core';
import {XmlStorageService} from "../xml-storage/xml-storage.service";

@Injectable()
export class XmlParserService {
  xmlDoc: any;
  xmlStr: string;

  constructor(private xss: XmlStorageService) {
    let parser = new DOMParser();
    this.xmlDoc = parser.parseFromString(xss.getXmlString(), "text/xml");
    this.xmlStr = xss.getXmlString();
  }

  getXmlDoc(): XMLDocument {
    return this.xmlDoc;
  }

}
