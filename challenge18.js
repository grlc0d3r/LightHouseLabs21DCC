/* Challenge #18 - In It to Win It
There are a number of different stands and games at this year's festival where the townspeople of Codeville can win raffle tickets! There are three different kinds of tickets someone can win, and they each correspond to a raffle. There are red tickets for the Red Robin Raffle, green tickets for the Green Machine Raffle and blue tickets for the Deep Blue Sea Raffle. The people of Codeville love games and always end up with a large number of tickets. So this year, we'll build a machine that not only sorts and counts the number of each ticket, but also tells people which raffle they have the best odds of winning based on the current entries.

Instructions
Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts. */

const countTickets = (tickets) =>
{
	var counts = { red: 0, blue: 0, green: 0 };
	
	for (var ticket of tickets)
	{
		if (ticket == 'red')
		{
			counts.red++;
		}
		else if (ticket == 'blue')
		{
			counts.blue++;
		}
		else if (ticket == 'green')
		{
			counts.green++;
		}		
	}
	
	return counts;
}

const bestOdds = (tickets, raffleEntries) =>
{
	var counts = countTickets(tickets);
	
	var redProb = counts.red / raffleEntries.red;
	var blueProb = counts.blue / raffleEntries.blue;
	var greenProb = counts.green / raffleEntries.green;
	
	if (redProb > greenProb & redProb > blueProb)
	{
		return 'You have the best odds of winning the red raffle.';
	}
	else if (greenProb > redProb & greenProb > blueProb)
	{
		return 'You have the best odds of winning the green raffle.';
	}
	else if (blueProb > redProb & blueProb > greenProb)
	{
		return 'You have the best odds of winning the blue raffle.';
	}
}