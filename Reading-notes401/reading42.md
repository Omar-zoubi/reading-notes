## What Are Python Generators?
#### Generator functions allow you to declare a function that behaves like an iterator, i.e. it can be used in a for loop.

#### The simplification of code is a result of generator function and generator expression support provided by Python.

#### To illustrate this, we will compare different implementations that implement a function, "firstn", that represents the first n non-negative integers, where n is a really big number, and assume (for the sake of the examples in this section) that each integer takes up a lot of space, say 10 megabytes each.

- Note: Please note that in real life, integers do not take up that much space, unless they are really, really, really, big integers. For instance you can represent a 309 digit number with 128 bytes (add some overhead, it will still be less than 150 bytes).

```
   1 def first_n(n):
   2     '''Build and return a list'''
   3     num, nums = 0, []
   4     while num < n:
   5         nums.append(num)
   6         num += 1
   7     return nums
   8 
   9 
  10 sum_of_first_n = sum(first_n(1000000))
```

- The code is quite simple and straightforward, but it builds the full list in memory. This is clearly not acceptable in our case, because we cannot afford to keep all n "10 megabyte" integers in memory.

So, we resort to the generator pattern. The following implements generator as an iterable object.


```
   1 # Using the generator pattern (an iterable)
   2 class first_n(object):
   3 
   4 
   5     def __init__(self, n):
   6         self.n = n
   7         self.num = 0
   8 
   9 
  10     def __iter__(self):
  11         return self
  12 
  13 
  14     # Python 3 compatibility
  15     def __next__(self):
  16         return self.next()
  17 
  18 
  19     def next(self):
  20         if self.num < self.n:
  21             cur, self.num = self.num, self.num+1
  22             return cur
  23         raise StopIteration()
  24 
  25 
  26 sum_of_first_n = sum(first_n(1000000))
```


#### This will perform as we expect, but we have the following issues:

- there is a lot of boilerplate
- the logic has to be expressed in a somewhat convoluted way
#### Furthermore, this is a pattern that we will use over and over for many similar constructs. Imagine writing all that just to get an iterator.


##### Resources:

- [Generator](https://wiki.python.org/moin/Generators)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)
