$(".mouseover").on("mouseover",function(){

	$(this).css("cursor", "pointer"); 
	$(this).animate({"width":"30em","height":"30em"},"fast");
});

$(".mouseover").on("mouseout",function(){
	$(this).animate({"width":"27em", "height":"22em"},"fast");
});
