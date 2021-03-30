
## Refactoring
### Refactoring is the process of changing a software system in such a way that it not alter the external behaviour of the code yet improves its internal structure It's a process of clean up to minimize the chances to introduces bugs. Refactoring means improve the code design.

![](https://miro.medium.com/max/600/1*hCNsTJKWrkRqagNgy07kFA.jpeg)
## Pure Function:
#### It returns the same result if given the same arguments (it is also referred as deterministic).
### Pure functions benefits:
#### They're easier to reason about and debug because they don't depend on mutable state.
#### The return value can be cached or "memoized" to avoid recomputing it in the future.
#### They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.


## Immutability:
#### When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.

#### Functions as first-class entities can:
#### -refer to it from constants and variables
#### -pass it as a parameter to other functions
#### -return it as result from other functions.



