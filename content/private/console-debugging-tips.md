---
title: Console Debugging Tricks and Resources
description: A personal collection of helpful console debugging tips
featuredImgURL: https://source.unsplash.com/featured/?space,saturn
featuredImgAlt: Console Debugging Tricks image
slug: console-debugging-tips
keywords: javascript debugging
---
## Console Debugging Tricks and Resources

This is a personal collection of tips and tricks collectd to assist in debugging. 

### Problem: console is logging [ Object Object ]

### Solution: Use console.log(JSON.stringify(object))

this will output verbose and readable verison of your object to help view what is being returned.

example
```
console.log(JSON.stringify(data, null, 2))

```

### Problem: hard to identify console.log you are looking for among foret of logs

### Solution: Use CSS to style consol output

Add %c before your log message and then add the CSS. This will add css to the console to help the log in question stand out. 

example
```
console.log('%c Really Important Message','color:red; background:black, font-size:25px; font-family:cursive; text-shadow: 2px 2px 3px white')

```

