function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const sort = (head) => {
  // traverse from head to node and perform insert sort
  const insertSort = (head, node) => {
    let current = head;
    let prev = null;
    let sorted = false;
    while(current && (current !== node)) {
      if(node.val < current.val) {
        if(!prev) {
          node.next = head;
          head = node;
        } else {
          prev.next = node;
          node.next = current;
        }
        sorted = true;
        break;
      }
      prev = current;
      current = current.next;
    }

    return {
      sorted: sorted,
      newHead: head
    };
  };

  let currentNode = head;
  let prevNode = currentNode;

  while(currentNode) {
    let nextNode = currentNode.next;
    let {
      sorted,
      newHead
    } = insertSort(head, currentNode);
    if(sorted) {
      head = newHead;
      prevNode.next = nextNode;
    } else {
      prevNode = currentNode;
    }
    currentNode = nextNode;
  }

  return head;
}

module.exports = sort;
