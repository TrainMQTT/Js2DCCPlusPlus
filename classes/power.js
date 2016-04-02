'use strict';
var DccCommand = require('./dccCommand');

export default class Power {
    constructor(state){
        if(typeof state === "boolean"){
          state = state ? 1:0;
        }
        this.state = state || false;
    }

    on(){
      this.state = 1;
    }

    off(){
      this.state = 0;
    }

    toCommand(){
      var parts = [
        this.state
      ];
      return DccCommand.build(parts);
    }
}

module.exports = Power;
