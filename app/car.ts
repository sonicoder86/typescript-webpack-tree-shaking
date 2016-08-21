import { V8Engine, Engine } from './engine';

class SportsCar {
  constructor(private engine: Engine) {}

  toString() {
    return this.engine.toString() + ' Sports Car';
  }
}

console.log(new SportsCar(new V8Engine()).toString());
