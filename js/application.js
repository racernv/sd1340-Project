function lengthconversion() {
	var ans = math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val());
	$('#result').val(math.format(ans, {precision: 10, notation: 'fixed'}));
}
function massconversion() {
	var ans = math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val());
	$('#massResult').val(math.format(ans, {precision: 14}));
}

function liquidconversion() {
	var ans = math.eval($('#firstLiquid').val() + " " + $('#firstLiquidType').val() + " to " + $('#secondLiquidType').val());
	$('#liquidResult').val(math.format(ans, {precision: 14}));
}

function tempconversion() {
	var status = $('#tempConv').val();

	if (status === "f") { 
	var ans = math.eval($('#temperature').val() + " degF to degC");
	
	 $('#tempResult').val(math.format(ans, {precision: 10, notation: 'fixed'}));
	}
	else {
	var ans = math.eval($('#temperature').val() + " degC to degF");
	
	 $('#tempResult').val(math.format(ans, {precision: 10, notation: 'fixed'}));
	}

}


$(window).bind('resize',function(event){
	window.scrollTo(0,0);
	var winhigh = $.mobile.getScreenHeight(); //Get available screen height, not including any browser chrome
	var headhigh = $('[data-role="header"]').first().outerHeight(); //Get height of first page's header
	var foothigh = $('[data-role="footer"]').first().outerHeight(); //Get height of first page's header
	var $content=$('[data-role="content"]');
	var contentpaddingwidth=parseInt($content.css("padding-left").replace("px", ""))+parseInt($('[data-role="content"]').css("padding-right").replace("px", ""));
	var contentpaddingheight=parseInt($content.css("padding-top").replace("px", ""))+parseInt($('[data-role="content"]').css("padding-bottom").replace("px", ""));
	winhigh = winhigh - headhigh - foothigh - contentpaddingheight; 
	winwide = $(document).width(); //Get width of document
	winwide = winwide - contentpaddingwidth; 
	$content.css('width',winwide + 'px').css('height',winhigh + 'px'); //Change div to maximum visible area
});