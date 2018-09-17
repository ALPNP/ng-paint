export class DrawTools {
  private currentDrawToolId: number;

  private drawTools: any = {
    1: {
      name: 'rect',
      id: 1,
      size: 10,
      color: '#B34EE9'
    },
    2: {
      name: 'circle',
      id: 2,
      size: 10,
      color: '#B34EE9'
    },
    3: {
      name: 'arm',
      id: 3,
      size: null,
      color: '#B34EE9'
    },
    4: {
      name: 'eraser',
      id: 4,
      size: 10,
      color: '#B34EE9'
    }
  };

  constructor(currentDrawToolId: number) {
    this.currentDrawToolId = currentDrawToolId;
  }

  // currentDrawToolId get set
  getCurrentDrawToolId(): number {
    return this.currentDrawToolId;
  }

  setCurrentDrawToolId(id: number): this {
    if (typeof id === 'number') {
      this.currentDrawToolId = id
    }

    return this;
  }

  // currentDrawTool get
  getCurrentDrawTool(): any {
    return this.drawTools[this.currentDrawToolId];
  }

  // size get set
  getCurrentDrawToolPixels(): number {
    return this.drawTools[this.currentDrawToolId]['size'];
  }

  setCurrentDrawToolPixels(px: number): this {
    this.drawTools[this.currentDrawToolId]['size'] = px;
    return this;
  }

  // name set
  getCurrentDrawToolName(): string {
    return this.drawTools[this.currentDrawToolId]['name'];
  }

  // color get set
  getCurrentDrawToolColor(): string {
    return this.drawTools[this.currentDrawToolId]['color'];
  }

  setCurrentDrawToolColor(color: string): this {
    this.drawTools[this.currentDrawToolId]['color'] = color;
    return this;
  }

  getDrawToolById(id: number): any {
    return (typeof id === 'number') ? this.drawTools[id] : null;
  }
}
