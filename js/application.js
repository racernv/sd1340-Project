function lengthconversion() {
 var unitOne
 var unitOneType
 var unitTwoType
 var result

 unitOne = $('#firstUnit').val();
 unitOneType = $('#firstUnitType').val();
 unitTwoType = $('#secondUnitType').val();
 
 $('#result').val(unitOne + unitOneType);
}