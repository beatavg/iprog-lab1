$(function() {

	var model = new DinnerModel();
	//homepage
	var homepageView = new HomePageView($("#homepageView"), model);
	var homepageController = new HomePageController(homepageView, model);

	var sidebarView = new SidebarView($("#leftPanel"), model);
	var sidebarController = new SidebarController(sidebarView, model);

	var selectDishView = new SelectDishView($("#searchresults"), model);
	var selectDishController = new SelectDishController(selectDishView, model);

	var showDishView = new ShowDishView($("#showDish"), model);
	var showDishController = new ShowDishController(showDishView, sidebarView, model);

	var overView = new OverView($("#overView"), model);
	var overViewController = new OverViewController(overView, model);

	var printoutView = new PrintOutView($("#imagecolumn"), model);
	var printoutController = new PrintoutController(printoutView, model);

	
	



});