'use strict';

class Engine {
    constructor(address, register){
      this.cab = address || 3;
      this._speed = 0;
      this.register = register || 1;
      this._speedSteps = 28;
      this.lightOn = false;
      this.direction = Directions.forward;
      this.functions = {};
    }

    toggleLight(){
      this.lightOn = !this.lightOn;
    }

    stop(){
      this.speed = 0;
    }

    switchDirection(){
      this.direction = Directions.reverse;
    }

    get speed(){
      return this._speed;
    }

    set speed(value){
        if(value <= this.speedSteps){
          this._speed = value;
        }
    }

    get speedSteps(){
      return this._speedSteps;
    }

    set speedSteps(value){
      var adjustment = value/this._speedSteps;
      this.setSpeed(this._speed * adjustment);
      this._speedSteps = value;
    }

    setSpeedSteps(steps){
      this.speedSteps = steps
    }

    setSpeed(speed){
      this.speed = speed;
    }

    addFunction(id, bool, name){
      name = name || id;
      var fn = new EngineFunction(name, this.cab, id, bool);
      this.functions[name] = fn;
      return fn;
    }

    getFunction(name){
      return this.functions[name];
    }

    toCommand(){
      var parts = [
        "t" //throttle indicator
        this.register,
        this.cab,
        this.speed,
        this.direction
      ];
      return DccCommand.build(parts);
    }
}

module.exports = Engine;
