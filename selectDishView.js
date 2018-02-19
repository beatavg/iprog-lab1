var SelectDishView = function(container, model){

	this.searchField = container.find("#searchField");
	this.searchButton = container.find("#searchButton");
	this.dropDown = container.find("#dropDown");
	this.searchresults = container.find("#searchresults");
	this.typeOfDish = container.find("#typeOfDish");
	this.allTypes = container.find("#allTypes");



	this.openDishView = function() {
		container.hide();
		$("#searchHeader").hide();
		$("#overView").hide();
		$("#overViewDishes").hide();
		$("#overViewFooter").hide();
		$("#preparation").show();
		$("#showDish").show();
		$("#ingredientsBox").show();
	}

	this.update = function(arg) {

	}

	var htmlString = "";
	var dishes = model.getEveryDish();

		htmlString += "<div class='row' id='allDishes'>";
		for(var i=0; i<dishes.length; i++) {
			htmlString += "<div class='col-md-3'><br>";
			htmlString += "<div class='thumbnail'>";
			htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
			htmlString += "<p><a class='nameButton btn btn-default btn-lg btn-block' value='" + dishes[i].id + "' role='button' style='align-center'>" + dishes[i].name + "</a> </p>";
			htmlString += "</div>";
			htmlString += "</div>";

		}
			htmlString += "</div>";
			container.html(htmlString);

	this.selectDishType = function(typeOfDish, inputText){
		var dishes = model.getAllDishes(typeOfDish, inputText);
		var htmlString = "";

		if(dishes.length == 0) {
			alert("No dishes were found");
			return;
		}
		

		htmlString += "<div class='row col-sm-9' id='searchresults'>";
		for(var i=0; i<dishes.length; i++) {
			htmlString += '<div class="col-md-3"><br>';
			htmlString += "<div class='thumbnail'>";
			htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
			htmlString += "<p><a class='nameButton btn btn-default btn-lg btn-block' value='" + dishes[i].id + "' role='button' style='align-center'>" + dishes[i].name + "</a> </p>";
			htmlString += "</div>";
			htmlString += "</div>";

		}
			htmlString += "</div>";
		container.html(htmlString);
	}


	model.addObservers(this);


}





