var TrainMQTTMessage = (function(){
    var TrainMQTTMessage = function(){
		this.serializeObject = function(object){
    		var data = this.filterMethods(object);
        var keys = Object.keys(data);
        var queryPairs = [];
    		keys.forEach(function(key){
      			var pair = key + "=" + data[key];
            queryPairs.push(pair);
    		});

    		return queryPairs.join("&");
		}

    this.filterMethods = function(object){
        var stable = {};
    		var keys = Object.keys(object);
    		var queryPairs = [];
    		keys.forEach(function(key){
      			if(object[key] === undefined || object[key] === null || (typeof object[key].toString === 'function' && object[key].toString() !== '[object Object]')){
                stable[key] = object[key];
      			}
    		});
        return stable;
		}

		return this;
	};
	if(typeof module !== "undefined"){
	  module.exports = TrainMQTTMessage;
	}
	return new TrainMQTTMessage();
})();
