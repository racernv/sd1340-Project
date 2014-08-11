function lengthconversion() {
 $('#result').val(math.eval($('#firstUnit').val() + " " + $('#firstUnitType').val() + " to " + $('#secondUnitType').val()).valueOf());
}

function massconversion() {
 $('#massResult').val(math.eval($('#firstMass').val() + " " + $('#firstMassType').val() + " to " + $('#secondMassType').val()).valueOf());
}