# **Function/ Block/ Global Scope**



When we discuss scope, we are referring to the visibility of variables in the current context of execution.



**<u>Execution Contexts</u>** 

Discussing execution contexts is important when understanding scope. 

There are two execution contexts in JavaScript: Global (GEC) and Function (FEC). 

The GEC is the default context created when the program begins to run.  It is at the bottom of the execution stack. 

A FEC is created whenever a function is called, so there can be many FEC's throughout the program.

Digging deeper.. the execution context is comprised of two elements, or phases: memory allocation, or creation, and code execution. 

In the creation phase, Javascript creates the execution context by storing all function declarations (in their entirety) and declared variables within that context in a memory heap.  Variables declared with the `var` keyword, including function expressions assigned to variables, are initialized to `undefined`.  Variables declared with `let` or `const` do not have default initialization.  

During this process, these declarations get hoisted to the top of their scope.  The body is included in the function, which is why functions can be called and variables declared with `var` can be referenced before they are declared.  Note that variables declared with `let` and `const` do not have a default initialization and therefor are in a temporal dead zone if referenced prior to their declaration. 

The execution phase is where variables are initialized and the code is executed.  The GEC is always executed, whereas the FEC is executed upon invocation.



**<u>Lexical Scoping</u>**

- So before the code is even executed, JavaScript already knows which variables are in scope within that context.  

- Javascript has global and local scope, which can be either block or function scope.

  - But wait, didn't we say that there were only two execution contexts? Because no function is called when a block executes, the execution context remains the same.  How then does JavaScript implement block scope?
    - If a variable is declared within a block using the `let` or `const` keywords, those variable do not get declared during the creation phase.  When execution reaches the block, a new lexical environment is created and those variables are declared.  These variables are said to have block scope and, when declared within the block, are inaccessible in the outer scope.
    - Variables declared with `var` are said to be function scoped.  If a variable is declared with `var` within a block, it can be accessed outside of the block, but this is not the case when defined within a function.  Variables declared with `var`, `let`, and `const` within a function become local variables to that function and are created upon invocation and destroyed after completion. They cannot be accessed from the outer scope. 
    - Variables declared with `let` or `const` outside a function or block, and `var` outside a function are said to have global scope. They are accessible from anywhere within the program.

  - When Javascript is resolving a variable, it first looks in the current scope. If it is not found, it will traverse the scope chain (moving up the hierachy) until it finds the variable. Child scopes have access to parent scopes (not vise-versa) and will move up the chain all the way to the global scope until the variable is resolved.  
  - If the variable is not found, JavaScript will throw a `Reference Error`, or create a new global variable (more precisely creates a property of the global object) if assigned to a value.  Once it is found, Javascript will stop searching. This is why lower- scoped variables can shadow higher- scoped variables with the same name. 
    - This way of determining scope is called lexical, or static, scoping. We are able to determine the scope of variables and functions without ever executing the code.  Lexical Scope is determined by the structure of the code, or the way it is written.

- Limiting scope, by declaring variables and creating functions, lessens the risk that variables will be accessed and changed accidently, and also reduces naming conflicts.  



**<u>Extra</u>**

These are a number of ways to create a variable in the current scope:

- Use the `let` or `const` keywords.

- Use the `var` keyword

- Define parameters for a function - each parameter is a local variable.

  - ```js
    function greetPeople(greetingMessage) {
      console.log(greetingMessage);
    }
    
    greetPeople("Good Morning!");
    ```

  - The `greetingMessage` parameter acts like a local variable. It *is*, in fact, a local variable. The chief difference is that we initialize it from the argument passed to the function. Parameters have local scope within a function.



**<u>Closures</u>**

"the combination of a function and the lexical environment within which that function was [defined]."

- When a function is created, a closure is created.  A closure can be thought of as an envelope attached to the function object that gets created to store relevant information.

- Closures' usefulness can be highlighted when using nested functions.  If we declare a function within another function, the inner function creates a closure which encloses it's lexical environment at time of creation. By lexical, I mean that where it is invoked is unimportant. Closures are created based on where the function is defined. 

- This means that regardless of if the variables are in scope at the time of execution, the function can still access them if they were in scope at the time of definition. The closure will only form around variable that the function needs.

- A code example works best to illustrate:

- ```js
  function example() {
    let name = 'closure';
    function createsClosure() {
      console.log(name);
    }
    return createsClosure;
  }
  
  let innerFunc = example();
  innerFunc();  //'closure'
  ```

- Here we can see that the function `createsClosure` is returned from the function invocation of `example`.  Although the global scope does not have access to the `name` local variable within the `example` function, the `createsClosure` function created a closure which allows it to access it's lexical scope at time of creation.  To reiterate, the closure ensures that the function has access to all the variables in the enclosing scope at time of creation, not execution.  Even more, the variable's values are dynamically resolved, and not fixed to what they were at time of creation. 

  

**Hoisting**

Hoisting is best explained in terms of execution context.  When a script runs, JavaScript begins by creating the Global Exectution Context.  Within this context, there are two phases: the creation phase and the execution phase.  The creation phase works to identify all declared variables and function declarations in scope.  It then hoists (lifts) all function declarations, in their entirety, and variable declarations to the top of their scope. If a function is invoked, a function execution context is created and during that creation phase, the same behavior occurs.  Declared variables and function declarations are stored in memory and hoisted to the top of their current scope. 

So before execution of code in the current execution context, JavaScript has made sure to find all variable declarations, determine their scope, and hoist them to the top of their scope.  Function bodies are hoisted with their name, which allows for function invocation prior to function definition.  Variable declarations, on the other hand, are hoisted without their assignment operation.

Variables declared with the `var` keyword are hoisted and initialized to `undefined ` and will not throw an error if referenced prior to being defined.  Variables declared with the `let` and `const` keywords are hoisted, but are left in an 'unset' state, or in a temporal dead zone. Because of this, a Reference Error will occur if you attempt to access it before it is defined. 

ex/

- `var`

  - ```javascript
    console.log(greeting);
    
    var greeting = 'Hello world!';
    
    //becomes
    
    var greeting;
    
    console.log(greeting);
    
    greeting = 'Hello world!'
    ```

    **NOT MY WORDS**

    All variables in JavaScript declared with `var` are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one: When a `var` variable is declared but not assigned a value, like on line 1, it is initialized to the value `undefined`. For that reason, the code logs `undefined` to the console.

    On line 3, the program initializes the variable `greeting` to a value of `hello world`. Dissecting this, there are actually two things happening here: (1) the variable `greeting` is declared and, (2) `greeting` is assigned a value of `hello world`.

    



- **<u>Should you bring up closures?</u>**

  - A rule of thumb to identify a closure: if inside a function you see an  alien variable (not defined inside that function), most likely that  function is a closure because the alien variable is captured.

  - !!!NOT MY WORDS!!!

  - A closure captures variables from the lexical scope

  - ```js
    //closures dynamic value example
    let startingBalance = 1;
    const chicken = 5;
    const chickenQuantity = 7;
    
    function totalPayable(item, quantity) {
      return startingBalance + (item * quantity);
    }
    
    startingBalance = 5;
    console.log(totalPayable(chicken, chickenQuantity));
    
    startingBalance = 10;
    console.log(totalPayable(chicken, chickenQuantity));
    ```

  - ```js
    function makeDoubler(caller) {
      return number => {
        console.log(`This function was called by ${caller}.`);
        return number + number;
      };
    }
    
    const doubler = makeDoubler('Victor');
    doubler(5);                             // returns 10
    // logs:
    // This function was called by Victor.
    ```

  - This solution leverages that functions in JavaScript are first-class objects. It satisfies the requirement that `makeDoubler` must take a `caller` name and it returns a variation of the `doubler` function.  Notice that the returned anonymous function expression assigned to the `doubler` variable still retains access to the `caller` variable in its closure, even after the `makeDoubler` function returns.

  

  

  

  *<u>**Example of lexical scope**</u>* 

  - Bring up lexical scope if there is a lookup path or how it resolves variables 

  - ```js
    var myVar = 'This is global';
    
    function someFunction() {
      var myVar = 'This is local';
    }
    
    someFunction();
    console.log(myVar);
    ```

    !!!!!NOT MY WORDS!!!!!

  - JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. This program declares a variable named `myVar` in two places. The first is outside of any function, giving the first `myVar` a *global* scope. The second place is inside of `someFunction`. Functions in JavaScript create a new scope — a scope that is *"local"* to the function. This local scope is also referred to as an "inner" scope in relation to the global "outer" scope.

    On line 8, `console.log(myVar)` logs `"This is global"` because the two `myVar` variables, on lines 1 and 4, belong to different scopes. `someFunction` has its own local "inner" scope, so the `myVar` declaration within the function has no effect on the global "outer" scope.

    


  

  

  1. **Variable Shadowing**

     ```javascript
     let a = 7;
     
     function myValue(a) {
       a += 10;
     }
     
     myValue(a);
     console.log(a);
     ```

     When this script is run, a global execution context is created.  The variable `a` is declared and function`myValue()` is stored in memory.  The function declaration creates a variable in the current scope with the same name as the function. When execution begins, `a` in the global scope is initialized to `7`.  

     We invoke the `myValue` function and pass in the argument `a` on line 7. The global variable `a` is in scope and `a` evaluates to `7`. A new function execution context is then created.  

     During the creation phase in the FEC, a new local variable with the same name as the parameter is created and is only accesible from within the function, aka function scoped. 

     During execution within the function execution context, the local variable `a` is initialized to the value passed in by the argument.  

     This local variable `a` is then reassigned to the return value of the expression `7+10`.  The function returns `undefined`.  Control is then back to the execution context where the function was invoked, in this case the GEC.

     Why did `a` resolve within the function? This is because JavaScript looks first in the current scope to find a variable.  Only if it can't find it, does it traverse the scope chain.  Because there was a local variable `a` created in the function, the variable was resolved and the outer variable `a` was shadowed.  This variable shadowing resulted in the global variable `a` being unaffected by the reassignement on line 4.

     The method `console.log` on line 8 is invoked and `a` is passed as an argument. The variable resolves within it's current scope (global) to `7` .  This is logged to the console and `undefined` is returned. 

     

     

