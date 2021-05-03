# Testing:
### Unit tests and TDD
#### Unit tests are some pieces of code to exercise the input, the output and the behaviour of your code. You can write them anytime you want.
#### Test values:
#### -Expected
#### -Actual.
#### We should chose the testing values depending on our under standing to the code, we also should choose critical values for the testing , for example if the program was dealing with numbers we should check positive and nigative,
***if there is an interval we should check the beginning and the ending for the interval. craft the software design first is really great advantage for TDD***
![](https://www.xenonstack.com/images/insights/2020/04/test-driven-development-tools-best-practices-xenonstack.png)

## Recursion
#### The process in which a function calls itself directly or indirectly is  and the corresponding function is called as recursive function.

#### Base condition in recursion:
#### In the recursive program, the solution to the base case is provided and the solution of the bigger problem is expressed in terms of smaller problems. 
![](https://www.edureka.co/blog/wp-content/uploads/2019/08/2019-08-06-12_31_29-Window.png)

#### The idea is to represent a problem in terms of one or more smaller problems, and add one or more base conditions that stop the recursion.


### Difference between tailed and non-tailed recursion:
#### A recursive function is tail recursive when recursive call is the last thing executed by the function. 
#### How memory is allocated to different function calls in recursion? 
#### When any function is called from main(), the memory is allocated to it on the stack. A recursive function calls itself, the memory for a called function is allocated on top of memory allocated to calling function and different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.

![](https://cdn.programiz.com/cdn/farfuture/6i17bRQT6hWIqw9JE5rMMyW527g7It_68T7kSzpIplo/mtime:1591262415/sites/tutorial2program/files/python-recursion-function.png)


#### Disadvantages of recursive programming over iterative programming
### Note that both recursive and iterative programs have the same problem-solving powers, i.e., every recursive program can be written iteratively and vice versa is also true. The recursive program has greater space requirements than iterative program as all functions will remain in the stack until the base case is reached. It also has greater time requirements because of function calls and returns overhead.

### Advantages of recursive programming over iterative programming
#### Recursion provides a clean and simple way to write code. Some problems are inherently recursive. For such problems, it is preferred to write recursive code. We can write such codes also iteratively with the help of a stack data structure.


##### Resources:
- [Testing](https://code.likeagirl.io/in-tests-we-trust-tdd-with-python-af69f47e6932)
- [Recursion](https://www.geeksforgeeks.org/recursion/)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)