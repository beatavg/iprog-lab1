var ShowDishView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff
	this.ingredientsBox = container.find("#ingredientsBox");
	this.showDish = container.find("#showDish");
	var ingredientsTable = container.find("#ingredientsTable");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.totalPrice = container.find("#totalPrice");
	this.dishDetails = container.find("#dishDetails");
	
	//this.dishImage = container.find("#dishImage");
	//this.dishDescription = container.find("#dishDescription");
	//this.backButton = container.find("#backButton");


	this.update = function(arg){
		var activeDish = model.getActiveDish();
		this.loadDish(activeDish);
	}

	this.loadDish = function(id){
		var activeDish = model.getActiveDish(id);
		var htmlString = "";
		htmlString += "<div id='dishDetails'></div>";
		
			htmlString += "<div class='row'>";
			htmlString += "<h3>" + activeDish.name + "</h3>";
			htmlString += "<img src='images/" + activeDish.image +"' class='img-responsive' alt='Responsive image'>";
			htmlString += "<p>" + activeDish.description + "</p>";
			htmlString += "</div>";

		
		htmlString += "</div>";
		var dishIng = activeDish.ingredients;
		this.loadIngredients(dishIng);
		this.totalPrice.html(model.getDishPrice(activeDish.id));

		this.dishDetails.html(htmlString);
		
	}

	this.loadIngredients = function(id){
		this.numberOfGuests.html(model.getNumberOfGuests());

		var activeDish = model.getActiveDish(id);
		var people = model.getNumberOfGuests();
		ingredients = activeDish.ingredients;
		var htmlString = "";
		var table = container.find("#tbody");
		console.log("active dish: " + activeDish)
		console.log("ingredients:" + ingredients.quantity)
		// htmlString += "<tbody id='tbody'>";
		for(var i=0; i<ingredients.length; i++) {
		htmlString += "<tr><td>"+ingredients[i].quantity*people+" "+ingredients[i].unit+"</td><td>"+ingredients[i].name+"</td><td>SEK "+ingredients[i].price*people+"</td></tr>";
	}
		// htmlString += "</tbody>";
		table.html(htmlString);
	}



	this.goBack = function(){
		container.hide();
		$("#overViewDishes").hide();
		$("#overView").hide();
		$("#overViewFooter").hide();
		$("#preparation").hide();
		$("#searchHeader").show();
		$("#searchresults").show();
		$("#sidebar").show();

	}

	this.loadDish();
	model.addObservers(this);

}
