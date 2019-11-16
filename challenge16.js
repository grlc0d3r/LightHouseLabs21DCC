/* Challenge #16 - In Living Colour
It's time to order the banners and flags for the festival, and you need to decide on the key colour scheme.

You want to use colour theory to make sure the colours complement one another. To do so we'll need to choose a main colour and use code to determine the best complementary colours.

Instructions
We'll complete a function festivalColours() that calculates the split complementary colours (https://www.w3schools.com/colors/colors_compound.asp) for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker. http://hslpicker.com/

The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the split complementary colours.  https://www.ethangardner.com/articles/2009/03/15/a-math-based-approach-to-color-theory-using-hue-saturation-and-brightness-hsb/#split-complementary */


const festivalColours = color1 => 
{
	// receives a hue that it then splits into a pair (smallest, largest) so if const1 = 100, x will be 250 & y will be 310 per the formula mentioned
	var x = (color1 + 150)-360; // this is from the ethangardner website with the math stuff
	var y = (color1 + 210)-360;  
	// but, since we're working on a color WHEEL, we have to make certain it's + because wheels don't have any negative #s 
	// so if the # I get is less than zero for either x or y, I have to add 360 to get my degrees
	if (x<0){ x = x + 360}  
	if (y<0){ y = y + 360} 
	// then we need to put it into the array we need to return but we need to make certain the smallest is first
	if (x>y){ x,y=y,x}  // so if x > y then flip flop and put y first and x 2nd otherwise, leave it
	return [x,y];
}

