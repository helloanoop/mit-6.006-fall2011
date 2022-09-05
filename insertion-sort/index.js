// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.

const sort = (nums) => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] < nums[j]) {
        nums.splice(j, 0, nums[i]); // insert at j deleting 0 items
        nums.splice(i + 1, 1); // delete 1 item at index i
        break;
      }
    }
  }

  return nums;
};

module.exports = sort;