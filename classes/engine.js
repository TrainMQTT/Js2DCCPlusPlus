var Engine = (function(){
  'use strict';

  if(typeof require === 'function'){
    var EngineFunction = require('./engineFunction');
  }

  var Engine = function(address, register){
      this._id = null;
      this._rev = null;
      this._type = "Engine";

      this.cab = address || 3;
      this.speed = 0;
      this.register = register || 1;
      this.speedSteps = 28;
      this.lightOn = false;
      this.direction = Directions.forward;

      this._functions = {};

      speedStepsSetter(this);
      return this;
  }

  Engine.prototype.fromJS = function(propertyObject){
       var instance = Object.create(Engine, propertyObject);
       speedStepsSetter(instance);
       return instance;
  }

  Engine.prototype.toggleLight = function(){
      this.lightOn = !this.lightOn;
      return this;
  }
  Engine.prototype.stop = function(){
      this.speed = 0;
      return this;
  }
  Engine.prototype.switchDirection = function(){
      switch(this.direction){
        case -1:
          this.direction = 1;
          break;
        case 1:
          this.direction = -1;
          break;
      }
      return this;
  }
  Engine.prototype.addFunction = function(id, bool, name){
      if(typeof EngineFunction === 'function' ){
          name = name || id;
          var fn = new EngineFunction(name, this.cab, id, bool);
          this._functions[name] = fn;
          return fn;
      }
      return null;
  }

  Engine.prototype.getFunction = function(name){
    return this._functions[name];
  }

  function speedStepsSetter(EngineInstance){
      Object.defineProperty(EngineInstance, 'speedSteps', {
          set: function(value) {
            var adjustment = value/this.speedSteps;
            this.speed = (this.speed * adjustment);
          }
      });
  }

  return Engine;
})();

if(module){
  module.exports = Engine;
}
