var HomePageView = function(container, model) {

	var enterBtn = container.find('#enter');
	var introduction = container.find('#introduction');

	$("#sidebar").hide();
	$("#selectedDishes").hide();
	$("#searchHeader").hide();
	$("#searchresults").hide();
	$("#showDish").hide();
	$("#overView").hide();
	$("#overViewDishes").hide();
	$("#ingredientsBox").hide();
	$("#overViewFooter").hide();
	$("#preparation").hide();
	$("#imagecolumn").hide();
	$("#prepcolumn").hide();

	

	this.enterSite = function(){
		container.hide();
		$("#header").show();
		$("#sidebar").show();
		$("#selectedDishes").show();
		$("#searchHeader").show();
		$("#searchresults").show();

		$("body").css({"background": "none"});

	}

}