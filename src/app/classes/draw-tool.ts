import {Model} from "./model";

export class DrawTool extends Model {
  constructor(properties) {
    super(properties);
  }

  setPixels(pixels: number) {
    this['pixels'] = pixels;
  }

  getPixels(): number {
    return this['pixels'];
  }
}
