## Call Stack
#### A call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.
#### -When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
#### -Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
#### -When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
#### *If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
![](https://miro.medium.com/max/748/1*-MMBHKy_ZxCrouecRqvsBg.png)

## The JavaScript Call Stack:
#### The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack. The browser provides web APIs like the DOM, AJAX, and Timers.
#### The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack. The browser provides web APIs like the DOM, AJAX, and Timers.
## LIFO (Last In, First Out): 
#### When we say that the call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.

## stack overflow:
#### A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.

## JavaScript error messages && debugging:
#### -Reference errors: use a variable that is not yet declared.
#### -Syntax errors: something that cannot be parsed in terms of syntax.
#### -Range errors: manipulate an object with some kind of length and give it an invalid length.

***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)