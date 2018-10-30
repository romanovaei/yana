$(function() {
	var one = function() {
	
	  $(this).children(".accordion__panel").toggleClass("accordion__hidden");
	  $(this).toggleClass("accordion__active");
	};
	$(".accordion").click(one);

	var two = function() {
		$(this).toggleClass("block16__min");
		$(this).toggleClass("block16__big");
	};
	$(".block16 > img").click(two);

	var three = function() {
		$(this).toggleClass("block18__img");
		$(this).toggleClass("block16__big");
	};
	$(".block18 > img").click(three);

		/* STICKY HEADER */
	
	$(document).ready(function(){
        var HeaderTop = $(".block2").offset().top;
		
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $("#header").css({
                        	position: "fixed", 
                        	top: "0px",
                        	width: "100%"
                        	});
                } else {
                        $("#header").css({position: "static"});
                }
        });
	});
});
