export class Model {
  constructor(properties) {
    Object.assign(this, properties);
  }

  set(properties) {
    let ctx = Object.keys(this);
    ctx.forEach((propName) => {
      delete this[propName];
    });
    Object.assign(this, properties);
    return this;
  }
}
