require.config({
	paths : {
		jquery : 'lib/jquery.min',
		underscore : 'lib/underscore-min',
		backbone : 'lib/backbone-min',
		//templates : '../templates'
	}

});
var API_URL = 'http://api.jige.olege.com';
require([ 'backbone','app'], function(B, App) {
	/**
	 * Model冗余处理
	 * backbone必须第一个require，覆盖prototype
	 */
	B.Model.prototype.parse = function(d){
		return d.data;
	};
	B.Model.prototype.url = function(url){
		return API_URL + this.api;
	};
	/** Model冗余处理end **/
	App.initialize();
});
// require.config({
// baseUrl : 'js/lib',
// paths : {
// // the left side is the module ID,
// // the right side is the path to
// // the jQuery file, relative to baseUrl.
// // Also, the path should NOT include
// // the '.js' file extension. This example
// // is using jQuery 1.9.0 located at
// // js/lib/jquery-1.9.0.js, relative to
// // the HTML page.
// jquery : 'jquery-1.9.0'
// },
// paths : {
// jquery : "libs/jquery.min",
// underscore : "libs/underscore.min",
// backbone : "libs/backbone.min",
// localstorage : "libs/localStorage"
// },
// shim : {
// underscore : {
// exports : "_"
// },
// backbone : {
// deps : [ "underscore", "jquery" ],
// exports : "Backbone"
// }
// }
// });
