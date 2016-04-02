var DccCommand = function(){
    return this;
}

DccCommand.prototype.build(parts){
  return "<" + parts.join(" ") + ">";
}

module.exports = DccCommand;
