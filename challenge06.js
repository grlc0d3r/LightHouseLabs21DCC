/* Challenge #6 - Turn Out For What
Phew, with our help the city staff were able to select the voting stations on time and the election went off without a hitch! Now that the votes have been cast, the Election staff needs to verify the votes by matching each voter's signature to their voter ID.

Instructions
Complete the function voterTurnout(), that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return false. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the same names in the same order. If they are, our function should return "All clear, we can count the votes!", if they are not it should return "FRAUD!".
*/


const voterTurnout = (voter_signatures, voter_ids) => 
{
  // Code here!

  if(voter_signatures.length !== voter_ids.length) 
  {
    return false;
  }
  for (var i = 0; i < voter_signatures.length; i++) 
  {
    if (voter_signatures[i] !== voter_ids[i])
    {
      return 'FRAUD!';
    }
  }
  return 'All clear, we can count the votes!';
}
