/**
 * -----------------------------------------------------
 * Node class
 * -----------------------------------------------------
 */
 class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  /**
   * -----------------------------------------------------
   * LinkedList class
   * -----------------------------------------------------
   */
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    /**
     * Append item to the list.
     *
     * @param any data
     * @returns Node
     */
    append = (data) => {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let node = this.head;
        while (node.next) {
          node = node.next;
        }
        node.next = newNode;
      }
  
      return newNode;
    };
  
    /**
     * Append multiple items to the list at once.
     *
     * @param array array
     * @returns false
     */
    multiAppend = (array = []) => {
      for (let i = 0; i < array.length; i++) {
        this.append(array[i]);
      }
    };
  
    /**
     * Append item to the list at index.
     *
     * @param any data
     * @param int index
     * @returns LinkedList
     */
    appendAt = (data, index) => {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let previousNode = this.getItem(index - 1);
        if (!previousNode) return undefined;
        newNode.next = previousNode.next;
        previousNode.next = newNode;
      }
      return this.head;
    };
  
    /**
     * Prepend item to the list.
     *
     * @param any data
     * @returns LinkedList
     */
    prepend = (data) => {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    };
  
    /**
     * Prepend multiple items to the list at once.
     *
     * @param array array
     * @returns false
     */
    multiPrepend = (array = []) => {
      for (let i = 0; i < array.length; i++) {
        this.prepend(array[i]);
      }
    };
  
    /**
     * Get list item by index.
     *
     * @param int index
     * @returns Node
     */
    getItem = (index) => {
      let counter = 0;
      let node = this.head;
      while (node) {
        if (counter === index) return node;
        counter++;
        node = node.next;
      }
      return undefined;
    };
  
    /**
     * Similar to getItem() method, but this
     * method is to get item's data by index.
     *
     * @returns any
     */
    get = (index) => (this.getItem(index) ? this.getItem(index).data : undefined);
  
    /**
     * Get the last item in the list.
     *
     * @returns Node
     */
    lastItem = () => {
      let node = this.head;
      while (node) {
        if (node.next === null) return node;
        node = node.next;
      }
      return undefined;
    };
  
    /**
     * Similar to lastItem() method, but this
     * method is to get the data of the last item.
     *
     * @returns any
     */
    last = () => (this.lastItem() ? this.lastItem().data : undefined);
  
    /**
     * Remove item from the list by index.
     *
     * @param int index
     */
    remove = (index) => {
      if (this.getItem(index)) {
        index === 0
          ? (this.head = this.head.next)
          : (this.getItem(index - 1).next = this.getItem(index).next);
      }
      return undefined;
    };
  
    /**
     * Remove one item from the list by data.
     *
     * @param any item
     */
    removeItem = (item) => this.remove(this.indexOf(item));
  
    /**
     * Remove the last item in the list.
     *
     * @returns false
     */
    removeLast = () => {
      let index = 0;
      let node = this.head;
      while (node) {
        if (node == this.lastItem()) {
          this.remove(index);
        } else {
          node = node.next;
          index++;
        }
      }
      // OR
      // this.remove(this.length() - 1);
    };
  
    /**
     * Clear the list.
     *
     */
    clear = () => (this.head = null);
  
    /**
     * Get the index of an item in the list.
     *
     */
    indexOf = (data) => {
      let index = 0;
      let list = this.head;
      while (list !== null) {
        if (list.data == data) {
          return index;
        }
        index++;
        list = list.next;
      }
      return undefined;
    };
  
    /**
     * Get the length of the list.
     *
     * @returns int
     */
    length = () => {
      const lastItem = this.lastItem() ? this.lastItem().data : undefined;
      return li.indexOf(lastItem) ? li.indexOf(lastItem) + 1 : 0;
    };
  
    /**
     * Check if the list is empty.
     *
     * @returns boolean
     */
    isEmpty = () => this.length() < 1;
  
    /**
     * Print out list's data.
     *
     */
    print = () => {
      let length = 0;
      let list = this.head;
      while (list) {
        length++;
        console.log(list.data);
        list = list.next;
      }
      console.log("length: " + length);
    };
  }

  module.exports = {LinkedList}
  
  /**
   * -----------------------------------------------------
   *
   * Examples,
   * Just uncomment the method you want to run below.
   *
   * -----------------------------------------------------
   */
  // First, Creating a LinkedList.
//   const li = new LinkedList();
  
  // li.append(9);
  
//   li.multiAppend([
//     123, // Integer
//     "Hello World,", // String
//     {
//       // Object
//       FirstName: "Rob",
//       LastName: "Kazirut",
//     },
//     [1, 2, 3], // Array
//     true, // Boolean
//   ]);
  
  // li.appendAt("From append at", 0);
  
  // li.prepend(9);
  
  // li.multiPrepend([10, 20, 30, 40]);
  
  // li.remove(0);
  
  // li.removeItem(123);
  
  // li.removeLast();
  
  // li.clear();
  
  // console.log(li.get(1));
  
  // console.log(li.last());
  
  // console.log(li.indexOf(123));
  
  // console.log(li.length());
  
  // console.log(li.isEmpty());
  
//   li.print();