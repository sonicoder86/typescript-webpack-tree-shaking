export interface Engine {
  toString(): string;
}

export class V6Engine implements Engine {
  toString() {
    return 'V6';
  }
}

export class V8Engine implements Engine {
  toString() {
    return 'V8';
  }
}

export function getVersion() {
  return '1.0';
}
