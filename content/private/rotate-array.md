---
title: Rotating an array in Javascript
description: Given an array, rotate the array to the right by k steps, where k is non-negative.
featuredImgURL: https://source.unsplash.com/featured/?space,saturn
featuredImgAlt: Console Debugging Tricks image
slug: javascript-rotate-array
keywords: javascript array algos
---
## Rotating an array in Javascript

A common interview question. Given an array, rotate the array to the right by k steps, where k is non-negative.



### Solution: Use the .splice method of javascript array objects

The syntax is as follows:

array.splice(index, howmany, item1, ....., itemX)

The index is the starting position where we want the transfomation to occur.
howmany represents the number of items that you want to remove starting at the index point
item1, ....., itemX represent any items that you want to insert into the arrray at that point

example
At position 2, add the new items, and remove 1 item:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
//result = Banana,Orange,Lemon,Kiwi,Mango
// starting at position 2 (Apple), we removed 1 item (Apple) and inserted Lemon and Kiwi starting at the index
```


So for our problem, we want to move our items k to the right. We can achieve this by creating variable to hold 
the element that we are going to move to the front of the array to. 
To start we get the length of the array minus k (which has to be a positive integer) to know at which point to remove our items. k also give us the number of items to remove into the temporary variable

``
const nums = [1,3,2,8,4,5]
const k = 2
let elements = nums.splice(nums.length-(k), k);
//let elements = nums.splice(4,2)
//let elements = [4,5]
//nums is now [1,3,2,8]
```
Next, we can take the elements array and splice it back into the nums array to achieve the desired rotation
```
nums.splice(0,0,...elements)
//this insert the ...elements to the front of the nums array (0) and removes no other elements (the second 0)
// same as nums.splice(0,0,"4","5")
//result is nums is now [4,5,1,3,2,8]
```



example
```
var rotate = function(nums, k) {
    let elements = nums.splice(nums.length-(k), k);
    console.log(elements)
    nums.splice(0, 0, ...elements);
    return nums;
};

const nums = [1,2]
const k = 3

rotate(nums, k);

```

## Credits
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Array.prototype.splice()



