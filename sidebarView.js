var SidebarView = function (container, model) {

	//var guests = model.getNumberOfGuests();
	
	//numberOfGuests.text(guests)

	this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinner = container.find("#confirmDinner");
	var dishTable = container.find("#dishTable");
	var totalCost = container.find("#totalCost");
	this.selectedDishes = container.find("#selectedDishes");

	var loadDishes = function() {
		dishTable.find('tbody').html('');
		var dishes = model.getFullMenu();
		$.each(dishes, function(i, o){
			var name = o.name;
			var id = o.id;
			var price = model.getDishPrice(id);

			dishTable.find('tbody').prepend('<tr><td><a value="'+id+'">'+name+'</a></td><td>'+price+'</td></tr>');
		});

	}

	this.update = function(arg){
		totalCost.html(model.getTotalMenuPrice());
		loadDishes();
		this.numberOfGuests.html(model.getNumberOfGuests());

		if(model.getFullMenu().length == 0) {
			this.confirmDinner.addClass("disabled");
		}	else if(model.getNumberOfGuests() <= 0) {
			this.confirmDinner.addClass("disabled")
		} else {
			this.confirmDinner.removeClass("disabled");
		}
	}


	this.confirmFunc = function(){
		$("#sidebar").hide();
		$("#searchHeader").hide();
		$("#showDish").hide();
		$("#searchresults").hide();
		$("#preparation").hide();
		$("#ingredientsBox").hide();
		$("#overViewDishes").show();
		$("#overView").show();
		$("#overViewFooter").show();

	}


	this.viewDish = function() {
		$("#searchHeader").hide();
		$("#searchresults").hide();
		$("#overView").hide();
		$("#overViewDishes").hide();
		$("#overViewFooter").hide();
		$("#sidebar").show();
		$("#preparation").show();
		$("#showDish").show();
		$("#ingredientsBox").show();
		
	}

	this.numberOfGuests.html(model.getNumberOfGuests());
	loadDishes();
	totalCost.html(model.getTotalMenuPrice());
	model.addObservers(this);



	this.numberOfGuests.html(model.getNumberOfGuests());
	loadDishes();
	totalCost.html(model.getTotalMenuPrice());
	model.addObservers(this);

}
 
