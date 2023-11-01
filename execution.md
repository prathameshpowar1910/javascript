## JavaScript Execution Contexts

An execution context is an abstract concept that defines the environment in which JavaScript code is executed. It consists of three components:

1. **Variable Environment**: This is where the variables declared within a function are stored. It also contains any function declarations within the current scope.

2. **Lexical Environment**: Here, you'll find the variables declared outside of a function, and it also contains any variables declared within the current scope.

3. **This Binding**: The "this" binding refers to the value of the "this" keyword within the current scope.

When a function is called, a new execution context is created and pushed onto the call stack. The call stack is a data structure that keeps track of the order in which functions are called. The function at the top of the call stack is the one currently being executed.

Once a function finishes executing, its execution context is popped off the call stack, and control is returned to the function that called it.

Understanding how execution contexts and the call stack work in JavaScript is crucial for debugging your code and avoiding errors. For instance, if you have a function that calls itself recursively, you can quickly run into a "stack overflow" error if you're not careful.

**There are 2 main types of execution contexts:**
1. *Global Execution Context*: This is the default execution context. It's created when your code is executed outside of any function. The global execution context is associated with the global object, which is the "window" object in the browser and the "global" object in Node.js.
2. *Function Execution Context*: This is created when your code is executed inside a function. Each function has its own execution context, and when a function is called, a new execution context is created and pushed onto the call stack.


There are 2 phases in which it runs :
1. **Memory Creation Phase** : In this phase, the execution context is created, and the scope chain is set up. The scope chain determines which variables are accessible within the current scope. The scope chain is created by going up the lexical environment and adding each variable to the scope chain until it reaches the global execution context. The "this" keyword is also set up in this phase.
2. **Code Execution Phase** : In this phase, the code is executed line by line. When a function is called, a new execution context is created and pushed onto the call stack. Once the function finishes executing, its execution context is popped off the call stack, and control is returned to the function that called it.

*******Example*******:

```jsx
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
	let total = num1 + num2
	return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
```

1. Global Execution Context
    - All the global variables are set eg. `this`,`window` object in browser and `global` object in node.
2. Memory Phase
    - Here the memory is assigned to all the variables.
    - this is the first cycle
    - `val1` → undefined
    - `val2` → undefined
    - `addNum` → definition
    - `result1` → undefined
    - `result2` → undefined
3. Execution Phase
    - Here the execution of the code is done.
    - `val1` → 10
    - `val2` → 5
    - `addNum` → creates its own ***executional context*** where a ***new variable environment*** and ***execution thread*** is made
    - `result1` → undefined
    - `result2` → undefined