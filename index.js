// Linked List


/*
We define a Node class to represent individual elements in the linked list. Each node has a data property to store the value and a next property to point to the next node in the list.

We define a LinkedList class to represent the linked list itself. It has a head property that points to the first node in the list.

The append method is used to add a new node with the given data to the end of the list.

The print method is used to print the elements of the linked list from the head to the end.

Finally, we create a new linked list, add elements (1, 2, and 3 in this example), and then print the list to demonstrate how it works.

You can add more methods to the LinkedList class to perform various operations like inserting at a specific position, deleting nodes, searching for elements, and so on, depending on your requirements.

*/


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Create a new linked list
  const myList = new LinkedList();
  
  // Add elements to the list
  myList.append(1);
  myList.append(2);
  myList.append(3);
  
  // Print the linked list
  myList.print();
  