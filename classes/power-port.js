'use strict';
var DccCommand = require('./dccCommand-port');

var Power  = function(state){
    if(typeof state === "boolean"){
      if(state){
        state = 1;
      }else{
        state = 0;
      }

    }
    this.state = state || false;
}
Power.prototype.on = function(){
  this.state = 1;
}

Power.prototype.off = function(){
  this.state = 0;
}

Power.prototype.toCommand = function(){
  var parts = [
    this.state
  ];
  return DccCommand.build(parts);
}


module.exports = Power;
