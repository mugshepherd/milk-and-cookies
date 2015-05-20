

/milk-and-cookies/w10/d03_bb_views_and_events/bb_rails_reminder/solution/app/assets/javascripts/backbone/views/reminderView.js

setting two attributes
tagname - div  //this can be any valid HTML tag
`className = reminder

he initializes it - w/text "new reminder view instantiated"


resets his data.  db:migrate db:seed.  
starts his server

checks his routes.  "get/" points to application controller.  
the application.html.erb file has "javascript_include_tag", which is really important here.  now everything defined in app.js gets sent over to the browser.  
so now he can go to localhost:3000 and via console can play with everything that is in site already.  

###@console:

var myReminder = new ReminderModel({body: "Practice playing cornhole before friday{});
$new reminder model created.  
>undefined

var myView - new ReminderView({model: myReminder})
//for model views we'll almost always follow this pattern.  instantiating it and passing in a specific model name.  
$new ReminderView instantiated  (this from teh console.log in )
//note that "model" in the above code is just a local variable name, and it doesn't care what we call it.  

###@/milk-and-cookies/w10/d03_bb_views_and_events/bb_rails_reminder/solution/app/assets/javascripts/backbone/views/reminderView.js
he adds console.log(this.model).

@console:
it adds properties for model.  

>myView.el:  
$<div class="reminder"></div>
>myView.$el
[<div class="reminder""></div>]

####Render:  
this is what he wants in his HTML:
<div class ='reminder'>
<p>Wash the car</p>p>
<span class='finish'>Finish</span>
</div>

@reminderView.js
he adds a "render" function.  Render's function is to build the "el"
	
	render: function(){
	this.$el.empty();
	this.$el.append("<p>Wash the car</p>p>");  //which he changes to this.$el.append("<p>" + this.model.get("body") + "</p>") later on
	this.$el.append("<span class='finish'>Finish</span>span>");
	},

the $ makes it a jQuery "el".  That and the vanilla JS "el" are special.
Note also that in his ReminderView.js file, it's an object literal, so everything needs a comma at the end of each function, etc.  

@concole:
myView.render()
$undefined
>myView.el
>$('#reminders').append(myView.$el);
$which appends this to the html

we reference the reminderModel that this view is for by "this.model.body"

this.$el.append("<p>" + this.model.body + "</p>")


####Making sure all modesl on page are 
	//i want to load all my models from teh server to my db.  
$(document).read(loadRemindersApp);
function LoadRemindersApp(){
	var mainCollection = new REmindersCollection();
	mainCollection.fetch();  //fetch allows us to get a number of things from the server
}
