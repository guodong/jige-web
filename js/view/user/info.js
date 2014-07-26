define(['backbone', 'model/user',
		'text!tpl/user/info.html' ], function(Backbone,
		Muser, tpl) {

	return Backbone.View.extend({
		el : $("#user-info"),

		initialize : function() {

			var that = this;

			var onDataHandler = function(model) {
				that.render(model);
			};

			var model = new Muser();
			model.fetch({
				data: {id: '53ca235ebadeb80e03d63af1'},
				success : onDataHandler,
			});

		},

		render : function(model) {

			var data = {
				user : model.toJSON()
			};

			var compiledTemplate = _.template(tpl, data);
			this.$el.html(compiledTemplate);
		}

	});

});