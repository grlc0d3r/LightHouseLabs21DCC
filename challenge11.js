/* Challenge #11 - You Can't Hurry Transit
You can't hurry love, or local transit in Codeville. While you've been hard at work on a solution to the larger transit woes, you've decided to implement a new system to at least be a little more transparent about wait times. The city will be installing a smart screen, at the busiest bus stop in town, that will show the estimated arrival times for each of the buses that stop there.

Instructions
For this challenge, we'll implement a function called busTimes(). This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called buses, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a new object that shows how long until each bus arrives at the stop.
*/

const busTimes = buses => 
{
  var numberOfBuses = Object.keys(buses).length;


  // Object.keys = looks like it just returns the KEY instead of the value so it'll count the # of objects in buses and return that length

  for (var i = 0; i < numberOfBuses; i++)
  {
    route = Object.keys(buses)[i];
    // so to access an object's properties the way you would access an array you use
    arrival = buses[route].distance / buses[route].speed;
    buses[route] = arrival;
  }

  return(buses);
};
