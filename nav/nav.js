/*Nav function coded by Waikee*/


$(document).ready(function(){
	$("submenu").hide();/*Hide all submenu first no matter wut on pageload!*/
	
  $(".mainmenu a").click(function(){
		 $("submenu").slideUp();/*Hide all submenu first as restart*/
		 //$('body').css('overflow', 'auto'); /*Enable parent body scrollbar first as restart*/
		 
		 if ($(this).next("submenu").is(':hidden')) /*check if selected submenu is hidden?*/
			{
				$(this).next("submenu").slideDown(300); /*if yes, make submenu slideDown*/
				//$('body').css('overflow', 'hidden'); /*then disable parent body scrollbar*/
			}
  });
});


/*if click outside of the menu : close dropdown*/
$(document).mouseup(function(e) 
{
    var container = $(".mainmenu");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $("submenu").slideUp();
				//$('body').css('overflow', 'auto'); /*Enable parent body scrollbar again*/
    }
});