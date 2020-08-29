$(".mouseover").on("mouseenter",function(){

	$(this).css("cursor", "pointer"); 
	$(this).animate({"width":"30em","height":"30em"},"fast");
});

$(".mouseover").on("mouseleave",function(){
	$(this).animate({"width":"27em", "height":"22em"},"fast");
});
