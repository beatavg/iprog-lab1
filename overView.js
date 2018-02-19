var OverView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff

	var numberOfGuests = container.find("#numberOfGuests");

	this.update  = function(){
		var dishes = model.getFullMenu();
		var htmlString = "";

		numberOfGuests.html(model.getNumberOfGuests());


		htmlString += "<div class='row col-sm-12' id='overViewDishes'>";
		for(var i=0; i<dishes.length; i++) {
			htmlString += "<div class='row col-sm-3'>";
			htmlString += "<div class='thumbnail'>";
			htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
			htmlString += "<p><a class='btn btn-default btn-lg btn-block' role='button' style='align-center'>" + dishes[i].name + "</a></p>";
			htmlString += "<h5 class='totalCost' style='color:#990000; align-right'>SEK " + model.getDishPrice(dishes[i].id) +"</h5>";
			htmlString += "</div>";
			htmlString += "</div";

		}
			htmlString += "</div>";
			container.find("#overViewDishes").html(htmlString);

	}

	this.goBack = function(){
		container.hide();
		$("#homepageView").hide();
		$("#overViewDishes").hide();
		$("#overView").hide();
		$("#overViewFooter").hide();
		$("#preparation").hide();
		$("#searchHeader").show();
		$("#searchresults").show();
		$("#sidebar").show();
 	}
 	
 	this.showPrint =function(){
 		container.hide();
 		$("#homepageView").hide();
 		$("#printoutView").show();
 	}
	//console.log(htmlString);

	

	//container.find("#overViewDishes").html(htmlString);
	//this.loadMenu();
	//console.log(model.getNumberOfGuests())
	//this.numberOfGuests.html(model.getNumberOfGuests());
	console.log(numberOfGuests)
	

	model.addObservers(this);

}

