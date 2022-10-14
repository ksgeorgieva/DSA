export class LinkedList {
    constructor(value = null) {
        this.value = value;
    }
}

export const printLinkedList = (linkedListHead) => {
    let current = linkedListHead;
    const valuesArr = [];

    while (current) {
        valuesArr.push(current.value);
        current = current.next;
    }

    console.log(JSON.stringify(valuesArr));
}