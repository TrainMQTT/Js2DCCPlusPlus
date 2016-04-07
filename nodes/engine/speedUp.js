var Engine = require('../../classes/engine');

module.exports = function(RED) {
    var speedUpNode = function(config){
        RED.nodes.createNode(this, config);

        var steps = config.steps;

        this.on('input', function(msg) {
            var engine = msg.payload;
            if(typeof == 'Engine'){
                engine.speed = engine.speed + steps;
                this.send(msg);
            }
        });
    }
    RED.nodes.registerType("speedUp", speedUpNode);
}
