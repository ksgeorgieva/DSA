import { LinkedList, printLinkedList } from './../../shared/linkedListHelpers.js'

const arr = [1, 1, 3, 4, 4, 4, 5, 6, 6];

const list = arr.map(num => new LinkedList(num)).map((node, index, arr) => {
    node.next = arr[index + 1];
    
    return node;
})[0];

const removeDuplicatesFromLinkedList = (linkedListHead) => {
    const existentNumbers = {};
    
    let current = linkedListHead;
    let prev = null;

    while (current) {
        const { value } = current;

        if (value in existentNumbers) {
            prev.next = current.next;
        } else {
            existentNumbers[value] = value;
            prev = current;
        }

        current = current.next;
    }
};

removeDuplicatesFromLinkedList(list);
printLinkedList(list);