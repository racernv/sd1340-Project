function lengthconversion() {
	var ans = math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val());
	$('#result').val(math.format(ans, {precision: 10, notation: 'fixed'}));
}
function massconversion() {
	var ans = math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val());
	$('#massResult').val(math.format(ans, {precision: 14}));
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