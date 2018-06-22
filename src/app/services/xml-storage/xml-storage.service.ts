import { Injectable } from '@angular/core';

@Injectable()
export class XmlStorageService {
  private xmlString: string = '';

  constructor() {
  }

  getXmlString(): string {
    return this.xmlString;
  }

}
