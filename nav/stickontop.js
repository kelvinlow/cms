$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	
    if (scroll >= 100){ // <--- agak agak lor
        $("#logo_big").hide();
				$("#logo_small").slideDown(100);
				$(".mainmenu").removeClass("mainmenu_big");
				$(".mainmenu").addClass("mainmenu_small");
				$("bluebar").addClass("hidden");
				$("header").addClass("headergotop");
    } else {
				$("#logo_big").show();
				$("#logo_small").hide(0);
				$(".mainmenu").addClass("mainmenu_big");
				$(".mainmenu").removeClass("mainmenu_small");
				$("bluebar").removeClass("hidden");
				$("header").removeClass("headergotop");
    }
});




/*Tumpang Coding - disable ctrl u (view source) */
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};

/*disable right click*/
$('html').bind('contextmenu', function(e){
return false;
});

