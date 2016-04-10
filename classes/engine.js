var Engine = (function(){
	'use strict';

	if(typeof require === 'function'){
	  var EngineFunction = require('./engineFunction');
	}

	var Engine = function(){
			var address, propertyObject;
			for(var i = 0; i < arguments.length; i++){
					var argument = arguments[i];
					if(typeof argument == 'string' || typeof argument === 'number'){
							address = argument;
					}
					if(typeof argument == 'object'){
							propertyObject = argument;
					}
			}

	    this.type = "Engine";
			this._id = null;
			this._rev = null;
	    this.address = address || 3;
	    this.speed = 0;
	    this.speedSteps = 28;
	    this.lightOn = false;
	    this.direction = 1;
	    this._functions = {};

			propertyObject = propertyObject || {};
			this.applyProperties(propertyObject);

	    speedStepsSetter(this);

			Object.defineProperty(this, 'throttle', {
					get: function(){
						var value = this.speed/this.speedSteps * this.direction;
						if(isNaN(value)){
								value = 0;
						}
						return value;
					},
					set: function(value) {

							if(value > 0){
									this.direction = 1;
							}
							if(value < 0){
									this.direction = -1;
									value = value * -1;
							}

							if(value > 1){
									value = value/100;
							}
							this.speed = Math.floor(this.speedSteps * value);
					}
			});

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
	    return this;
	}

	Engine.prototype.getFunction = function(name){
	  	return this._functions[name];
	}



	function speedStepsSetter(EngineInstance){
			var speedStep = EngineInstance.speedSteps + 0;
	    Object.defineProperty(EngineInstance, 'speedSteps', {
	        set: function(value) {
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
