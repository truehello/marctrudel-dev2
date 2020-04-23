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
console.log(JSON.stringify(data))

```

[Back Home](/)
