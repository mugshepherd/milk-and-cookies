var SongView = Backbone.View.extend({
	classname: 'song',
	tagName: 'div',

	initialize:function(){
		console.log("created song view");
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function(){
		this.$el.html(HandlbarsTemplates['reminders/show'](this.model.toJSON()))
	},


})