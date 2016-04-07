var TrainMQTTMessage = (function(){
    var TrainMQTTMessage = function(){
        return this;
    }

    TrainMQTTMessage.prototype.serializeObject(object){
        var keys = Object.keys(object);
        var queryPairs = [];
        keys.forEach(function(key){
            if(typeof object[key].toString === 'function'){
                var pair = key + "=" + object[key];
                queryPairs.push(pair);
            }
        });
        return queryPairs.join("&");
    }

})();

if(module){
  module.exports = TrainMQTTMessage;
}
