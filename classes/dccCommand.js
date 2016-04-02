'use strict';
class DccCommand {
    build(parts){
      return "<" + parts.join(" ") + ">";
    }
}

module.exports = DccCommand;
