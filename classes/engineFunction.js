'use strict';

class EngineFunction {
    constructor(name, cab, id, bool){
      this.name = name;
      this.cab = cab;
      this.value = bool || "";
    }

    on(){
      this.value = true;
    }

    off(){
      this.value = false;
    }

    toggle(){
      this.value = !this.value;
    }

    toCommand(){
      var parts = [
        "f" //function indicator
        this.cab,
        this.id,
        this.value
      ];
      return DccCommand.build(parts);
    }
}

module.exports = EngineFunction;
