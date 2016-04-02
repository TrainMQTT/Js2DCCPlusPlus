var DccCommand = function(){
    return this;
}

DccCommand.prototype.build = function(parts){
  return "<" + parts.join(" ") + ">";
}

module.exports = DccCommand;
