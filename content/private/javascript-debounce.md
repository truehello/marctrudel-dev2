---
title: Debounce in JavaScript
description: An explanation of a debounce function and how to use it in your code to improve performance
featuredImgURL: https://source.unsplash.com/featured/?space,sun
featuredImgAlt: Debounce JavaScript
slug: javascript-debounce
keywords: JavaScript
---

Using a debounce function is a great way to improve the performance of your javascript aplication by limiting the rate at which a function can fire. This is especially relevant on functions that are rapidly triggered through user interactions. Think of functions triggers by key up events in input fields or resizing of a browser window. 

for example, if there is a type ahead search function happening when a user is typing text into an input field. Triggering the search function on every keyup event can possibly overwhelm you api enpoint by triggering the enpoint every millisecond. By incorporating the debounce function, it can limit call to that endpoint every 250 milliseconds, offering greater rate control over the endpoint and not noticeably diminishing the user experience. you may need to play with the timing to find the best balance for your application. 


```
// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
  let timeout;

  // This is the function that is returned and will be executed many times
  // We spread (...args) to capture any number of parameters we want to pass
  return function executedFunction(...args) {

    // The callback function to be executed after 
    // the debounce time has elapsed
    const later = () => {
      // null timeout to indicate the debounce ended
      timeout = null;
      
      // Execute the callback
      func(...args);
    };
    // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the 
    // inside of the previous setTimeout  
    clearTimeout(timeout);
    
    // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs Node)
    timeout = setTimeout(later, wait);
  };
};

```

Then you can use the debounce funciton like so:

```
var returnedFunction = debounce(function() {
  // All the taxing stuff you do
}, 250);

window.addEventListener('resize', returnedFunction);
```
The function above will only fire once every quarter of a second instead of as quickly as it's triggered.  In many instances this will provide a beneficial performance boost to your application. 


## Credits
 [Debounce in JavaScript — Improve Your Application’s Performance - Trey Huffine](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)  

[JavaScript Debounce Function - David Walsh](https://davidwalsh.name/javascript-debounce-function)
