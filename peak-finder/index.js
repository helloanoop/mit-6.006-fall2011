/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞.
 * In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */


/**
 * Lets solve this using a BST
 * Find the middle, compare item to the left and to the right
 * If the middle item is greater than both, then it is the peak.
 * 
 * If the left side is greater, then repeat the exercice with the left half array
 * If the right side is greater, then repeat the exercice with the right half array
 * 
 * 
 * 
 * Imagine it as climbing a peak. Now the left and right ends are at -infinity and there is no plateau so there is a  peak to be guaranteed.
 * Now check the middle element, if the next element is less this means
 *  that we are on our downward journey in the peak, so the peak is at the left part
 *  i.e right = mid
 * Else (meaning middle element is lesser than next)
 *  that we are on the upward journey, so peak is at the right part
 *  i.e left = mid
 */

const findPeakElement = function(nums) {
  if(!nums || !nums.length) {
    return null;
  }

  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let mid = parseInt(left + (right - left)/2);

    if(nums[mid] < nums[mid+1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

module.exports = findPeakElement;
