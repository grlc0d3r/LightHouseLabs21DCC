/* Challenge #17 - We're Rooting For You!
At this year's town festival the Codeville Vegetation Association will be handing out several awards for the best vegetables in a given category. We'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness OR their plumpness.

Instructions
For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

Examples */


const judgeVegetable = (vegetables, metric) => {
  // vegetables = [] with submitter, redness, plumpness
  // metric is what we're judging on ie redness or plumpess
  
  // loop through the veg array and compare each veg's metric to the current highestRanked veg
  var highestRanked = 0; // will change so MUST be a var not a const
  var winner;
  for (var i=0; i<vegetables.length; i++)
  {
    // if the veg you're looking at is > that the highestRanked, 
    if (vegetables[i][metric] > highestRanked)
    {
      // then you swap it out 
      highestRanked = vegetables[i][metric];
      //and it becomes the winner for the next loop.
      winner = i;
    }
    
  }
  
  // the final winner at i in the loop, tells us who we're returning as the vegetables.submitter
  return vegetables[winner].submitter; 
}
