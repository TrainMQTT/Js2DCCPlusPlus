var Engine = (function(){
	'use strict';

	if(typeof require === 'function'){
	  var EngineFunction = require('./engineFunction');
	}

	var Engine = function(address, propertyObject){
	    this._id = null;
	    this._rev = null;
	    this._type = "Engine";

	    this.address = address || 3;
	    this.speed = 0;
	    this.speedSteps = 28;
	    this.lightOn = false;
	    this.direction = -1;
	    this._functions = {};
		
		this.applyProperties(propertyObject);

	    speedStepsSetter(this);
	    return this;
	}
	
	Engine.prototype.applyProperties = function(propertyObject){
		var keys = Object.keys(propertyObject);
		keys.forEach(function(key){
			this[key] = propertyObject[key];
		}, this);
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
		var speedStep = EngineInstance.speedSteps + 0;
		console.log('starting', speedStep);
	    Object.defineProperty(EngineInstance, 'speedSteps', {
	        set: function(value) {
				console.log('setter',value);
				console.log('baseline?', speedStep);
	          var adjustment = value/this.speedSteps;
	          this.speed = (this.speed * adjustment);
			  speedStep = value;
	        },
			get: function(){
				return speedStep;
			}
	    });
	}
	if(typeof module !== "undefined"){
	  module.exports = Engine;
	}
	return Engine;
})();


