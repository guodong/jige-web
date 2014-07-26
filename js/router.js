define([ 'jquery', 'underscore', 'backbone', 'view/user/info' ], function($, _, Backbone, Vinfo) {

	var AppRouter = Backbone.Router.extend({
		routes : {
			'users' : 'showContributors',

			// Default
			'*actions' : 'defaultAction'
		}
	});

	var initialize = function() {

		var app_router = new AppRouter;

		/*app_router.on('route:showProjects', function() {

			// Call render on the module we loaded in via the dependency array
			var projectsView = new ProjectsView();
			projectsView.render();

		});

		app_router.on('route:defaultAction', function(actions) {

			// We have no matching route, lets display the home page
			var homeView = new HomeView();
			homeView.render();
		});*/

		// Unlike the above, we don't call render on this view as it will handle
		// the render call internally after it loads data. Further more we load
		// it
		// outside of an on-route function to have it loaded no matter which
		// page is
		// loaded initially.
		var demo = new Vinfo();

		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});