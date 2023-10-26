20 questions/ 3 hours/ 9 min a question

Typically, we are interested in the return value of an expression,  whether there are side effects, whether new objects are created, or  whether something is being output. Be precise, be succinct, and explain  with the highest level of clarity you can.



-   On one level, the question will test your ability to parse code  and to describe it with precision, or test your knowledge of some  specific syntactical aspect or language-specific feature of the  JavaScript programming language.
-   On another level, the question will check your understanding of  some deeper underlying principle; this might be some more fundamental  aspect of the JavaScript language or a non-language-specific programming concept.

When answering the questions, you should:

-   Explain your reasoning with reference to specific lines in the  program. You can use line numbers to refer to particular lines of code  where necessary.
-   Answer with extreme precision. For example, say "function  definition" or "function invocation" as opposed to just "function" (see  the section on *Precision of Language* below for more on this).
-   Highlight any specific syntactical conventions or technical observations where relevant.
-   Identify the fundamental concept or concepts demonstrated by the question.

In programming, we're always concerned with the output and the return  value, as well as any object mutation. We need to speak in those terms,  and not use vague words like "results." 







- **Assignments and Comparison**

  - See comparison rules

  - *Objects*

    - ```js
      const person = { name: 'Victor' };
      const otherPerson = person;
      
      console.log(person === otherPerson);    // true
      ```

    - In JavaScript, every object literal creates a new object. When this object is assigned to a variable, a **reference** to the object is stored in that variable. In the example above, the only way to ensure that the two variables compare equally is to have them reference the same object.

      -  Referential equality is useful when you'd like to compare object references, rather than their content.

- **Variables** 

  - Unless mentioned specifically, we use the term **variable** in the broadest sense possible. On this exam, that means that all of the following should be treated as variables:

    -   Variables declared with `let` or `const`
    -   Function parameters
    -   Function names

    Note in particular that object property names **are not** variables.
    
    - `const` declared variables: 
      - Variables declared by `const` are block scoped, similar to variables declared by `let`, but their value cannot be changed through re-assignment. So when we try to re-assign `a` to a new value on line 4, we get an error.
      - What if a const variable hold a muttable value (array/object)?
        - The fact that `const` variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to `const` variables can be mutated.

- **Variable Scope, especially how variables interact with function definitions and blocks**

  - The accessibility of variables is managed by *scope*. You are free to access the variable defined within its scope-  the scope *isolates* variables.

    -  *Scopes can be nested*
    -  *The variables of the outer scope are accessible inside the inner scope*

  - When a variable is referenced, JavaScript will first look for a variable with the same name in the current scope, then keep moving up through subsequent outer scopes until the variable is found. If JavaScript reaches the outermost (global) scope without finding the variable, a `ReferenceError` will be raised in most situations, but this is not always the case, as you will see in the next exercise.

  - In JavaScript, every function or block creates a new variable scope. Let's examine what this means.

  - Should you bring up **closures**?

    - *The closure* is a function that accesses its lexical scope even executed outside of its lexical scope.  Simpler, the closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.

    - A rule of thumb to identify a closure: if inside a function you see an  alien variable (not defined inside that function), most likely that  function is a closure because the alien variable is captured.

    - A closure captures variables from the lexical scope

    - ```js
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

    - Closures are functions that *"retain access"* to variables defined in an *"enclosing scope"*. In the code above, the *enclosing scope* is the global (window) scope containing the variables `startingBalance`, `chicken`, and `chickenQuantity`. *Retaining access* means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the variable's value is dynamically looked up each time the function is called. Therefore, the value of `startingBalance` on line 6 is not `1`; instead, the value is a reference to the value stored in the `startingBalance` variable in the global scope.

      As a result of how closures work, the first time the `totalPayable` function is called, the value of `startingBalance` is `5`; the second time the function is called, the value of `startingBalance` is `10`.

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

  - Scope determines the accessibility of variables, objects, and functions from different parts of the code.

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

      - The `greetingMessage` parameter acts like a local variable. It *is*, in fact, a local variable. The chief difference is that we initialize  it from the argument passed to the function. Parameters have local scope within a function.

    - Every function definition creates a new local variable scope.  A function declaration creates a variable with the same name as the function. 

    - Every block creates a new local variable scope.

    - All variables in the same or surrounding scopes are visible inside functions and blocks.

    - Lexical scope uses the structure of the source code to determine the variable's scope. This means that the code doesn't have to be executed for the scope to exist.

  - JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy.

  - **Lexical Scope** (static scoping)

    - In simple terms, the lexical scope is **the scope of a variable or function based on where it is defined in the source code**. The scope is determined by the placement of variables and functions in the code, and it remains the same throughout the execution of the program.

    - Simpler, the lexical scoping means that inside the inner scope you can access variables of outer scopes.

      It's called *lexical* (or *static*) because the engine determines (at [lexing time](https://en.wikipedia.org/wiki/Lexical_analysis)) the nesting of scopes just by looking at the JavaScript source code, without executing it.

    - In a programming language, an item's lexical scope is the place in which it was created. The scope of the variable is determined by the [program's](https://www.techtarget.com/searchsoftwarequality/definition/program) textual (lexical) structure. Variables can be declared within a specific scope and are only accessible within that region.

    - In other words, lexical scope refers to the ability of a function scope  to access variables from the parent scope. When there is lexical scope,  the innermost, inner and outermost functions may access all variables  from their parent scopes all the way up to the global scope. However, no scope may access the variables from the functions defined inside it.  Thus, the child function is lexically bound to the parent function.

    - ```js
      function debugIt() {
        const status = 'debugging';
        function logger() {
          console.log(status);
        }
      
        logger();
      }
      
      debugIt();
      ```

    - This program declares a function `debugIt()`. When the program is run, the function is stored in memory in its entirety. The program then executes the function. When this happens a new execution context is created. During this creation phase, the function `logger()` is stored in memory and the variable `status` is declared. During execution of the code in the function, `status` is set to `debugging` and then the `logger()` function is called. This function has access to its outer scope, which would include the variable `status`, and so therefore logs `debugging` to the console.

      This illustrates the lexical scoping rules of JavaScript, where functions have access to variables and other functions that are created at the same level in the scope chain, as well as all resources further up the scope chain.

      One could outline the program execution as follows:

      - creation phase, global context

        - store `debugIt()` function in memory

      - execution phase, global context

        - execute the code top to bottom, which will call the `debugIt()` function

      - creation phase,

        ```
        debugIt()
        ```

        function context

        - store function `logger()` in memory
        - declare variable `status`

      - execution phase,

        ```
        debugIt()
        ```

        function context

        - assign variable `status` to `debugging`
        - call function `logger()`

      - creation phase

        ```
        logger()
        ```

        function

        - there is nothing to hoist or declare

      - execution phase,

        ```
        logger()
        ```

        function

        ```js
        log debugging to the console
        ```

        

    - Javascript uses lexical scope to determine where it looks for a variable.  The source code defines the scope.  When you write a function it creates a scope even if the function never gets executed and has no variables of its own. There is a hierachy of scopes from the local scope of the code up to the program's global scope. 

    - Javascript searched this hierachy from the bottom to the top when trying to find a variable. When it finds the variable, it stops and returns it.  This means that a lower scope variable can *shadow* or hide a variable with the same name in a higher scope.

    - ```js
      var myVar = 'This is global';
      
      function someFunction() {
        var myVar = 'This is local';
      }
      
      someFunction();
      console.log(myVar);
      ```

    - JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. This program declares a variable named `myVar` in two places. The first is outside of any function, giving the first `myVar` a *global* scope. The second place is inside of `someFunction`. Functions in JavaScript create a new scope — a scope that is *"local"* to the function. This local scope is also referred to as an "inner" scope in relation to the global "outer" scope.

      On line 8, `console.log(myVar)` logs `"This is global"` because the two `myVar` variables, on lines 1 and 4, belong to different scopes. `someFunction` has its own local "inner" scope, so the `myVar` declaration within the function has no effect on the global "outer" scope.

    - Variable scoping rules apply to both assignment and referencing equally. This code: checks the current scope and then each higher scope, looking for a variable with the name `country`. JavaScript sets the first `country` variable it finds to `"Liechtenstein"`. 

      - ```js
        let country = 'Spain';
        function update() {
          country = 'Liechtenstein';
        }
        
        console.log(country);  // logs: Spain
        
        update();
        console.log(country);  // logs: Liechtenstein
        ```

      - If JavaScript can't find a matching variable, **it creates a new global variable instead**. This is rarely what you want; it can be the source of subtle bugs.

        -  When there is no variable declaration: As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds `myVar` to be a "property" of the *global* object. This is "almost" the same as if `myVar` was globally declared. We will discuss more about why this is "almost"—but not "exactly"—the same in a later course when we cover the global / `window` object.

      - ```js
        // no other code above
        function assign() {
          let country1 = 'Liechtenstein';
          country2 = 'Spain'; //bc you didnt use `let`!! crazy
        }
        
        assign();
        console.log(country2);   // logs: Spain
        console.log(country1);   // gets ReferenceError
        // no other code below
        ```

        -  In the above code, `country2` isn't declared anywhere else in the code and it is assigned a value inside the function. Since JavaScript couldn't find a matching variable, it created a new "global" variable and as such it makes it possible to log its value on line 8.
        -  Moreover, similar to the earlier code in the adding variables to the current scope section, `country2` is in the global scope because of the way the source code is written and not because of the scope in which the `assign` function was invoked.

    - ```js
      function lunch() {    // A function declaration creates a new variable scope
        let food = 'taco';  // 1. Add a new variable food within the current variable scope
      }
      
      function eat(food) {  // 2. Parameters create variables during function invocation
        console.log('I am eating ' + food);
      } //Given lexical scoping rules, its scope is the eat function because of the way the source code is written, not because the function gets invoked. 
      
      function drink() {    // 3. Add a new variable drink within the global variable scope
        console.log('I am drinking a glass of water');
      }
      ```

  - Creating a variable in JS is called declaring a variable. After declaration it is empty/ has no value 

    -  **A declared variable but not yet assigned with a value (uninitialized) is undefined** . myVariable is declared and not yet assigned with a value. Accessing the variable evaluates to undefined 

  - Variables declared with the `let` and `const` keyword are block scoped (say "the variable `a` declared in the `let` statement". This means that when we declare the variable `myValue` within a block on line 2, that variable is not accessible outside of the block on line 5, and a `ReferenceError` is raised.

  - Variables declared with `var` keyword are function scoped 

  - Undeclared variables are always global. 

    -  If you assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable.

  - Declared variables are created before any code is executed. Undeclared variables **do not exist until the code assigning to them is executed**. 

    -  Limit Variable Scope - Global variables can be helpful in some scenarios, e.g.,  application-wide configuration. However, most developers discourage  their use since they often lead to bugs. In general, you should limit  the scope of your variables as much as possible; smaller scopes limit  the risk that an outer scope might misuse the variable.

  - Variables declared in an outer scope can be accessed in any inner scope.

  - global scope can be called "very top level of our code and is accessible from everywhere in our code"

    1. **Variable Shadowing**

       ```javascript
       let a = 7;
       
       function myValue(a) {
         a += 10;
       }
       
       myValue(a);
       console.log(a);
       ```

       If a function definition has a parameter with the same name as a variable from an outer scope, the parameter shadows the outer variable.  In JavaScript, when an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function.  The parameter `a` of `myValue` shadows the variable `a` declared on line 1. Therefore, there are two variables named `a` that exist in this program: one in the global scope and the other in the function's local scope. Therefore, the reassignment of the local variable `a` within the function has no effect on the global variable `a`.

- **Function/ Block/ Global Scope**

  - Scope determines the accessibility (visibility) of variables.

    JavaScript has 3 types of scope:

    - <u>Block scope</u>

      - Variables declared with`let`, `const` keywords
      - Variables declared inside a { } block cannot be accessed from outside the block:

    - <u>Function scope</u>'

      -  Each function creates a new scope.

      - Variables declared within a JavaScript function, become **LOCAL** to the function. 

        - Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

          They all have **Function Scope**:

      - Local variables have **Function Scope**:

        They can only be accessed from within the function.

      - Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

        Local variables are created when a function starts, and deleted when the function is completed

    - <u>Global scope</u>

      - A variable declared outside a function, becomes **GLOBAL**.
      - A global variable has **Global Scope**:
      - **Global** variables can be accessed from anywhere in a JavaScript program.
        - Variables declared with `var`, `let` and `const` are quite similar when declared outside a block. They all have global scope
        - Global variables can be accessed from anywhere, even within the function. It can even be reassigned within the function.

- **Hoisting**

  - Knowing this, we can now define hoisting. The JavaScript interpreter doesn't "immediately" execute all of a program's code line by line. (Recall from the previous exercise that **hoisting** is the process of finding and associating variable declarations with their respective scope—prior to the execution of all other code) Instead, it first goes over the code to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope. The assignment operation, however, is not hoisted.

  - In addition to variable declarations, the JavaScript interpreter also hoists function declarations. However, in contrast to how only the name of a variable is hoisted, with function declarations everything is hoisted, including both the function name and body. This means that the program can execute a function even before declaring it.

  - `var`

    - ```javascript
      console.log(greeting);
      
      var greeting = 'Hello world!';
      
      //becomes
      
      var greeting;
      
      console.log(greeting);
      
      greeting = 'Hello world!'
      ```

      All variables in JavaScript declared with `var` are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one: When a `var` variable is declared but not assigned a value, like on line 1, it is initialized to the value `undefined`. For that reason, the code logs `undefined` to the console.

      On line 3, the program initializes the variable `greeting` to a value of `hello world`. Dissecting this, there are actually two things happening here: (1) the variable `greeting` is declared and, (2) `greeting` is assigned a value of `hello world`.

      - You can also have `var` used twice and it wont throw an error

      - ```js
        var a = 8
        var a = 5
        
        console.log(a) //5
        ```

  - `let` and `const`

    - ```javascript
      console.log(greeting);
      
      let greeting = 'Hello world!';
      
      //ReferenceError: Cannot access 'greeting' before initialization
      ```

    - The error messages are different when you try to access a variable that is not defined and when trying to access one BEFORE being defined...

    - This is where the **Temporal Dead Zone**(TDZ) comes in!

      - When a `var` variable is hoisted, JavaScript gives it an initial value of `undefined`.

      - When `let` and `const` variables are hoisted, they are not given an initial value at all. Instead, they are left in an "unset" state; that is, they are "not defined". Don't say "undefined", though - that's confusing.

    - `SyntaxError: Identifier 'a' has already been declared` if you try to declare using another keyword 





- **Primitive Values, Types and Type Conversions/Coercions**

  JavaScript represents them directly at the lowest level of the language implementation. 

  Use `typeof` to figure out what it is.. this will return a string 

  This solution takes advantage of the fact that JavaScript automatically coerces primitives to objects when needed.

  ​		- ex/ Notice how `string1` and `string2` can both use the `.length` property, even though they both reference string primitive values and not String objects. It's as if both values were created using the `new String()` function (i.e., `new String('abc')`).

  - <u>String</u>

  - <u>Number</u>

    -  JavaScript uses a floating point system to represent all numbers

  - <u>NaN</u> (considered a number)

  - <u>Undefined</u>

    -  When a variable is not defined, its value is given by `undefined`. We can describe `undefined` as representing the absence of a value. We can also explicitly use the literal `undefined`.

  - <u>Null</u>

    -  `null` is similar to `undefined`: it represents the intentional absence of a value. Often, `null` represents emptiness or nothing. The chief difference between `null` and `undefined` is that you must use `null` explicitly if you want to use it; `undefined` can arise implicitly. returns `object` with `typeof` which is wrong

  - <u>Boolean</u>

    -  Boolean values have a starring role when working with comparison operators. 
    -  Boolean values represent an "on" or "off" state.

  - <u>Symbols (ES6)</u>

  - <u>Big integers (ES9)</u>

    ```js
    'Hello, world!'     // string literal
    3.141592            // numeric literal
    true                // boolean literal
    { a: 1, b: 2 }      // object literal
    [ 1, 2, 3 ]         // array literal
    undefined           // undefined litera
    ```

    

- **Object Properties and Mutation**

  - To define a new object property (or to re-assign the value of an existing property), we can again use either dot notation or bracket notation, together with simple assignment syntax to set the desired value.

  - A property value can be any valid expression, including a function expression. When the value is a function and it is invoked with an explicit caller, as seen on line 13 of the original code, it is called *method*invocation. 

  - when we use bracket notation to assign or access an object property, the expression inside the brackets must be a string value; if it is not, JavaScript will convert it into one.

  - Object property names are always strings. When we omit quotes around our property names, JavaScript implicitly converts the name to a string. So `true` is not a property defined on `obj`, but `'true'` is. You can check this for example as follows:

    

- **Understand the Differences Between Loose and Strict Equality**

  - There is an important distinction here is between what is known as the *abstract equality operator* (`==`) and the *strict equality operator* (`===`). While both operators compare for equality and return a boolean, there is an important difference in the way they behave: When comparing for strict equality using `===`, the values are compared as-is. Values of different types will be considered unequal.

  - When using abstract equality, however, JavaScript will try to convert our values into a like type before performing the comparison.

  - We recommend using the strict equality operator (`===`) whenever possible to avoid confusing behavior and hard-to-find bugs.

    

- **How Passing an Argument into a Function may or may not Permanently Change the Value that a Variable Contains or Points to**

  - <u>Mutation (only for objects):</u> Methods and functions can mutate

    -  When a method permanently mutates the object that invokes the method 
    -  Does not preserve the previous value of the object
    -  Change the value of the thing that is bound to the variable 
    -  Changes the value that is actually stored in the memory that the name  refers to
    -  After mutating the value assigned to a variable, the variable continues to refer to the same place in memory.

  - <u>Non- mutating functions</u>

    - ```js
      function addToArray(array) {
        return array.concat(10);
      }
      
      let oneToFive = [1, 2, 3, 4, 5];
      console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
      console.log(oneToFive);             // => [1, 2, 3, 4, 5]
      ```

    - Makes a copy and mutates that copy

  - <u>Reassignment</u> 

    - Change what value is assigned or bound to a variable 

    - Makes that name (variable) refer to a completely different place in memory 

    - Changing the *binding* of a variable - that is, the value that is *bound* to the variable

    - ```js
      let num = 3;              // A variable assigned to a primitive value
      let arr = [1, 2, 3];      // A variable assigned to an array
      let obj = { a: 1, b: 2 }; // A variable assigned to an object
      
      num = 42;    // Reassignment
      arr[1] = 42; // Reassignment of array element, but NOT the variable
                   // The array referenced by arr is mutated!
      obj.a = 42;  // Reassignment of object property, but NOT the variable
                   // The object referenced by obj is mutated.
      
      // You can still reassign the variables
      arr = 42;                 // Reassignment; array is lost
      obj = { b: 1, c: 2 }      // Reassignment: now refers to a different object
      ```

  - Parameters are the names assigned to a function's arguments; arguments are the values that get passed to the function.

  - Variables are not passed to or returned by functions: **values** or **references** are passed.

  - Truthiness vs Boolean values (see above)

  - Before diving into javascript pass by reference or pass by value functions, it is important to understand the difference between primitives and objects.

  - These are the most basic values one can think of, which includes, undefined, null, boolean, string, and numbers. Primitive values are passed by value in javascript

    Whereas all objects (including functions) are passed by reference in javascript.

    - **Javascript always pass by value** so changing the value of the variable never changes the underlying primitive (String or number).  However, when a variable refers to an object which includes array, the value is the reference to the object.
    - In Pass by Reference, a function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affects the variable passed from outside the function. In Javascript objects and arrays are passed by reference.
    - In javascript pass by value, the function is called by directly passing the value of the variable as the argument. Therefore, even changing the argument inside the function doesn’t affect the variable passed from outside the function.
    - On comparing both functions, namely javascript pass by reference, pass by value, we can see that ALL objects interact by reference in Javascript, so when setting equal to each other or passing to a function they all point to the same location so when you change one object you change them all. This is a stark difference compared to pass by value, wherein the pass by value function copies the value into two separate spots in memory effectively making them entirely separate entities despite one initially being set equal to the other.

- **Working with Strings, Arrays, and Objects. In particular, you  should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.**

  -  Be aware if you have a nested array, or a two dimensional array
  -  An array property with a key of anything other than a non-negative integer is not counted as part of the array's `length`. 
  -  JavaScript arrays have several methods that iterate over the elements:



 - `forEach` :

   - ```js
     ```

   - 

​	

-  **Understand that arrays are objects, and be able to determine whether you have an Array**
  -  Recall that [Arrays are implemented with Objects](https://launchschool.com/lessons/79b41804/assignments/5dc08268) internally in JavaScript. One thing that differentiates the two is that arrays have a `length` property, while objects do not. Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra `length` property that keeps track of how many such key-value pairs exist in the object.
  -  Adding non index keys creates properties of the array object, not new elements
  -  The `length` property can be explicitly set (recall that arrays are zero-indexed). Setting the `length` to a value that is less than the current `length` truncates the array; re-setting the `length` to a higher value does not bring back the truncated elements. Setting the `length` to a value greater than the current `length` creates 'empty slots' (sparce arrays) in the array, but the number of actual elements does not increase.
  -  Accessing these elements by index value returns `undefined`, but certain operations like `Array.prototype.forEach` ignore those missing elements. That leads to the question of whether  the missing elements are really part of the array. We can think about  this array as either a 3-element array whose values are missing, or as  an empty array whose length is 3. Which you choose depends on the  context.
  -  For most purposes, the elements of a JavaScript array are accessed by an index value, a non-negative integer (0, 1, 2, ...). However, arrays are also objects, which means they can have properties whose name is not a  non-negative integer. For instance, it is possible to define a property  whose key is `"-1"` or `"foo"` on an array, and you can access its value using an index-like syntax: `array[-1]` or `array["foo"]`. As with missing elements, that raises the question of whether these  properties are, in fact, array elements. Again, the answer is  context-dependent. There may be times, for instance, when you want to  treat the `-1` and `"foo"` (but maybe not both) properties as elements, but often you won't.



- **[variables as pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)**

  - Developers sometimes talk about **references** instead of pointers

  - You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are  references. 

  - Every  time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive  values, the variable's actual value gets stored in this allocated  memory.

  - **Primitive**

    - Different than Ruby.... when primitive values are stored they are stored to different memory addresses and reassignement just changes the value in that space..it doesnt point to a new space

      -   Primitive values are **immutable**. That means their values never change; operations on immutable values always return new values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

    - However, since primitive values are stored in the memory address allocated for the variable, they can never be aliases for each other. If you give one variable a new primitive value, it doesn't affect the  other. (JavaScript stores primitive values in variables)

    - **Pass by Value**

      - The concept of "pass-by-value" traditionally means that when you use a variable to pass an argument to a function, the function can't do anything that sets the original variable to a different value. No matter what happens in the function, the variable will still contain the same value that was passed to the function.  The main underlying concept is the the way in which variables, including function parameters, act as pointers. 

      - ```js
        let word = 'Hello';
        
        function myFunc(param) {
          param = 'Goodbye';
        }
        
        myFunc(word);
        console.log(word); // 'Hello'
        ```

    - | Code        | address `a` | `a`  | address `b` | `b`  |
      | :---------- | :---------: | :--: | :---------: | :--: |
      | `let a = 5` |   `0x14`    | `5`  |             |      |
      | `let b = a` |   `0x14`    | `5`  |   `0x76`    | `5`  |
      | `a = 8`     |   `0x14`    | `8`  |   `0x76`    | `5`  |

    

  - **Objects**

    -  *Objects and Non-Mutating Operations*

       - However, with objects, JavaScript doesn't store  the object's value in the same place. Instead, it allocates additional  memory for the object and places a pointer to the object in the  variable. Thus, we need to follow two pointers to get the value of our  object from its variable name. The process looks like this:
       - In this example, the variable `obj` is always at address `0x1234`. The value at that address is a pointer to the actual object. While the  pointer to the object can change -- we can see it change when `{ b: 2 }` is reassigned to `obj` -- `obj` itself always has the same address. 

    -  | Code             | Address `c` -> pointer(value) -> referenced object | addr `d` -> pointer -> object |
       | :--------------- | :------------------------------------------------: | :---------------------------: |
       | `let c = [1, 2]` |            `0x28` -> `0x34` -> `[1, 2]`            |                               |
       | `let d = c`      |            `0x28` -> `0x34` -> `[1, 2]`            | `0x68` -> `0x34` -> `[1, 2]`  |
       | `c = [3, 4]`     |            `0x28` -> `0x24` -> `[3, 4]`            | `0x68` -> `0x34` -> `[1, 2]`  |

    - ```javascript
      let array1 = [2, 6, 4];
      let array2 = [2, 6, 4];
      
      console.log(array1 === array2);  //false
      
      let array1 = [2, 6, 4];
      let array2 = array1;
      
      console.log(array1 === array2); // true
      ```

      Primitives, like strings or numbers, are compared by their value. Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the *same object*, i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

      - **Pass by Reference**

        - If JavaScript were purely pass-by-value, there wouldn't be any way for the function to change the original object. 

          1. When an operation within the function mutates its argument, it affects the original object.
          2. However, the matter is more complicated when using objects (arrays and plain objects for example). With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this *pass-by- value-of-the-reference* or *call-by-sharing*. Whatever you call it, the most important concept you should remember is: Functions and methods that mutate their callers are called destructive functions or methods.

        - ```js
          function changeMyWords(words) {
            console.log(words);
            words[0] = 'Hi';
          }
          
          let myWords = ['Hello', 'Goodbye'];
          changeMyWords(myWords);
          console.log(myWords);
          ```

          - This will log `['Hello', 'Goodbye']` and then `['Hi', 'Goodbye']` to the console.

            In this exercise, the `myWords` variable is initialized to an array containing two elements, the strings `'Hello'`and `'Goodbye'`. Because an array is a reference type rather than a primitive, when we pass `myWords` into the `changeMyWords` function invocation, this acts like *pass-by-reference*. The `myWords` variable and the `words`function parameter both point to the *same* array. When we initially log `words` on line 2 we see the same array elements from the array literal to which we initialized `myWords`. We then mutate the array on line 3 by assigning index `0` to the string `'Hi'`. When we subsequently log `myWords` on line 8, we see the mutated array.

      - **Mutating Methods**
        - Pointers have a curious effect when you assign a variable that  references an object to another variable. Instead of copying the object, JavaScript only copies the pointer. Thus, when we initialize `f` with `e`, we're making both `e` and `f` point to the same array: `[1, 2]`. It's not just the same value but the same array in the same memory  location. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both `e` and `f`.
        - Some developers call this aliasing: `e` and `f` are aliases for the same value. e = f
        - Change the value of the thing that is bound to the variable 
        - Changes the value that is actually stored in the memory that the name  refers to
        - After mutating the value assigned to a variable, the variable continues to refer to the same place in memory.

      **Shallow Copy**

  - As you might expect, the values for the `number` and `string` keys changed in `objCopy`, but not in `obj`. However, when we mutated the value of `objCopy.array`, it also mutated that value of `obj.array`. That's because a shallow copy only copies pointers for nested objects; since arrays are objects, the shallow copy just copied the pointer to the original array to `objCopy`. If you're wondering why this happens, you might want to review [Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers) section in the Introduction to JavaScript book.

- **console.log vs return**

  -  **console.** **log is function that logs passed in argument to console.** **return is keyword, which part of the return statement, used to end function execution**. Once line with it is executed, the function is exited and function returns whatever is defined in the return statement.
  -  In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term **log** is a synonym for printing or displaying something on the console.

- **truthiness: `false` and `true` vs. falsy and truthy**

  -  There are 8 falsy values in Javascript.  What does that mean? These values evaluate to false when used in a Boolean context
     - `false`    
     - `null`        You can use boolean function on these`Boolean(null)` //false
     - `undefined`. You can use double ! operator to coerce a truthy or falsy into a value's boolean equivalent  `!!(undefined)` // false
     - `0`
     - `NaN`
     - `''` or `""`
     - `-0` (negative zero)
     - `0n` (BigInt zero)

  - You can combine boolean and non-boolean values with logical operators `! (logical not),||,&&` or compare with comparison operators `==,===,>,<`

  - Search **comparison rules**

    

  -  Note that saying that a value evaluates to true or false is **not** the same as saying that those values **are** `true` or `false`, or that they are **equal to** `true` or `false`. These may seem like subtle distinctions, but they are important ones.
  -  Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
  -  Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
  -  Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
  -  Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.

- **Function definition and function invocation**

  -  

  | If you are...           | Then you should use... |
  | :---------------------- | :--------------------- |
  | **Defining** a function | *parameters*           |
  | **Invoking** a function | *arguments*            |

  

  - ```javascriptfunction greet(greeting = 'Hello') {
    function greet(greeting = 'Hello') {
      console.log(greeting + ', world!');
    }
    ```

    Default parameters are a great way to assign a default value to a parameter. This default value is used in case the parameter is `undefined`, which is the case if `greet` is called without an argument.

- **function declarations, function expressions, and arrow functions**

  - You often need to execute a piece of code repeatedly in a program. Instead of rewriting or copying the code, most programming languages let you build constructs called *procedures*; procedures let you extract the common code to one place and use the code from anywhere else in your program. In JavaScript, we use the term *functions* to refer to procedures.

  - Use arrow functions for callbacks.

  -  Use function declarations or function expressions for other functions, but choose one or the other as your primary choice.

  -  If you use function expressions, named function expressions are better for debugging purposes. They also help clarify the intent of those functions.

  - <u>*Declaration/ aka function statement*</u>

    -  A function declaration (sometimes called a "function statement") defines a variable (in this case, `hello`) whose type is `function`. It does not require assignment to a variable. The value of the function variable is the function itself. This "functional variable" obeys general scoping rules, and we can use it exactly like other JavaScript variables.
    -  A function defined using a function declaration must always have a name (it cannot be an anonymous function). In addition to creating a named function, a function declaration also creates a variable with the same name as that function's name.
    -  Function declarations are similar to variable declarations. Just as variable declarations must start with `let` or `const`, function declarations must start with `function`.
    -  One way to define functions is to declare them. A function declaration has the following structure:
       - The `function` keyword
       - The name of the function
       - A list of comma separated parameters
       - A block of statements (the function body)

  - <u>*Expression*</u>

    - A function expression defines a function as part of a larger expression syntax (typically a variable assignment).

    - We can define an anonymous function (one without a name) and assign it to the variable. We then use the variable to invoke the function.

      -  *"anonymous function assigned to `foo` returns.."*

    - We can also name function expressions, like this:

    - ```js
      let hello = function foo() {
        console.log(typeof foo);   // function
      };
      
      hello();
      
      foo();                       // Uncaught ReferenceError: foo is not defined                
      ```

    - However, the function's name, `foo`, is only available inside the function (i.e., it can only be used from within the function's local scope). With named function expressions, the name of the function is contained within its own scope (i.e., inside the variable `hello`).

      Although most function expressions use anonymous functions, named function expressions are useful for debugging. The debugger can show the function's name in the call stack, providing a valuable clue. Named function expressions can also be useful for recursive functions.

  - <u>*Arrow Function*</u>

    - think of arrow functions as a shorthand way to write a function expression.

    - ```js
      const multiply = (a, b) => {
        return a * b;
      };
      
      const multiply = (a, b) => return a * b;
      
      const multiply = (a, b) => a * b;
      ```

    - Arrow functions are most often used as **callback functions**

      - ```js
        [1, 2, 3].map((element) => 2 * element); // returns [2, 4, 6]
        ```

      - Arrow functions also have another use that makes them immensely popular: they inherit the "execution context" from the surrounding code. 

- **implicit return value of function invocations**

  - "If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`". This is a reason why functions are said to "have returned" rather than "finished execution". When we talk about closures in a later course this distinction will become more apparent. For now, just be mindful of the disambiguation between the `return` value (explicit or implicit) of a function and the statement that a *"function that has returned or returns"*.

    

- **first-class functions**

  - A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

    - **Callback function**

      -  The function that we pass as an argument to another function is called a *[callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)*. 

    - ```js
      //RETURNING A FUNCTION
      
      function sayHello() {
        return () => {
          console.log("Hello!");
        };
      }
      //In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.
      
      //A function that returns a function or takes other functions as arguments is called a higher-order function.
      
      
      function one() {
        function log(result) {
          console.log(result);
        }
      
        function anotherOne(...args) {
          let result = '';
          for (let i = 0; i < args.length; i += 1) {
            result += String.fromCharCode(args[i]);
          }
      
          log(result);
        }
      
        function anotherAnotherOne() {
          console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
          anotherOne(116, 111);
        }
      
        anotherAnotherOne();
        anotherOne(116, 104, 101);
        return anotherOne;
      }
      
      one()(77, 97, 116, 114, 105, 120, 33);
      
      //The trick to solving this problem is to follow the sequence of function calls. The call to the one function may look confusing, but it is actually just two successive function calls (because the one function returns the anotherOne function). Notice that when the anotherOne function is returned, it still has access to the log function that is declared in its enclosing scope (closure) inside the one function.
      ```

    - ```JS
      //PASSING A FUNCTION AS AN ARGUMENT
      
      function sayHello() {  
        return "Hello, ";
      }
      function greeting(helloMessage, name) {
        console.log(helloMessage() + name);
      }
      // Pass `sayHello` as an argument to `greeting` function
      greeting(sayHello, "JavaScript!"); //say hello is a calllback function
      // Hello, JavaScript!
      //We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.
      ```

    - ```js
      //ASSIGNING A FUNCTION TO A VARIABLE 
      
      const foo = () => {
        console.log("foobar");
      };
      foo(); // Invoke it using the variable
      // foobar
      //We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.
      
      //Note: Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. But it won't affect the way we invoke it.
      ```

  - When you pass a function as an argument to another function, that other  function can call the function represented by the argument. 

  - Just like functions, object literal methods must be *called* by appending parentheses (e.g., `person.firstName()`) in order to be executed. Functions are first-class objects, so referencing the function name without the parentheses would return the function itself, not the string representation:

    

- **partial function application**

  - Partial application starts with a function. We take this function and create a new one with one or more of its arguments already “set” or *partially applied*. It will reduce the number of parameters needed for our functions.

  - Partial application is the act of taking a function which takes multiple arguments, and “locking in” some of those arguments, producing a function which takes fewer arguments. 

  - Partial application is a technique in functional programming that allows you to create a new function with some of the arguments pre-filled. This can be useful when you want to reuse a function with the same arguments multiple times.

    

- **Side Effects**

  - Side effects is **something that makes our function impure by default**. Any asynchronous processes or working with things outside of Javascript are side effects.

  - A function call that performs any of the following actions is said to have side effects:

    1. It reassigns any non-local variable.
    2. It mutates the value of any object referenced by a non-local variable.
    3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.
    4. It raises an exception.
    5. It calls another function that has side effects.
       - If the function can have side effects when used as intended, then we say the function itself has side effects. In practice, functions that have side effects have them regardless of what arguments are passed in.
         - If a required argument is omitted, the function isn't being used as intended.
         - If you pass an array to a function that expects a number, the function isn't being used as intended.
         - If you call a function before you've done any required preparations (such as opening a connection to a remote server), the function isn't being used as intended.

    

    1. *Side effects from Reassignement*

       1. If the function reassigns any variable that is not declared inside the function, the function has a side effect. 

       2. ```javascript
          let number = 42;
          function incrementNumber() {
            number += 1; // side effect: number is defined in outer scope
          }
          ```

    2. *Side effects through Mutation*

       1. Mutation side effects are similar to reassignment side effects in that they require a variable that is declared outside the function. It's almost as easy to spot as reassignment, but not always. Suppose such a variable exists and references an object or an array. If the function mutates that object or array, then the function has a side effect.

       2. ```javascript
          let letters = ['a', 'b', 'c'];
          function removeLast() {
            letters.pop(); // side effect: alters the array referenced by letters
          }
          ```

       3. Or passed in as an argument

          1. ```javascript
             let letters = ['a', 'b', 'c'];
             function removeLast(array) {
               array.pop(); // side effect: alters the array referenced by letters
             }
             
             removeLast(letters);
             ```

       4. *Side effects through Input/Output*

          1. Reading from a file on the system's disk
          2. Writing to a file on the system's disk
          3. Reading input from the keyboard
          4. Writing to the console
             1. A `console.log()` causes a function to have side effects because it affects the state of an external code—that is, the `console` object's state.

          5. Accessing a database
          6. Updating the display on a web page
          7. Reading data from a form on a web page
          8. Sending data to a remote web site
          9. Receiving data from a remote web site
          10. Accessing system hardware such as:
              - The mouse, trackpad, or other pointing devices
              - The clock
              - The random number generator
              - The audio speakers
              - The camera

          ```javascript
          // This code may not work in a browser; use Node instead.
          let readLine = require("readline-sync");
          
          function getName() {
            let name = readLine.question("Enter your name: "); // side effect: output and input
            console.log(`Hello, ${name}!`); // side effect: output to console
          }
          
          
          let date = new Date(); // side effect: accesses the system clock
          let rand = Math.random(); // side effect: accessed random number generator
          ```

       5. *Side Effects Through Other Functions* (each of these functions propagates their side effects to the function that called it.)

          - One thing to note is that this type of side effect is only important when the invoked function has side effects that aren't local to the calling function

          - If the side effects can only be seen inside the calling function, then that side effect has no effect on whether the calling function has side effects. Consider this code:

          - ```javascript
            function insertNumberInOrder(arrayOfNumbers) {
              arrayOfNumbers = arrayOfNumbers.slice(); // creates a copy of an array
              arrayOfNumbers.push(arrayOfNumbers); // not a side effect since copy of array
              arrayOfNumbers.sort((a, b) => a - b); // sort has side effects within function
              return arrayOfNumbers; // function has no side effect
            }
            ```

            

          1. Suppose a function invokes another function, and that invoked function has a side effect that is visible outside of the calling function. In that case, the calling function also has a side effect.
          2. `console.log` has a side effect.
          3. `readline.question` has multiple side effects.
          4. `new Date()` has a side effect (it accesses the system clock).
          5. `Math.random()` has a side effect (it accesses the random number generator).

       - **MIXING SIDE EFFECTS AND RETURN VALUES**
         - most functions should return a useful value or they should have a side effect, but not both
         - By *useful value*, we mean that the function returns a value that has meaning to the calling code. For instance, a `sum` function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value is not returning a useful value.

    - **Pure Functions**
      - Have no side effects.- easy to test/isolate
      - As with side effects, it's common to speak of functions as being pure or impure. However, it's more correct to talk about whether a specific function **call** is pure or impure
      - Given the same set of arguments, the function always returns the same value during the function's lifetime. This rule implies that the return value of a pure function depends solely on its arguments.
      - If we execute `square(42)` one billion times, it will return the same value each time: `1764`. It returns a consistent result no matter what value we pass to it:
      - The consistent return value is possibly the most important feature of pure functions. The fact that the return value is dependent solely on the arguments implies that **nothing else in the program can influence the function during the function's lifetime**. A function's **lifetime** begins when the function is created. It ends when the function is destroyed.
        - Nested functions, for instance, have a lifetime that spans a single execution of the outer function. Furthermore, nested functions are created every time the outer function is invoked. Each instantiation of the nested function is separate. Even if the function looks identical, it can produce different results for each instantiation -- that does not change its status as a pure function.

    ```javascript
    const square = value => value * value;
    ```

    - A Pure Function is **a function (a block of code) that always returns the same result if the same arguments are passed**. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.

    - ```js
      let currentTotal;
      // lots of code omitted
      
      function addToTotal(a) {
        return currentTotal + a;
      }
      
      // lots of code omitted
      ```

    - It is not a pure function since it relies on a variable that isn't scoped locally to the function (`currentTotal`). Thus, even when called with the same argument as a previous invocation, the function may not return the same value.

    - Becomes a non-deterministic function

      Using external code in `addNumber()` makes it a non-deterministic function—as you can never determine its output by solely reading it.

      In other words, to be sure of `addNumber()`'s return value, you must consider other external factors—such as the current state of `oldDigit`.

      Therefore, `addNumber()` is not independent—it always has strings attached.

- **naming conventions (legal vs idiomatic)**

  - See *stylistic tips* in notes

    

- **Strict Mode vs. Sloppy Mode**

  - (Use of ESLint as a static code analyzer for JS)

  - JavaScript ES5 introduced **strict mode**, which is an optional mode that modifies the semantics of JavaScript and prevents certain kinds of errors and syntax.

    

  - What is strict mode? How does it differ from sloppy mode?

  - - Strict mode eliminates some **silent errors** that occur in sloppy mode by changing them to throw errors instead. Silent errors occur when a program does something that is unintended, but continues to run as though nothing is wrong. This can lead to incorrect results or errors much later in execution that are subsequently difficult to track down.
      - Strict mode prevents some code that can inhibit JavaScript's ability to optimize a program so that it runs faster.
      - Strict mode prohibits using names and syntax that may conflict with future versions of JavaScript.
      - Several benefits to programmers:	
        - They prevent or mitigate bugs.
        - They help make debugging easier.
        - They help your code run faster. (expedite)
        - They help you avoid conflicts with future changes to the language.

    

    

    - How do you enable strict mode at the global or function level?

      - Strict mode is easy to turn on either at the global level of a program or at the individual function level. 

      - Note also that nested functions inherit strict mode from the surrounding scope.

      - The `"use strict"` statement is an example of a **pragma**, a language construct that tells a compiler, interpreter, or other translator to process the code in a different way. Pragmas aren't part of the language, and often use odd syntax like `"use strict"` does.

      - Once you enable strict mode, **you can't disable it later** in the same program or function.

      - You must specify the `"use strict"` pragma at the very beginning of the file or function. You can't enable it partway through a program or function:

      - ```javascript
        //global strict mode
        
        "use strict";
        
        // The rest of the program. Everything from here to the end of
        // the file runs in strict mode.
        
        function foo() {
          // strict mode is enabled here too.
        }
        
        // Strict mode is still enabled
        foo();
        ```

      - ```javascript
        //function strict mode
        
        function foo() {
          'use strict';
        
          // The rest of the function. Everything from here to the end of
          // the function runs in strict mode.
        }
        
        // Strict mode is disabled unless you defined it globally.
        foo();
        ```

        - Strict mode is lexically scoped; that is, it only applies to the code that enables it. For instance:

        - ```javascript
          function foo() {
            "use strict";
            // All code here runs in strict mode
          }
          
          function bar() {
            // All code here runs in sloppy mode
            foo(); // This invocation is sloppy mode, but `foo` runs in strict mode
            // All code here runs in sloppy mode
          }
          
          function foo() {
            // All code here runs in sloppy mode
          }
          
          function bar() {
            "use strict";
            // All code here runs in strict mode
            foo(); // This invocation is strict mode, but `foo` runs in sloppy mode
            // All code here runs in strict mode
          }
          ```

          

    

    

    - Describe how code behaves under both strict and sloppy mode.

      - It won't let you create variables without explicitly declaring them first 

      - ```javascript
        "use strict";
        
        function foo() {
          bar = 3.1415; // ReferenceError: bar is not defined
        }
        
        foo();
        console.log(bar);
        
        //you have to actually define it as a global variable 
        
        "use strict";
        
        let bar;
        
        function foo() {
          bar = 3.1415;
        }
        
        foo();
        console.log(bar); // 3.1415
        ```

      - Help identify misspelled names -  If you declare a variable with one name, then later try to reassign it with a misspelled name, sloppy mode will create a new global variable. Consider this code:

      - ```javascript
        let aVariableWithALongName = 2.71828;
        
        // a bunch of omitted code here
        
        aVariab1eWithALongName = 3.14159;
        console.log(aVariableWithALongName); // 2.71828; should be 3.14159
        
        // line 5 creates a global variable instead of reassigning the variable as intended. 
        
        "use strict";
        
        let aVariableWithALongName = 2.71828;
        
        // a bunch of omitted code here
        
        aVariab1eWithALongName = 3.14159; // ReferenceError: aVariab1eWithALongName is not defined
        console.log(aVariableWithALongName);
        ```

        

    

    - When is strict mode enabled automatically?

      - JavaScript enables strict mode automatically within the body of a `class`; there is no way to prevent that behavior. The same thing happens with JavaScript modules, which we'll discuss in a later assignment.

      

    - When should you use (or not use) strict mode?

    - Use strict mode in any new code that you write. If you're adding new functions to an old codebase, it's safe to use function-level strict mode in the new functions, and you probably should do so. However, if you're not creating a new function in that old codebase, you probably shouldn't try to use strict mode. The changes in semantics, particularly those having to do with variable declarations, `this`, and silent failures, can easily break code that otherwise works well.

  

- **JavaScript syntactic sugar**















to do: 

`for (let;;)`

iteration `forEach, map, find, filter`







<u>**Code Example Explanations**</u>

Loops: Looping keyword, condition, block (loop body)

1) **do...while loop**

   1) ```javascript
      let counter = 0;
      
      do {
        console.log('Woooot!');
        counter -= 1;
      } while (counter > 0);
      ```

      Both statements execute the given block as long as the condition evaluates to true. The difference is that the condition in a `while statement` is checked **before** executing the block, while the condition in a `do...while` statement is checked **after** the block has been executed. So the block in a `do...while` statement will always be executed at least once, even if the condition is not satisfied. See **while loop**  to add anything

      

2) **while loop**

   1) ```javascript
      let array = [1, 2, 3, 4];
      let index = 0;
      
      while (index < array.length) {
        console.log(array[index]);
        index += 1;
      }
      ```

      On line 5, we access the array element at the current index, and pass that value as an argument to the `console.log` method, which logs it to the console. Subsequently, we increment `index` by 1.

      We use the `while` keyword with a conditional expression and a block. The block is defined on lines 4-7.   Javascript evaluates the conditional expression and if it evaluates to true then the block is executed. After each block iteration, the conditional is re-evaluated. The loop terminates if the condition has a falsy value.  Since JavaScript arrays have a zero-based index, we want to terminate the loop when `index` is equal to `array.length`, because the last index of an array is always *one less* than the array's length.  The loop block *must* modify `index` in some way that ultimately makes the loop condition `false`. If it doesn't, the loop becomes an infinite loop.

      This example demonstrates variable scoping rules:

      Note that we declare the variables `array` and `index` with the `let` keyword outside of a block.  Therefor these variables are visible in the Global scope, which is why they are accessible within the `while` loop.  If they were declared inside the block, then they would have block scope, and would be inaccessible outside of the block.  

      

3) **`continue` statement**

   1) ```javascript
      let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
      
      for (let i = 0; i < cities.length; i += 1) {
        if (cities[i] === null) {
          continue;
        }
      
        console.log(cities[i].length);
      }
      ```

      `continue` terminates the current iteration and continues with execution of the next iteration. This allows us to skip each element that is equal to `null`.  

      The `break` statement "jumps out" or terminate a loop.

      The `continue` statement "jumps over" one iteration in the loop.

      - keywords `continue` and `break`to provide more control over loops 

      1. `continue`

         1. lets you start a new iteration of the loop

         2. When a loop encounters the `continue` keyword, it skips running the rest of the block and jumps ahead to the next iteration

         3. You can rewrite a loop that uses `continue` with a negated `if` conditional.

            

4) **`if/ else if/ else` statement**

   1) ```javascript
      if (condition1) {
        //  block of code to be executed if condition1 is true
      } else if (condition2) {
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
      }
      ```

      Conditional statements are sets of commands that are triggered when a  condition is true. In JavaScript, there are two conditional statements  supported: `if…else` and `switch`.

      Often use comparison and logical operators: (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`, `&&`, `||`) to direct traffic.

      Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

       	 `if (x ===3)`is a conditional statement 

       	 `(x==3)` is the single `condition`/expression that evaluates to a boolean

      ​          The text that executes when the conditional statement is true is the `clause`

      ​	  `{console.log("x is 3")};` is a block.

      Use the `else if` statement to specify a new condition if the first condition is false.

      Use the `else` statement to specify a block of code to be executed if the condition is false.

      ex/ The condition provided to our `if` statement uses the *logical or* operator `||`. Therefore the condition will evaluate to a truthy value if *either one* of its operands is truthy. Since `true` is truthy, the condition will always be truthy as well.

      

5) **Ternary Operator - if-then-else statwment**

   1) ```javascript
      condition ? expression1 : expression2
      ```

      The **ternary operator** is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the `?` and `:` symbols and takes 3 operands (hence, the name "ternary"):

      The chief advantage that the ternary operator has over an `if/else` statement is that the entire structure is an expression. What that  means is that we can treat the ternary expression as a value: we can  assign it to a variable, pass it as an argument, and so on. Since `if/else` is a statement, we can't capture its result to a variable.

      If the condition provided is truthy, `expression1` will be evaluated. If the condition is falsy, `expression2` will be evaluated.

      Ternary expressions should usually be used to select between 2 values,  not to choose between two actions. (An action would be something like  logging a value to the console or setting a variable to a new value.)  

      *The ternary expression's result should almost always be*

      1. Assigned to a  variable

      2. Passed to a function as an argument

      3. Returned by a  function. 

         - If you're not doing one of those things, an `if/else` statement is a better choice.

           

6) **`switch` statement**

   1) ```javascript
      let animal = 'horse';
      
      switch (animal) {
        case 'duck':
          console.log('quack');
        case 'squirrel':
          console.log('nook nook');
        case 'horse':
          console.log('neigh');
        case 'bird':
          console.log('tweet tweet');
        default:
          console.log('*cricket*');
      }
      ```

      Conditional statements are sets of commands that are triggered when a  condition is true. In JavaScript, there are two conditional statements  supported: `if…else` and `switch`.

      The switch statement works by comparing an expression given to it with the expressions in each case clause using the strict comparison (`===`).

      The `switch` statement evaluates the provided expression (`animal` in our case) and will execute the statement associated with the case that matches, *as well as the statements in all cases following the matching case* until reaching either the end of the `switch` statement or a `break`.  If the value of the provided expression does not match any `case` clause, the `default` clause is executed. If we use `return` we don't need to use `break` bc it will immediately exit the function anyways.

      In the provided code, this means that after finding a matching case (`'horse'`), JavaScript will execute `console.log('neigh')` as well as the `console.log` invocations in all following clauses.

      In order to avoid this "fall through" behavior, we can place a `break` statement in each clause of our `switch` statement, as seen below: 

      ```javascript
      let animal = 'horse';
      
      switch (animal) {
        case 'duck':
          console.log('quack');
          break;
        case 'horse':
          console.log('neigh');
          break;
        case 'bird':
          console.log('tweet tweet');
          break;
        default:
          console.log('*crickets*');
      }
      ```

7. ```js
   let myArray = [1, 2, 3, 4];
   const myOtherArray = myArray;
   
   myArray.pop();
   console.log(myArray);
   console.log(myOtherArray);
   
   myArray = [1, 2];
   console.log(myArray);
   console.log(myOtherArray);
   ```

   **Reassignment vs mutation**

    The value of the reference gets copied. 

   (One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.)

   **A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it. When an object variable is copied, the reference is copied, but the object itself is not duplicated.**

   The value logged for `myOtherArray` at line 6 is identical to the value logged on line 5 for `myArray`. This is because both `myArray`and `myOtherArray` reference the same array in memory. If you mutate the array with `myArray`, you'll see the effects of that mutation with either `myArray` and `myOtherArray`. Therefore, when we pop a value from `myArray` on line 4, we see the effect of the change in both `myArray` and `myOtherArray`.

   On line 8, however, we reassign `myArray` to a new array, `[1, 2]`. Reassignments of variables never mutate the value or object that was originally referenced by that variable. Instead, reassignment creates a completely new value or object, and changes the variable so it references that new item. The reassignment, however, **does not change** any other variable that may be referencing the original item - the other variables still reference the old item. Thus, on lines 9, we see that the array referenced by `myArray` is now `[1, 2]`, but the array referenced by `myOtherArray` on line 10 still refers to `[1, 2, 3]`.









**Comparison Rules**

- Using logical operators 

```javascript
true || true;    // true
true || false;   // true
false || true;   // true
false || false;  // false
false || [];     // [] (second operand is non-boolean, it is returned as is)

//! returns true if its operand is falsey. false otherwise 
//! is a unary operator(takes only one operand)\
!true;   // false
!false;  // true
!!true;  // true
!1;      // false
![];     // false
```

- NaN

```javascript
> value === NaN         
= false   //`NaN` is the only value in JavaScript that is not equal to itself:

> NaN === NaN
= false

INSTEAD USE:

> let value = NaN;
> Number.isNaN(value)
= true

> Object.is(value, NaN)
= true
```

- Boolean

```javascript
There is no direct coercion of strings to booleans.
> true === 'true'
false
> true == 'true'
false
let a = 'true';
let b = 'false';
a === 'true';            // true
b === 'true';            // false
false == 0     // false is coerced to the number 0, so the result is true
```

**Comparison Operators**

- Return a boolean value (true or false)
- Compares its operands and returns a boolean value (true or false)
- When the operands are of different types, JavaScript tries to implicitly convert them to suitable types (implicit conversion) unless using `===`
  - The expressions or values that an operator uses are its **operands**. In comparisons, the expressions to the left and right of the operator are the operands. For instance, the equality comparison `x === y` uses the `===` operator with two operands: `x` and `y`.
- **===**
  - Strict equality operator, or identity operator 
  - the two operands are only equal if they are both the same type and have the same value:
  - Equivalent to Ruby's `.equal?`
  - Different than Ruby because strings are equal, not just numbers... you can also see this because strings are immutable (primitive values include strings, numbers, and booleans)

```javascript
> 5 === 5
= true

> 5 === 4
= false

> 'abc' === 'abc'
= true

> 'abc' === 'abcd'
= false

> 'abc' === 'aBc'
= false

> '5' === '5'
= true

> '5' === '6'
= false

> 5 === '5'
= false

> '' === 0
= false
```



- **!==**
  - Strict InEquality Operator returns false when the operands have the same type and value, true otherwise 
- **==**
  - Non-strict equality operator, or loose equality operator 
  - However, when the operands have different types, `==`  attempts to coerce one of the operands to the other operand's type  before it compares them, and it may coerce both operands in some cases.

```javascript
When one operand is a string and the other is a number, the string is converted to a number:

'42' == 42            // true
42 == '42'            // true
42 == 'a'             // false -- becomes 42 == NaN
0 == ''               // true -- becomes 0 == 0
0 == '\n'             // true -- becomes 0 == 0

When one operand is a boolean, it is converted to a number:

42 == true            // false -- becomes 42 == 1
0 == false            // true -- becomes 0 == 0
'0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
'' == false           // true -- becomes '' == 0, then 0 == 0
true == '1'           // true
true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN


When one operand is null and the other is undefined, the non-strict operator always returns true. If both operands are null or both are undefined, the return value is true. Comparing null or undefined to all other values returns false:

null == undefined      // true
undefined == null      // true
null == null           // true
undefined == undefined // true
undefined == false     // false
null == false          // false
undefined == ''        // false
undefined === null     // false -- strict comparison

[] == '0';               // false -- becomes '' == '0'
[] == 0;                 // true -- becomes '' == 0, then 0 == 0
[] == false;             // true -- becomes '' == false, then 0 == 0
[] == ![];               // true -- same as above
[null] == '';            // true -- becomes '' == ''
[undefined] == false;    // true -- becomes '' == false, then false == false
[false] == false;        // false -- becomes 'false' == 0, then NaN == 0

When one of the operands is NaN, the comparison always returns false:

NaN == 0              // false
NaN == NaN            // false
NaN === NaN           // false -- even with the strict operator
NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself
```

  - **!=**

    - Non-strict inequality Operator, or loose inequality operator 

    - `!=` attempts to coerce one of the operands to the other  operand's type before it compares them, and it may coerce both operands  in some cases. The result is `false` when the final values are the same, `true` otherwise.

    - ```javascript
      // Compare with the `==` and `!==` examples.
      
      > 5 != 5
      = false
      
      > 5 != 4
      = true
      
      > 5 != '5'
      = false
      
      > '' != 0
      = false
      ```

      

- **<**

  - Less than operator returns true when the value of the left operand has a value that is less than the value of the right operand 

  - It'll coerce numbers into strings - character-by-character. JavaScript moves from left-to-right in the  strings looking for the first character that is different from its  counterpart in the other string. Once it finds a character that differs, it compares that character with its counterpart, and makes a decision  based on that. 

  - ```javascript
    > 4 < 5
    = true
    
    > 5 < 4
    = false
    
    > 5 < 5
    = false
    
    > "4" < "5"
    = true
    
    > "42" < "402"
    = false
    
    > "42" < "420"
    = true
    
    > "42" < 420
    = true
    
    The relational operators, <, >, <=, and >= are defined for numbers (numeric comparison) and strings (lexicographic order). There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.
    
    11 > '9'              // true -- '9' is coerced to 9
    '11' > 9              // true -- '11' is coerced to 11
    123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
    123 <= 'a'            // also false
    true > null           // true -- becomes 1 > 0
    true > false          // true -- also becomes 1 > 0
    null <= false         // true -- becomes 0 <= 0
    undefined >= 1        // false -- becomes NaN >= 1
    ```

- **Always use explicit type coercions** (covered in the previous topic).

- **Always use strict equality operators** (`===` and `!==`).

**Logical Operators**

​	The logical AND (`&&`) and logical OR (`||`) operators do not always return a boolean value. They return the value of one of their operands (i.e., the expressions being compared), which may be a non-boolean value such as shown above. You can learn more about the [logical operator rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) on MDN.

The return value of a logical expression can be determined by iteratively evaluating the expression from left to right until it results in a single value.

```
!`, `&&`, and `||
```

- **!**
  - The **not operator** returns `true` when its operand is `false` and returns `false` when the operand is `true`. That is, it negates its operand.
  - In these examples, JavaScript first evaluates the expression on the right, then applies `!` to the result, thus negating it.
- **&&**
  - The **and operator** returns `true` when both operands are `true` and `false` when either operand is `false`.
- **||**
  - The **or operator** returns `true` when either operand is `true` and `false` when both operands are `false`.
- `&&` and `||` don't always return `true` or `false`, but they do when they operate on boolean values. A little later in this chapter we'll see what happens when we use `&&` and `||` with non-boolean values.
- The `&&` and `||` operators both use a mechanism called **short circuit evaluation** to evaluate their operands.
  -   As with `a && b`, JavaScript short circuits the evaluation if `a` is `false`, and returns `false` without evaluating `b`.

**Truthiness**

- javascript can coerce any value into a boolean value...

  - ```javascript
    let a = 5
    if (a) {
      console.log("how can this be true?");
    } else {
      console.log("it is not true");
    }
    
    //logs "how can this be true?"
    //coerces 5 to true
    
    let b = 0
    if (b) {
      console.log("how can this be true?");
    } else {
      console.log("it is not true");
    }
    
    //logs "it is not true"
    //coerces 0 to false
    ```

  - We often say that the expression **evaluates as** or **evaluates to** true or false.

```javascript
let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

- The above code doesn't test whether `x` is equal to `5`. Instead, it assigns the variable `x` to `5`, then evaluates the assignment's return value (`5`) as a boolean. Here, `5` evaluates as true when it appears in a boolean expression.

```javascript
> 3 && 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3  // last evaluated operand is 3
= 3

> 0 && 'foo'  // last evaluated operand is 0
= 0

> 'foo' && 0  // last evaluated operand is 0
= 0

> 3 || 'foo'  // last evaluated operand is 3
= 3

> 'foo' || 3  // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
= 'foo'

> '' || 0     // last evaluated operand is 0
= 0
```

```javascript
let isOk = !!(foo || bar);
```

