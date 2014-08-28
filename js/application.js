function lengthconversion() {
	var checker = $('#firstUnit').val();
	$('#result').val('');
	if (!isNaN(checker) && checker) {
		var ans = math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val());
		$('#result').val(math.format(ans, {precision: 10, notation: 'fixed'}));
		}
	
	else {
		$( "#popupDialog1" ).popup( "open" )
	}
}
function massconversion() {
	var checker = $('#firstMass').val();
	$('#massResult').val('');
	if (!isNaN(checker) && checker) {
	var ans = math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val());
	$('#massResult').val(math.format(ans, {precision: 14}));
			}
	else {
		$( "#popupDialog2" ).popup( "open" )
	}
}

function liquidconversion() {
	var checker = $('#firstLiquid').val();
	$('#liquidResult').val('');
	if (!isNaN(checker) && checker) {
	var ans = math.eval($('#firstLiquid').val() + " " + $('#firstLiquidType').val() + " to " + $('#secondLiquidType').val());
	$('#liquidResult').val(math.format(ans, {precision: 14}));
	}
	else {
		$( "#popupDialog3" ).popup( "open" )
	}
}

function tempconversion() {
	var checker = $('#temperature').val();
	$('#tempResult').val('');
	if (!isNaN(checker) && checker) {

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
	else {
		$( "#popupDialog4" ).popup( "open" )
	}

}
