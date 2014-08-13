function lengthconversion() {
 $('#result').val(math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val()).valueOf());
}

function massconversion() {
 $('#massResult').val(math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val()).valueOf());
}

function tempconversion() {
var status = $('#tempConv').val();

if (status === "f") { 
	 $('#tempResult').val(math.eval($('#temperature').val() + " degF to degC"));
	}
else {
	 $('#tempResult').val(math.eval($('#temperature').val() + " degC to degF"));
	}

}