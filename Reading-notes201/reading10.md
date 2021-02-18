## Erorr Handling :
#### When you are writing JavaScript, do not expect to write it perfectly the first time. Programming is like problem solving: you are given a puzzle and not only do you have to solve it, but you also need to create the instructions that allow the computer to solve it. too. 

### EXECUTION CONTEXTS:
#### The JavaScript interpreter uses the concept of execution contexts. There is one global execution context; plus, each function creates a new execution context. They correspond to variable scope. 
#### Every statement in a script lives in one of three execution contexts:
#### 1. GLOBAL CONTEXT :Code that is in the script, but not in a function. There is only one global context in any page.
#### 2.FUNCTION CONTEX:Code that is being run within a function. Each function has its own function context. 
#### 3.EVAL CONTEXT (NOT SHOWN):text is executed like code in an internal function called eva l {) (which is not covered in this book). 

### VARIABLE SCOPE :The first two execution contexts correspond with the notion of scope
#### 1.GLOBAL SCOPE :If a variable is declared outside a function, it can be used anywhere because it has global scope. If you do not use the var keyword when creating a variable, it is placed in global scope.
#### 2.FUNCTION-LEVEL SCOPE :When a variable is declared within a function, it can only be used within that function. This is because it has function-level scope. 
![](https://miro.medium.com/max/3200/1*0YTEqYUeagQ34e31n4D6Fw.png)

### EXECUTION CONTEXT & HOISTING:
#### 1: PREPARE :
#### •The new scope is created
#### •Variables, functions, and arguments are created
#### •The value of the this keyword is determined

### 2: EXECUTE:
#### •Now it can assign values to variables
#### •Reference functions and run their code
#### •Execute statements 

### UNDERSTANDING ERRORS:
#### If a JavaScript statement generates an error, then it throws an exception. At that point, the interpreter stops and looks for exception handling code.
#### If you are anticipating that something in your codemay cause an error,  you can use a set of statements to handle the error . This is important because if the error is not handled, the script will just stop processing and the user will not know why. So exception handling code should inform users when there is a problem. 

### ERROR OBJECTS CONTI NUED:
#### 1.Syntax Error: SYNTAX IS NOT CORRECT 
#### 2.Ev alError :INCORRECT USE OF eval() FUNCTION 
#### 3.Ref erenceError: VARIABLE DOES NOT EXIST
#### 4.UR I Error: INCORRECT USE OF URI FUNCTIONS
#### 5.Type Error:VALUE IS UNEXPECTED DATA TYPE
#### 6.RangeError: NUMBER OUTSIDE OF RANGE 
#### 7.NaN:NOT AN ERROR 

### HOW TO DEAL WITH ERRORS
#### 1: DEBUG THE SCRIPT TO FIX ERRORS:
#### If you come across an error while writing a script (or when someone reports a bug), you will need to debug the code, track down the source of the error, and fix it. You will find that the developer tools available in every major modern browser will help you with this task. In this chapter, you will learn about the developer tools in Chrome and Firefox. (The tools in Chrome are identical to those in Opera.) IE and Safari also have their own tools.
#### 2: HANDLE ERRORS GRACEFULLY:
#### You can handle errors gracefully using try, catch, throw, and f i na 1 ly statements. Sometimes, an error may occur in the script for a reason beyond your control. For example, you might request data from a third party, and their server may not respond. In such cases, it is particularly important to write error-handling code. In the latter part of the chapter, you will learn how to gracefully check whether something will work, and offer an alternative option if it fails.  

## HANDLING EXCEPTIONS:
#### 1.TRY:
#### First, you specify the code that you think might throw an exception within the try block. If an exception occurs in this section of code, control is automatically passed to the corresponding catch block. The try clause must be used in this type of error handling code, and it should always have either a catch, fi na 1 ly, or both. If you use a continue, break, or return keyword inside a try, it will go to the f i na 11 y option. 
#### 2.CATCH
#### If the try code block throws an exception, catch steps in with an alternative set of code. It has one parameter: the error object. Although it is optional, you are not handling the error if you do  not catch an error. The ability to catch an error can be very helpful if there is an issue  on a live website. It lets you tell users that something has gone wrong (rather than not informing them why the site stopped working). 
#### 3.FINALLY:
#### The contents of the fi na 11 y code block will run either way - whether the try block succeeded or failed. It even runs if a return keyword  is used in the try or catch block. It is sometimes used to clean up after the previous two clauses. These methods are similar to the .done(), . fail(), and . a 1 ways() methods in jQuery. You c an nest checks inside each other (place another try inside a catch), but be aware that it can affect performance of a script. 
![](https://stackify.com/wp-content/uploads/2018/08/word-image-55.png)

### DEBUGGING TIPS :
#### ANOTHER BROWSER: Some problems are browserspecific. Try the code in another browser to see which ones are causing a problem. 
#### STRIP IT BACK: Remove parts of code, and strip it down to the minimum you need. You can do this either by  removing the code altogether, or by just commenting it out using multi-line comments: /* Anything between these characters is a cofllllent */
#### ADD NUMBERS: Write numbers to the console so you can see which the items get logged. It shows how far your code runs before errors stop it.

### COMMON ERRORS :
#### 1.DATA TYPE ISSUES :Using= rather than == will assign a value to a variable, not check that the values match. 
#### 2.GO BACK TO BASICS :JavaScript is case sensitive so check your capitalization. 
#### 3.MISSED/ EXTRA CHARACTERS :Every statement should end in a semicolon. 



***Done by Omar-zoubi***
[GitHub]()