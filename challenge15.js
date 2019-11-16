/* Challenge #15 - X Marks the Perfect Shot 📸
With the city getting smarter, it's time to turn your focus to Codeville's biggest event of the year, the Harvest Festival! Each year, the Harvest Festival kicks off with a parade - and you want to make sure this is a show the townspeople will remember forever.

You've hired Daria Ducksworth, the town's best photographer, to capture the magic of the Harvest Festival Parade. She needs to track the coordinates of the floats to help her capture their best angles.

Instructions
For this challenge you'll have to implement a function called finalPosition(), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like a battleship board only with a top/bottom and left/right divided by the x (top/bottom) and y (left/right) axis


Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0]. 8> */

const finalPosition() = (moves) => 
{

	


	
const finalPosition = (moves) => 
{
 	// example array that will be used to calc the movement of the parade const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
		// so after starting @ coordinates (0,0), they head NORTH by 1 square then NORTH again then turn WEST.
		// so the ending array will be a 2D representing each coordinate so [[0,0], [0,1], [0,2], [-1,2], [-2,2] . . . ]
		// [0,1] because we've moved north with no change east or west then [0,2] because the 2nd move was again to the north with no move east/west
		// as soon as we move west, we put a -1 in the x axis 
	// function then returns a 2D [] representing the end of the parade with all moves - [ {'north', 'west'}, {'x-axis', 'y-axis'}   ];
	var position = [0,0]; // starting position and also where we'll store  all the stops
	for (let i=0; i < moves.length; i++)
	{	  
		// loop through and change the [i] based on what the direction is ++/-- [0] for x-axis & ++/-- [1] for N/S (y axis) 
		switch(moves[i])
		{
		  case "north":
			position[1] += 1;
			break;
		  
		  case "south":
			position[1] -= 1;
			break;
		  
		  case "east":
			position[0] += 1;
			break;
		  
		  case "west":
			position[0] -= 1;
			break;
		}
	}
  return position;
}

