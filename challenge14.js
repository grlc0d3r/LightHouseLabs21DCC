
const dynamicPricing = (numberOfPeople, distanceTraveled) => 
{
  const basePrice = 1;
  const chargePerKm = .25;
  const total = basePrice + (chargePerKm * distanceTraveled);
  /* total charge =  basePrice + distanceTraveled * .30 + .25 if numberOfPeople > 30
	if (numberOfPeople >= 30)  
	{
		// need to add .25 to the whole thing
		return $$(.25+total).toFixed(2); // returns string as $#.##
	}	
	
	return "$" + total.toFixed(2); */
	
	// clean up with ternary result = (condition) ? 'do this if true' : 'do this if false'
	// returns price of trip as string with "$" + dollar + "." + cents
	return numberOfPeople >= 30 ? `$${(0.25 + total).toFixed(2)}` : `$${total.toFixed(2)}`;
}

