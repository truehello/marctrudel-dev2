---
title: Memoization in React
description: A Quick overview of memoization and the useMemo React hook
featuredImgURL: https://source.unsplash.com/featured/?space,milkyway
featuredImgAlt: use memo image
slug: react-memo
keywords: React Memo
---
## Improving app performance with Memoization

First off, what is memoization? memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Save time and energy but using what your app already knows. 

## Why use useMemo Hooks?
The basic usage of this hook is to improve the performance of React applications by memoizing the output and related input parameters of commonly used functions.
If the memoized function is called again with the same parameters, it doesn’t re-execute the function. Rather, the initial cached value is returned from the function, reducing the overhead of executing the same function again.
For Example:
```
import React, { useState } from "react";

export default function SimpleWithoutMemoHook() { 
    const [count, setCount] = useState(1000);

    function returnValue(inputValue) {
        console.log("Function Called Again...")
        return inputValue + 10;
    }

    // It invokes the function every time on re-rendering...
    // We are calling function with the same set of input parameter multiple times...
    var calculatedValue = returnValue(10);

    setTimeout(() => {
        setCount(count + 1);
    }, 1000)

  return (
    <div>
      <p>You clicked {count} times</p>

      <b>Random Value: {calculatedValue}</b><br></br><br></br>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}
```

In the above code, the component and any children it has are forced to renrender every time the count state value is updated, even when that value has not changed. 


```
import React, { useState, useMemo } from "react";

export default function SimpleStateHooks() { 
    const [count, setCount] = useState(1000);

    function returnValue(inputValue) {
      return inputValue + 10;
    }

    var calculatedValue = useMemo(() => returnValue(10), [10]);

    setTimeout(() => {
        setCount(count + 1);
    }, 1000)

  return (
    <div>
      <p>You clicked {count} times</p>

      <b>Random Value: {calculatedValue}</b><br></br><br></br>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}
```
With the useMemo hook, and renders only occur if the value of the state changes. If it remains the same useMemo uses the cached value and none of the components rerender. Since the parameter passed the last time is the same as the parameter for the next execution, the memoized data is received rather than getting data from the re-execution of the given function.

Preventing any unnecessary renders will improve the performance of your React site or app.

## Credits

[Mayak Gupta](https://medium.com/better-programming/usememo-hook-in-react-d8d0eda6598a) Most of this is a distillation of this article

[Dmitri Pavlutin](https://dmitripavlutin.com/use-react-memo-wisely/) Use React Memo wisely


[Back Home](/)
