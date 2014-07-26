function() {
	
}();
var API_URL = 'http://api.jige.olege.com';
function R(){}
R.prototype = {
	get: function(config) {
		config.url = API_URL + config.url;
		config.type = 'get';
		config.dataType = 'json';
		var cb = config.callback||function(){};
		config.callback = function(d) {
			if(d.result != 0){
				alert("Server Error:"+d.msg);
			}else{
				cb(d.data);
			}
		};
		$.ajax(config);
	}	
};