var Power = require('../../classes/power-port');

module.exports = function(RED) {

  function PowerNode(config) {
      RED.nodes.createNode(this, config);

      this.power = new Power(config.power);

      this.on('input', function(msg) {
          // do something with 'msg'
          var msg = {
            payload: this.power.toCommand()
          };

          this.send(msg);
      });
  }

  RED.nodes.registerType("power", PowerNode);
}
