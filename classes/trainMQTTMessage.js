var TrainMQTTMessage = (function(){
    var TrainMQTTMessage = function(){
		this.serializeObject = function(object){
			var keys = Object.keys(object);
			var queryPairs = [];
			keys.forEach(function(key){
				if(object[key] === undefined || object[key] === null || (typeof object[key].toString === 'function' && object[key].toString() !== '[object Object]')){					
					var pair = key + "=" + object[key];
					queryPairs.push(pair);
				}
			});
			return queryPairs.join("&");
		}
		
		return this;
	};
	if(typeof module !== "undefined"){
	  module.exports = TrainMQTTMessage;
	}
	return new TrainMQTTMessage();
})();