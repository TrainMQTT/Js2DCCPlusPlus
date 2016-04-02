'use strict';
export default class DccCommand {
    build(parts){
      return "<" + parts.join(" ") + ">";
    }
}
