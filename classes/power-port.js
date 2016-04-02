'use strict';
var DccCommand = require('./dccCommand-port');

var Power  = function(state){
    if(typeof state === "boolean"){
      state = state ? 1:0;
    }
    this.state = state || false;
}
Power.prototype.on(){
  this.state = 1;
}

Power.prototype.off(){
  this.state = 0;
}

Power.prototype.toCommand(){
  var parts = [
    this.state
  ];
  return DccCommand.build(parts);
}


module.exports = Power;
