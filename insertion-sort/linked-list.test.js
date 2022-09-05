const {expect} = require('chai');
const sort = require('./linked-list');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const numsToLinkedList = (nums) => {
  const head = new ListNode(nums[0]);
  let current = head;

  for(let i=1; i<nums.length; i++) {
    let newNode = new ListNode(nums[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
};

const linkedListToNums = (head) => {
  let nums = [];
  let current = head;

  while(current) {
    nums.push(current.val);
    current = current.next;
  }

  return nums;
};

describe('insertion sort', () => {
  it('case [3, 2, 1]', () => {
    let list = numsToLinkedList([3, 2, 1]);
    let sorted = sort(list);

    expect(linkedListToNums(sorted)).to.eql([1, 2, 3]);
  });

  it('case [7, 9, 3, 5, 1, 2, 8, 4, 6]', () => {
    let list = numsToLinkedList([7, 9, 3, 5, 1, 2, 8, 4, 6]);
    let sorted = sort(list);

    expect(linkedListToNums(sorted)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('case [3, 3, 4, 5, 1, 2, 2]', () => {
    let list = numsToLinkedList([3, 3, 4, 5, 1, 2, 2]);
    let sorted = sort(list);

    expect(linkedListToNums(sorted)).to.eql([1, 2, 2, 3, 3, 4, 5]);
  });
});