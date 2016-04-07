var Power = (function(){
  'use strict';
  if(typeof require === 'function'){
      var TrainMQTTMessage = require('./trainMQTTMessage');
  }

  var Power  = function(state){
      this._id = null;
      this._rev = null;
      this._type = "Power";

      state = state.toString();
      if(state === "false"){
          state = "0";
      }
      if(state === "true"){
          state = "1";
      }
      state = parseInt(state);
      this.state = state || 0;

      return this;
  }
  Power.prototype.on = function(){
    this.state = 1;
  }

  Power.prototype.off = function(){
    this.state = 0;
  }

  Power.prototype.toMQTT = function(){
      if(TrainMQTTMessage){
          return TrainMQTTMessage.prototype.serializeObject(this);
      }
      return null;
  }

  if(module){
    module.exports = Power;
  }

  return Power;
})();
