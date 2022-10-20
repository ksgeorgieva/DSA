#Binary Search

__Description__
Write a function that takes in a sorted array of integers as well as a target
integer. The function should use the Binary Search algorithm to determine if
the target integer is contained in the array and should return its index if it
is, otherwise -1.

__Sample Input__

```javascript
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
```

__Sample Output__

`3`

__Function Declaration__

`const binarySearch = (array, target) => { };`

__Target Complexity__

O(log(n)) time | O(1) space - where n is the length of the input array