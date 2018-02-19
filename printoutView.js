var PrintOutView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff

	var dishes = model.getAllDishes("starter");
	console.log(dishes);
	var htmlString = "";

		htmlString += "<div class='row col-md-2' id='printoutView'>";
		for(var i=0; i<dishes.length; i++) {
		htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
		htmlString += "<br>";
		}
		htmlString += "</div>";

		htmlString += "<div class='col-xs-4' id='headercolumn'>";
		for(var i=0; i<dishes.length; i++) {
		htmlString += "<font size='5'>"+dishes[i].name+"</font>";
		htmlString += "<p></p>";
		htmlString += "<p>"+dishes[i].description+"</p>";
		htmlString += "<br>";
		htmlString += "<br>";
		}
		htmlString += "</div>";

		htmlString += "<div class='col-xs-5' id='prepcolumn'>";
		for(var i=0; i<dishes.length; i++) {
		htmlString += "<p></p>";
		htmlString += "<font size='3'>PREPARATION</font>";
		htmlString += "<p></p>";
		htmlString += "<p>"+dishes[i].description+"</p>";
		htmlString += "<br></br>";
		htmlString += "<br>";
		}
		htmlString += "</div>";


	console.log(htmlString);

	container.html(htmlString);
}