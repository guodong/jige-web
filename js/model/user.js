define(['backbone' ], function(Backbone) {
	return Backbone.Model.extend({

		initialize : function() {
			this.api = '/user/get';
		},
		defaults : {
			id: '',
			email : '',
			realname : '',
		}
	});
});