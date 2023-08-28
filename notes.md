**Runtime Environment**

Execution environment that lets an application program access system  resources and provides the tools the application needs to operate. Turns an application from a set of instructions into something that performs actual work.

The compiler/interpreter and the operating system's APIs together make up a runtime environment. + developer tools 

**Application Programming Interface(API)**

Ensure that the operating system provides them a regulated and safe manner.

It describes the scheme and format that a programmer can use to securely access resources, with the operating system acting as an intermediary.

he APIs needed for one runtime environment can differ from those needed in another environment.

**Interpreter/ Compiler**

Takes JavaScript code and turns it into code that your computer understands.

**JavaScript in the Browser**

The browser was.the original JavaScript runtime environment.

JavaScript in the browser has two main purposes: 

1) to programmatically  alter web pages based on user actions
   1) the programmer needs an API through which they can manipulate the structure and appearance of the HTML page.
   2) The DOM (Document Object Model) API lets you manipulate the structure and appearance of a web page
2) to exchange messages with a server over a network.
   1)  they need an API that lets them use the operating system's ability to send and receive messages over a network. 
   2) XHR (XMLHttpRequest) interface and the Fetch API let you communicate with a server.

**Node.js**

- A runtime environment that turns JavaScript into a general-purpose  programming language that can run applications on almost any system

A general-purpose programming environment, like Node.js, needs the following minimal capabilities:

-   The ability to read and write disk files (disk I/O);
-   The ability to read and write via the terminal (standard I/O);
-   The ability to send and receive messages over a network (network I/O);
-   The ability to interact with a database.

**Commenting out in JS**

- Use `//` for single line and `/*` for multiple line or to embed code in comments

  - ```javascript
    let area = w /* width */ * h /* height */;`
    ```

**Stylistic Tips**

  - ```javascript
    if (isOk()) {             // good
      // do something
    }
    ```

- Use semicolons to terminate code except when ending with {} or :

- Use **camelCase** formatting for most variable and function names. Such names begin with a lowercase letter. If the name contains  multiple words, each subsequent word should begin with an uppercase  letter:

  - `let answerToUltimateQuestion = 42; `

- Some function names -- constructor functions -- should normally use  PascalCase (also known as CamelCase -- with a capital C) names. For  instance:

  - ```javascript
    function DomesticCat(name) {           // defining a function
      // do something
    }
    ```

- Use uppercase names with underscores (SCREAMING_SNAKE_CASE) to represent constants that serve as *unchanging configuration values* in your program.  We also use SCREAMING_SNAKE_CASE for constants that represent so-called *magic numbers* (which may not actually be numbers) -- constants that are important to  your program in some way but not as configuration values. For instance:

  - ```javascript
    const INTEREST_RATE = 0.0525;
    const COURSE_NUMBER = 'JS101';
    const PI = 3.141592;
    const INPUT_PROMPT = '==>';
    const TODAY = new Date();
    ```

**Run JavaScript file**

`node example.js`

**Run JavaScript from Browser**

1) Create HTML File (.html)

2) ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Document</title>
     </head>
     <body>
       <script src="example.js"></script>
     </body>
   </html>
   ```

3) Script tag contains file or just enter code

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Document</title>
     </head>
     <body>
       <script>
         console.log("Hello, world!");
       </script>
     </body>
   </html>
   ```

4) In Chrome browser go to three dot chrome menu icon and click on more tools->developer tools->console tab to access the chrome console 

   1) From here you can use it as a REPL

      

- Programming environment provides two main types of reusable code to an application:

1) components and operations that are part of the core language, often collectively referred to as the **standard library**
2) components and operations specific to a runtime environment.



**Constructor** (like initialize in Ruby)

- A special function that creates and initializes an object instance of a class

  

**Two types of methods**

1. Instance Method:

   1. ```
      Constructor.prototype.methodName()
      ```

   2. you apply instance methods to a value of the type that the constructor represents

   3. ```javascript
      > 'Hello, '.concat('Bob!')
      = 'Hello, Bob!'
      ```

2. Static Method:

   1. To call a static method, you use the constructor name (`String`) instead of a value

   2. ```javascript
      > String.fromCharCode(97)
      = 'a'
      ```

   3. ```
      Constructor.methodName()
      ```

   ex/ https://developer.mozilla.org/en-US/docs/Web/JavaScript

| Method Name    | Constructor                           | Method Type     |
| -------------- | ------------------------------------- | --------------- |
| `substring`    | `String`                              | Instance method |
| `create`       | `Object`                              | Static method   |
| `fromCharCode` | `String`                              | Static method   |
| `slice`        | `Array`, `String`                     | Instance method |
| `toString`     | `String`, `Object`, `Array`, `Number` | Instance method |





**Property Name**

- A data type's property is a noun; an operation is a verb. A property  name says something about the value and an operation does something with that value.

  - ex/ length of string 

- You can access a property by appending a dot and the name of the property to that value:

  - ```javascript
    > "hello".length
    = 5
    ```

    

**Primitive Data Types**:

-   String
-   Number
-   Undefined
-   Null
-   Boolean



**Literals**

```js
'Hello, world!'     // string literal
3.141592            // numeric literal
true                // boolean literal
{ a: 1, b: 2 }      // object literal
[ 1, 2, 3 ]         // array literal
undefined           // undefined literal
```



**String Interpolation**

- Backticks are template literals

```javascript
> `5 plus 5 equals ${5 + 5}`
= '5 plus 5 equals 10'
```



**Numbers**

```jar
1, 2, -3, 4.5, -6.77, 234891234 // Examples of numeric literals
```



**Boolean**

- Boolean values have a starring role when working with comparison operators. 
- Boolean values represent an "on" or "off" state.



**Undefined**

- When a variable is not defined, its value is given by `undefined`. We can describe `undefined` as representing the absence of a value. We can also explicitly use the literal `undefined`.

```javascript
> let foo
= undefined

> foo
= undefined

> let bar = 3
= undefined

> bar
= 3
```



**Null**

- `null` is similar to `undefined`: it represents the intentional absence of a value. Often, `null` represents emptiness or nothing. The chief difference between `null` and `undefined` is that you must use `null` explicitly if you want to use it; `undefined` can arise implicitly.

```javascript
> let foo = null
```

- In the above code, `null` is specified as a literal value.

  

**Type of Operator**

- returns a string that contains the type of its operand's value

- ```javascript
  > typeof 1
  = 'number'
  
  > typeof 'foo'
  = 'string'
  
  > typeof true
  = 'boolean'
  
  > typeof undefined
  = 'undefined'
  
  > typeof null
  = 'object'
  
  > typeof [1, 2, 3]
  = 'object'
  ```

  

**Arithmatic Operators**

- +/-/*/ / % (remainder)
- Dividing two numbers that don't give a whole number results in decimal 
  - Not like Ruby where it rounds down 

- **NaN**

  - Not a number (but it is a typeof number)

    - ```javascript
      0/0 or 3 + undefined
      ```

    - also trying to convert a non-number value to a number like 'hello'

    - To determine whether a value is `NaN`, you can't use the usual comparison operators in a simple way. As it happens, `NaN` is the only value in JavaScript that is not equal to itself:

      - ```javascript
        > let value = NaN;
        > value === NaN         
        = false
        
        > NaN === NaN
        = false
        
        INSTEAD USE:
        
        > let value = NaN;
        > Number.isNaN(value)
        = true
        
        > Object.is(value, NaN)
        = true
        ```

        

- **Infinity/ -Infinity**

  - Any postive number over 0 

  - Different than NaN bc NaN is he result of an attempted mathematical operation that is neither a valid number nor an infinite number.

  - ```javascript
    > Infinity * Infinity
    = Infinity
    
    > Infinity + Infinity
    = Infinity
    
    > Infinity - Infinity
    = NaN
    
    > Infinity / Infinity
    = NaN
    
    > 1234567890 / Infinity
    = 0
    ```

  - -Infinity

    - Represents an infinite value that is less than 0. It most commonly arises when dividing a negative number by 0:

      - `-1/0`

      - ```javascipt
        > typeof Infinity
        = 'number'
        
        > typeof -Infinity
        = 'number'
        
        > let value1 = Infinity
        > value1 === Infinity
        = true
        
        > let value2 = -Infinity
        > value2 === -Infinity
        = true
        
        > let value1 = Infinity
        > value1 === Infinity * 123456789
        = true
        ```

- **String Concatenation**

  - ```javascript
    > 'foo' + 'bar'
    = 'foobar'
    
    > '1' + 2					\\coerces number to string
    = '12'
    
    > '5' - 3					\\coerces string to number
    = 2
    ```

    - **Implicit Type Conversion**
      - Unlike Ruby, the number 2 is coerced into a string and then concatenated

**Explicit Type Coercion**

- The difference between explicit and implicit coercion is that explicit  coercion lets you decide what you want to do, whereas implicit coercion  lets the engine choose.

  - ```javascript
    > Number('1')
    = 1
    
    > Number('foo')
    = NaN
    ```

  - Unlike Ruby which returns 0 if you run 'hi'.to_i or an error with [1].to_i

  - JavaScript fails silently. The programmer must determine whether an error represents a problem.

**`parseInt/ parseFloat`**

- It stops converting and ignores everything else once it encounters an invalid character:

- ```javascript
  > parseInt('12xyz')
  = 12
  
  > parseInt('3.1415')
  = 3
  
  > parseFloat('12.5foo')
  = 12.5
  ```

- If the number in the string is too big or too small to represent as a JavaScript number, `parseInt` returns `Infinity` or `-Infinity`. JavaScript can handle some immensely large and small numeric values.  However, at some point, it runs up against the limitations of its  internal number representation.

**Coerce Number to String**

- ```javascript
  > String(20)
  = '20'
  ```

**Data Structures**

- Arrays and Objects 
- **Array**
  - Ordered List with elements
  - Unlike ruby you cannot access a negative index 
- **Object**
  - Similar to Ruby hash with key:value pairs
    - { dog: 'barks'}
    - Doesn't use =>
    - Not in specific order
    - I think the key is like a variable that doesnt need to be a string... you can access the value by {dog: 'barks'}['dog'] which is weird bc you are accessing with a string 

**Expression**

- Assignements/reassignments 

- When you use the Node or browser console REPL, you type **expressions** at the `>` prompt.
- An expression is anything that JavaScript can evaluate to a value, even if that value is `undefined` or `null`.
- Expressions don't have to involve operators: any value is an expression that evaluates to itself: `"hi"` returns `"hi"`

**Return Values**

- In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term **log** is a synonym for printing or displaying something on the console.

**Statements**

- Statements often include expressions as part of their syntax, but the  statement itself is not an expression -- its value cannot be captured  and reused later in your code.

- Variable declaration:

  - ```javascript
    > let foo = 3;
    =undefined
    ```

  - On the other hand, the value `3` to the right of the `=` is an expression. If you later decide to print the value of `foo`, then `foo` in that code is also an expression:

  - The key difference between a statement and an expression is that you  can't capture a value from a statement. For instance, we can capture and print the value of the expression `3 * 5` in the following call to `console.log`:

  - ```javascript
    console.log(let answer = 3 * 5); // SyntaxError: missing ) after argument list
    console.log(while (true) {});    // SyntaxError: Unexpected token 'while'
    ```

- a **statement** is a line of code commanding a task. Every program consists of a sequence of statements.

  -   variable, function, and class declarations
  -   loops and `if` statements
  -   `return` and `break` statements
  -   assignments: `a = 3;`
  -   standalone expressions: `console.log("Hello");`

- any syntactic unit of code that expresses an action for the computer to perform.

- expressions can be part of a statement, but not all statements can be part of an expression. 

  

| Value            | Type      |
| ---------------- | --------- |
| `'true'`         | String    |
| `false`          | Boolean   |
| `1.5`            | Number    |
| `2`              | Number    |
| `undefined`      | Undefined |
| `{ foo: 'bar' }` | Object    |



**Explain why this code logs `'510'` instead of `15`.**

```javascript
console.log('5'+10)
```

This operation will display the return value of '5' +10 to the console.  Because this is operation (+) is used to concatenate two strings, the number 10 is coerced into a string through implicit type conversion.  This way we are not adding 10 and 5, but instead concatinating 5 with 10. 

Launch answer

The code logs `510` since every `+` expression that has a string operand produces a string result no matter what the other operand is. In other words, the Number `10` gets coerced to a String and then gets concatenated to the String `'5'`, which produces `'510'`.



**Refactor the code from the previous exercise to use explicit coercion, so it logs `15` instead.**

```javascript
num = Number('5')
console.log(num + 10)

or string interopolation with template literals

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
```



**CODE RUNDOWN**

```javascript
let answer = 41;
answer = 42;
console.log(answer)
```

When JavaScript sees line 1 of this code, it sets aside a bit of memory and stores the value `41` in that area. It also creates a variable named `answer` that we can use to access that value.

On line 2, we *reassign* the value `42` to the variable named `answer`. That is, JavaScript makes `answer` refer to a new value. In particular, it's important to realize that we're not changing the value of `41` -- we're assigning a completely new value to the `answer` variable.

Finally, on line 3, we log the value of the `answer`  variable to the JavaScript log. To determine what value it needs to log, JavaScript retrieves the value stored in the location used by the  variable.



**Identifier**

Variable names are often referred to by the broader term, **identifiers**. In JavaScript, identifiers refer to several things:

-   Variable names declared by `let` and `var`
-   Constant names declared by `const`
-   Property names of objects
-   Function names
-   Function parameters
-   Class names

The term *variable name* includes all of these identifiers except property names of objects.

**Variable**

-   Variables declared with `let` and `var`
-   Constants declared with `const`
    -   When we use the terms *variable* or *variable name*, we are usually including constants declared by `const` in that same discussion.

-   Properties of the global object
-   Function names
-   Function parameters
-   Class names

Not all object properties are variables; only those on the global object.

JavaScript is also unusual in that we can think of function and class  names as being variable names: in fact, they are. Functions and classes  are actually values in JavaScript, and their names are used in the same  way as more traditional variables.

**Declaring and Assigning Variables**

- Using the `let` keyword, 

- ```javascript
  > let firstName
  = undefined
  ```

- Here, we're telling the interpreter that we want to use a variable named `firstName` to store some information. If you reference this variable in `node`, it evaluates as `undefined`: firstName was initialized to `undefined`

- To assign a more useful value, we can use an **initializer** in the declaration

- ```
  > let firstName = 'Mitchell'
  = undefined
  
  > firstName
  'Mitchell'
  ```

- we stored the string 'Mitchell' in memory and can use `firstName` as a label for that string elsewhere

- Now we can use a template literal to interpolate the value of firstName into the string before logging it to the console

- ```
  condole.log(`Your first name is ${firstName}`)
  ```

- BUT firstName isn't permanantly tied to the string 'Mitchell' and it can be reassigned to any value 

- Write your variable declaration and **initialize** it with an explicit value on the same line:

- ```javascript
  > let firstName = 'Mitchell'
  = undefined
  ```

  	- So are we really returning `undefined`? NO
   - the let keyword is a declaration or a statement which doesnt return anything
     - Note that regardless of whether we provide a value in a declaration, the variable is initialized. If we don't provide an explicit value, that  initial value is `undefined`.
   - But an *assignment* or *reassignment* are expressions and do return the value 



**`=` in assignment expression vs declaration/ statement**

- There is a subtle difference in terminology surrounding the `=` token. When used in a declaration, the `=` is just a syntactic token that tells JavaScript that you're going to  supply an initial value for the variable. However, in an assignment, the `=` is called the **assignment operator**. For example, in `let firstName = 'Mitchell'`, the `=` is a syntactic token, but in `firstName = 'Martha'`, it is the assignment operator.

 

**CODE INTERPRETATION**

```javascript
> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b
=4
```

Just like Ruby...

b will retain the value 4 and a is now 7.

Variables have values that aren't deeply linked to eachother and changing on doesn't change other variables with the same value



**Declaring Constants**

- The `const` keyword is similar to `let`, but it lets you declare and initialize **constant** identifiers:

- A standard convention when naming constants is to use all uppercase  letters and digits in the name; if the name contains multiple words, use underscores to separate the words.

  ```javascript
  > const firstName = 'Mitchell'
  = undefined
  
  > firstName
  = Mitchell
  ```

  - Constants have an immutable binding to their values. Unlike an ordinary  variable, once you declare a constant, you cannot assign it a new value. The constant will continue to have that value until the constant is no  longer needed.

    - ```javascript
      const INTEREST_RATE = 0.0783;
      INTEREST_RATE = 0.0788; // Uncaught TypeError: Assignment to constant variable.
      ```

    - doesn't work!

    - Using constants is a great way to label a value with a name that makes your code more descriptive and easier to understand.

**Variable Scope**

- Two types of variables based on where they're accessible 
  - Global
    - Available throughout the program 
  - Local

- Determines where it is availbale in the program and is determined by where it was declared

  1. Variables declared by `let` or `const` keywords have **block** scope

     1. example of a block (executable code between braces)

     2. ```javascript
        {
          // this is a block
          let foo = 42;
          console.log(foo);
        }
        ```

     3. In general, blocks appear in `if...else`, `while`, `do...while`, `for`, `switch`, and `try...catch` statements, or by themselves (as in the first example above).

     4. we'll usually treat function bodies as blocks when we're discussing  block-scoped variables. However, in most other cases, function and block scope should be thought of as different kinds of scope.

        1. ```javascript
           if (expression) {  // block starts at {
             doSomething();   // block body
           }                  // block ends here
           ```

- If it is defined within the block it is inaccesible from outside the block

  - ```javascript
    if (1 === 1) {
      let a = 'foo';
    }
    
    console.log(a); // ReferenceError: a is not defined
    ```

- If defined outside the block then you can reassign within the block 

  - ```javascript
    let a = 'foo';
    if (1 === 1) {
      a = 'bar';
    }
    
    console.log(a);    // => 'bar'



**Declaring variables without `let` or `const`**

- If you define without using one of those keywords (an undeclared variable), the variable will have global scope
- You'll be able to step on the original value by changing its content
- Hard to debug



**CODE SNIPPET**

```javascript
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

The program logs `bar`. Line 1 initializes a variable named `foo` with the value`'bar'`. Line 2 starts a block, which creates a new scope for `let` variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named `foo` that shadows (hides) the variable from line 1. This second variable gets initialized to `'qux'`, but it goes out of scope on line 4 when the block ends. That brings `foo` from line 1 back into scope, so line 6 logs its value: `bar`.



**Readline-sync**

- Program that reads input from the command line

1. In main directory, in terminal `npm init -y`

2. ```shell
   npm install readline-sync --save
   ```

```javascript
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

This example needs a little explanation. Line 1 uses Node's built-in `require` function to import `readline-sync` into your program. It returns the library as an object, which we assign to the `rlSync` variable.

In line 2, we use `rlSync` to call the `question` method. This method displays its string argument, then waits for the  user to respond. When the user types some text and presses Return, it  returns that text to the program. Here, we assign that text to the  variable `name` and use it to display a personalized greeting.

**Prompt**

```javascript
let name = prompt("What's your name?");
console.log(`Good Morning, ${name}`);
```

`prompt` function works like `rlSync.question`

**Input in the browser**

- Working with a browser's input controls requires a working knowledge of  the Document Object Model (DOM), which is outside the scope of this  book. However, you don't need to know about the DOM to get user inputs.  
- Most browsers implement the `prompt` function which lets a program ask for and obtain text-based input from the user.

**Functions**

- Procedure that lets you extract the code and run it as a separate unit. In JavaScript- benefit that functions give us is the ability to make changes in one location

- One common use case is to perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement. Assign the return value to a variable to capture the value 

- All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JavaScript functions. However, when you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. 

- When JavaScript encounters the `return` statement, it  evaluates the expression, terminates the function, and returns the  expression's value to the location where we called it.

- ```javascript
  function funcName() {
    func_body;
  }
  ```

  ex/

  ```javascript
  function say() {
    console.log("Output from say()");
  }
  
  
  say();
  
  ```

  - `say()` is the function call to the `say` function
  - When we call the function we have to append the `()` else we are just stating a function's name. A Variable whose value is a "function object"

- You write a **function invocation** that will be called when the program runs, and you **invoke** a function to call it 

- ```javascript
  function say(text) {
    console.log(text);
  }
  
  say("hello");
  say("hi");
  say("how do you do");
  say("Quite all right");
  ```

  However, there is a benefit here. We've extracted the logic for  displaying text in a way that makes our program more flexible. If we  later need to change the output style, we can make the change in one  place: the `say` function. We don't have to change any other code to get the updated behavior. We'll see such an update in a few minutes.

  - Arguments let you pass data from outside the function's scope into the  function so it can access the data. You don't need arguments if the  function definition doesn't need access to outside data.
  - Thus, `say("hello")` passes the argument `"hello"` to the function. Inside `say`, the variable `text` is assigned to the argument's value.
  - In the definition of a function, the names between parentheses are called **parameters**. You can think of parameters as placeholders, while arguments refer to the values assigned to those placeholders.
  - **Function names and parameters are both considered variable names in JavaScript.** Parameters, in particular, are **local variables**
  - **Arguments are objects or primitive values being passed to the  function; parameters are declarations for the local variables used  inside the function to access the arguments.**
  - Parameters, however, are **local variables** only available within the function's body. the scope of the variable defined by the parameter is the function definition; you can't use it outside the function's body.

**Arity**

- Do we call it arity?
- extra arguments will be ignored in function and ones not provided will be undefined

**Caller**

- I NEED CLARIFICATION
- JavaScript uses the `return` statement to return a value to the code that invoked the function. The calling function is sometimes referred to as the **caller**, but this is slightly ambiguous since the caller can also refer to a calling object. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

**Predicate**

- Functions that always return a boolean value 

**Default Parameter**

```javascript
function say(text = "hello") {
  console.log(text + "!");
}

say("Howdy"); // => Howdy!
say();        // => hello!
```

**Nested Method**

- You can do this in Ruby but I never have 

- ```javascript
  function foo() {
    function bar() {
      console.log("BAR");
    }
  
    bar(); // => BAR
    bar(); // => BAR
  }
  
  foo();
  bar(); // ReferenceError: bar is not defined
  ```

- Here, the `bar` function is nested within the `foo` function. Such nested functions get created and destroyed every time  the outer function runs. (This usually has a negligible effect on  performance.) They are also private functions since we can't access a  nested function from outside the function where it is defined.