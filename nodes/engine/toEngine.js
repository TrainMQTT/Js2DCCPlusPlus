var Engine = require('../../classes/engine');

module.exports = function(RED) {


  function toEngineNode(config) {
      RED.nodes.createNode(this, config);

      this.on('input', function(msg) {
          var Engine = Engine.prototype.fromJS(msg.payload);
          msg.payload = Engine;
          this.send(msg);
      });
  }


  RED.nodes.registerType("toEngine", toEngineNode);
}
