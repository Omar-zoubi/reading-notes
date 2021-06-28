### Conditional Rendering
- In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

- Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
#### Element Variables :
- You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

### Inline If with Logical && Operator

- You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element

- It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

- Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

- Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression.
Forms
- HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. 

####  Composition vs Inheritance
React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
#### Containment
Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
#### Inheritance
- At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
##### Resources:

- [React]https://reactjs.org/docs/conditional-rendering.html)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)