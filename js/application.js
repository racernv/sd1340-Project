function lengthconversion() {
	var checker = $('#firstUnit').val();
	if (!isNaN(checker) && checker) {
		var ans = math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val());
		$('#result').val(math.format(ans, {precision: 10, notation: 'fixed'}));
		}
	
	else {
		alert('You have either not entered a value, or entered an illegal character.');
	}
}
function massconversion() {
	var checker = $('#firstMass').val();
	if (!isNaN(checker) && checker) {
	var ans = math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val());
	$('#massResult').val(math.format(ans, {precision: 14}));
			}
	else {
		alert('You have either not entered a value, or entered an illegal character.');
	}
}

function liquidconversion() {
	var checker = $('#firstLiquid').val();
	if (!isNaN(checker) && checker) {
	var ans = math.eval($('#firstLiquid').val() + " " + $('#firstLiquidType').val() + " to " + $('#secondLiquidType').val());
	$('#liquidResult').val(math.format(ans, {precision: 14}));
	}
	else {
		alert('You have either not entered a value, or entered an illegal character.');
	}
}

function tempconversion() {
	var checker = $('#temperature').val();
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
		alert('You have either not entered a value, or entered an illegal character.');
	}

}
