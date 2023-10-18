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

*Idiomatic Names*

| Category                                     | Name              | Notes             |
| :------------------------------------------- | :---------------- | :---------------- |
| Non-constant variables and object properties | `employee`        |                   |
|                                              | `number`          |                   |
|                                              | `fizzBuzz`        |                   |
|                                              | `speedOfLight`    |                   |
|                                              | `destinationURL`  | URL is an acronym |
|                                              | `m00n`            |                   |
| Constructor functions and classes            | `Cat`             |                   |
|                                              | `BoxTurtle`       |                   |
|                                              | `FlightlessBird`  |                   |
| Other functions                              | `parseURL`        | URL is an acronym |
|                                              | `goFaster`        |                   |
| Configuration and magic constants            | `ABSOLUTE_PATH`   |                   |
|                                              | `TODAY`           |                   |
| Other `const` names                          | `employeeOfMonth` | Local style       |
|                                              | `HairyCat`        | Local style       |
|                                              | `ABSOLUTE_PATH`   | Local style       |

*Valid but Non-Idiomatic Names*

| Category                                     | Name           | Notes                        |
| :------------------------------------------- | :------------- | :--------------------------- |
| Universally non-idiomatic                    | `$number`      | Begins with $                |
|                                              | `fizz_buzz`    | snake_case not allowed       |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `_hello`       | Begins with `_`              |
|                                              | `goodbye_`     | Ends with `_`                |
|                                              | `milesperhour` | Undifferentiated words       |
|                                              | `MILESPERHOUR` | Undifferentiated words       |
| Non-constant variables and object properties | `Employee`     | Begins with capital letter   |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Constructor functions and classes            | `cat`          | Begins with lowercase letter |
|                                              | `makeTurtle`   | Begins with lowercase letter |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Other functions                              | `ParseURL`     | Begins with capital letter   |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Configuration and magic constants            | `absolutePath` | Not SCREAMING_SNAKE_CASE     |
|                                              | `Today`        | Not SCREAMING_SNAKE_CASE     |

Note that non-idiomatic names are not invalid names. Non-idiomatic  names are commonly used by external libraries to provide names that are  easy to type yet unlikely to conflict with names in other libraries. For instance, the jQuery library uses a function named `$` as well as variables whose name begins with `$`, while the underscore.js library leans heavily on a variable named `_`.

*Invalid Names 

| Name       | Notes                         |
| :--------- | :---------------------------- |
| 42ndStreet | Begins with number            |
| fizz-buzz  | Hyphen not allowed            |
| fizz.buzz  | Looks like property reference |

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


**Special Characters**

| Code | Character       |
| ---- | --------------- |
| `\n` | New line        |
| `\t` | Tab             |
| `\r` | Carriage return |
| `\v` | Vertical tab    |
| `\b` | Backspace       |

- let multiline = 'This string...\nspans multiple lines';

- **Escaping quotes**

  - ```javascript
    let quote = '"It\'s hard to fail, but it is worse never to have tried to succeed." - Theodore Roosevelt';
    ```

    

**Primitive Data Types**:

​		- JavaScript represents them directly at the lowest level of the language implementation. 

-   String
-   Number
-   NaN (considered a number)
-   Undefined
-   Null
-   Boolean
-   Symbols (ES6)
-   Big integers (ES9)



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

- JavaScript uses a floating point system to represent all numbers
- 

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

  
  
- **Infinity/ -Infinity**

  

  - JavaScript uses [Double Precision Floats](https://en.wikipedia.org/wiki/Double-precision_floating-point_format), so the largest number that can be precisely stored is 9,007,199,254,740,991 (`Number.MAX_SAFE_INTEGER`). However, the maximum numeric value that can be represented is 1.7976931348623157e+308 (`Number.MAX_VALUE`). Any number greater than this is represented as `Infinity`.

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
      - No matter what.. undefined, null, Infinity + a string operand will always be coerced and concatenated

**Explicit Type Coercion/ Conversion**

- The difference between explicit and implicit coercion is that explicit  coercion lets you decide what you want to do, whereas implicit coercion  lets the engine choose.

- convert primitive JavaScript values into values of different types

- JavaScript primitives are immutable values: JavaScript doesn't actually convert values. Instead, it returns a new value of the proper type.

  - ```javascript
    > Number('1');
    = 1
    
    +('123')        // 123
    +(true)         // 1
    +(false)        // 0
    +('')           // 0
    +(' ')          // 0
    +('\n')         // 0
    +(null)         // 0
    +(undefined)    // NaN
    +('a')          // NaN
    +('1a')         // NaN
    
    > Number('foo');
    = NaN
    ```
    
  - Unlike Ruby which returns 0 if you run 'hi'.to_i or an error with [1].to_i
  
  - JavaScript fails silently. The programmer must determine whether an error represents a problem.
  
- When one of the operands is an object (including arrays and functions),  both operands are converted to strings and concatenated together: (non- mutating)

  - ```javascript
     [1] + 2                     // "12"
    [1] + '2'                   // "12"
    [1, 2] + 3                  // "1,23"
    [] + 5                      // "5"
    [] + true                   // "true"
    42 + {}                     // "42[object Object]"
    (function foo() {}) + 42    // "function foo() {}42"
    ```


- The other arithmetic operators, `-`, `*`, `/`, `%`, are only defined for numbers, so JavaScript converts both operands to numbers:

  - ```javascript
    1 - true                // 0
    '123' * 3               // 369 -- the string is coerced to a number
    '8' - '1'               // 7
    -'42'                   // -42
    null - 42               // -42
    false / true            // 0
    true / false            // Infinity
    '5' % 2                 // 1
    > 9-'hi'
    NaN
    > 1-undefined
    NaN
    > 1+undefined
    NaN
    >[1] * 2;              // 2 -- becomes '1' * 2, then 1 * 2
    >[1, 2] * 2;           // NaN -- becomes '1,2' * 2, then NaN * 2
    >[5] - 2;              // 3
    >[5] - [2];            // 3
    >5 - [2];              // 3
    >5 - [2, 3];           // NaN -- becomes 5 - '2,3', then 5 - NaN
    >[] + [];              // '' -- becomes '' + ''
    >[] - [];              // 0 -- becomes '' - '', then 0 - 0
    >+[];                  // 0
    >-[];                  // -0
    ```
    
    

**`parseInt/ parseFloat`**

- It stops converting and ignores everything else once it encounters an invalid character:

- Note that `parseInt` takes an optional `radix` argument. This represents the base in mathematical numeral systems. It is recommended to always specify this parameter to avoid reader confusion and to have more predictable behavior.

- ```javascript
  > parseInt('123.12', 10);  
  = 123  
  
  > parseInt('12xyz');
  = 12
  
  > parseInt('3.1415');
  = 3
  
  > parseFloat('12.5foo');
  = 12.5
  
  > parseInt(23324.34);
  = 23324 //also takes number argument
  ```
  
- If the number in the string is too big or too small to represent as a JavaScript number, `parseInt` returns `Infinity` or `-Infinity`. JavaScript can handle some immensely large and small numeric values.  However, at some point, it runs up against the limitations of its  internal number representation.

**Coerce Number/ Boolean to String**

```javascript
> String(20); //function
= '20'

> (123).toString(); //method

//can do this, but avoid it

123 + '';                // "123"
'' + 123.12;             // "123.12"


String(true); 
= "true"

true.toString(); 


```

**Boolean**



- ```javascript
  1 + true       // true is coerced to the number 1, so the result is 2
  '4' + 3        // 3 is coerced to the string '3', so the result is '43'
  
  
  1 + true        // 2
  1 + false       // 1
  true + false    // 1
  null + false    // 0
  null + null     // 0
  1 + undefined   // NaN undefined gets coerced to NaN (which is still considered a number)
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

- An expression is any valid code that resolves to a value.

- The most common expression types are:

  -   Arithmetic: these are expressions that evaluate to a number (i.e. `10 + 13`)
  -   String: these are expressions that evaluate to a character string (i.e. `'Hello' + ', World'`)
  -   Logical: these are expressions that evaluate to `true` or `false` (i.e `10 > 9`)

- ```javascrpt
  'hello';   // a single string is an expression
  10 + 13;   // arithmetic operations are expressions
  sum = 10;  // assignments are expressions
  ```

- When you use the Node or browser console REPL, you type **expressions** at the `>` prompt.

- An expression is anything that JavaScript can evaluate to a value, even if that value is `undefined` or `null`.

- Expressions don't have to involve operators: any value is an expression that evaluates to itself: `"hi"` returns `"hi"`

**Return Values**

- In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term **log** is a synonym for printing or displaying something on the console.

**Statements**

- Statements often include expressions as part of their syntax, but the  statement itself is not an expression -- its value cannot be captured  and reused later in your code.

- They don't resolve to useful values. Instead, they control the execution of the program. statements help to "do something", instead of giving you a value to use.

- ```javascript
  let a;                // a statement to declare variables
  let b;
  let c;
  let d = (a = 1);      // this works, because assignments are expressions too
  let e = (let f = 1);  // this gives an error, since a statement can't be used
                        // as part of an expression
  ```

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

- a **statement** is a line of code commanding a task. Every program consists of a sequence of statements. statements help to "do something", instead of giving you a value to use.

  -   variable, function, and class declarations
  -   (while/ for) loops and `if` statements/switch statement 
  -   `return` and `break` statements
  -   `assignments: `a = 3;`
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
    
      - A *magic number* appears out of nowhere with no context, so avoid this. Use descriptive constants when using a repetitive number 
    

**Variable Scope**

- Two types of variables based on where they're accessible 
  - Global
    - Available throughout the program 
    - You can read and reassign them at any time 
  - Local
    - Confined to a function or a block
    - Can't access them outside the function that declares them 
    - That brings us to another important property of local variables. Local  variables are short-lived; they go away when the function corresponding  to their scope stops running. When we invoke the function, we start a  new scope. If the code within that scope declares a new variable, that  variable belongs to the scope. When the last bit of code in that scope  finishes running, the locally scoped variables disappear. JavaScript  repeats this process each time we invoke a function.

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



**Shadowing example**

```javascript
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar); // 1
```

- At first glance, this example may look identical to Example 1. There's a key difference, however, which is the function parameter `myVar` on line 3. It's this small detail that leads to the difference in outcome when the code is run.

  The concept at work here is variable scope. When the `myFunc` function is invoked on line 7, JavaScript declares a variable with the name of the parameter `myVar` within the scope of the function. This is a *different* variable to the one initialized on line 1, and initially has a value of `undefined`. The existence of the this variable within the scope of the function 'shadows', or blocks access to, the `myVar` variable in the global scope on line 1. Therefore, line 4 is an initialization of the function-scoped `myVar` rather than a re-assignment of the `myVar` declared and initialized on line 1. When that variable is then logged on line 8, it still has its initial value of `1`.





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

The `prompt` method pops up a dialog box with an optional message that asks the user to enter some text. In the browser environment, you can use this method to collect user input.

The dialog lets the user input some text and click `OK` or `Cancel`. If the user clicks `Ok`, `prompt`returns the text as a string; if the user clicks `Cancel`, it returns `null`.

**Input in the browser**

- Working with a browser's input controls requires a working knowledge of  the Document Object Model (DOM), which is outside the scope of this  book. However, you don't need to know about the DOM to get user inputs.  

- Most browsers implement the `prompt` function which lets a program ask for and obtain text-based input from the user.

  

**Functions**

```javascript
function hello() {
  return 'hello world!';
}

console.log(typeof hello);    // function
```



A function declaration/statement has the following structure:

1. The `function` keyword

2. The name of the function (local variable type of function)
   1. It does not require assignment to a variable. The value of the function variable is the function itself.
   2. This "functional variable" obeys general scoping rules, and we can use it exactly like other JavaScript variables.
   3. Function declarations are similar to variable declarations. Just as variable declarations must start with `let` or `const`, function declarations must start with `function`.

3. A list of comma separated parameters
   1. we can also create variables by naming the arguments to a function via its parameters. A function declaration gives us a fourth way: a function declaration declares a variable with the same name as the function, and then assigns the function to that variable. Thus, for every function declaration, a variable is initialized.

4. A block of statements (the function body)

**If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`. This is a reason why functions are said to "have returned" rather than "finished execution". When we talk about closures in a later course this distinction will become more apparent. For now, just be mindful of the disambiguation between the `return` value (explicit or implicit) of a function and the statement that a *"function that has returned or returns"*.

**Function Expression**

```javascript
const hello = function () {   // We can also use let instead of const
  return 'hello';
};

console.log(typeof hello);    // function
console.log(hello());         // hello
```

- A function expression defines a function as part of a larger expression syntax (typically a variable assignment).

  - What do we mean by this? Well now `foo` will return a function expression

  - ```javascript
    let foo = function () {
      return function () {   // function expression as return value
        return 1;
      };
    };
    
    let bar = foo();         // bar is assigned to the returned function
    
    bar();                   // 1
    
    > foo
    [Function: foo]
    > foo()
    [Function (anonymous)]
    ```

    

- In this code, we define an anonymous function (one without a name) and assign it to the variable `hello`. We then use the variable to invoke the function

  - Be explicit to refer to it as the anonymous function assigned to a variable.

```javascript
let hello = function foo() {
  console.log(typeof foo);   // function
};

hello();

foo();                       // Uncaught ReferenceError: foo is not defined
```

- We can also name function expressions, like this

- However, the function's name, `foo`, is only available inside the function (i.e., it can only be used from within the function's local scope). With named function expressions, the name of the function is contained within its own scope (i.e., inside the variable `hello`).

  - Although most function expressions use anonymous functions, named function expressions are useful for debugging. The debugger can show the function's name in the call stack, providing a valuable clue. Named function expressions can also be useful for recursive functions.
  -  if a *statement* begins with the `function` keyword, then it is a function declaration; otherwise, it is a function expression. even a minor change (adding parentheses) is enough to turn a function declaration into a function expression:

- A function defined using a function declaration must always have a name (it cannot be an anonymous function). In addition to creating a named function, a function declaration also creates a variable with the same name as that function's name. For example, the following two function definitions both define a named function and a variable with the same name as that function.

- ```javascript
  let foo = function foo() {
    return 'a named function expression assigned to a variable';
  };
  
  function bar() {
    return 'a function declaration';
  }
  ```

**Arrow Functions**

```javascript
const multiply = function(a, b) {
  return a * b;
};

const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

BENEFITS:

1) Get rid of `function` keyword and insert `=>`
2) if its on one line then you can get rid of brackets and `return` keyword

*When to use them?*

- Arrow functions are most often used as **callback functions**.
- Arrow functions also have another use that makes them immensely popular: they inherit the "execution context" from the surrounding code.

```javascript
[1, 2, 3].map(function (element) {
  return 2 * element;
}); // returns [2, 4, 6]

[1, 2, 3].map((element) => {
  return 2 * element;
}); // returns [2, 4, 6]

[1, 2, 3].map((element) => 2* element) // returns [2, 4, 6]

[1, 2, 3].map(element => 2* element) //omit parenthesis if one parameter
```

- Use arrow functions for callbacks.
- Use function declarations or function expressions for other functions, but choose one or the other as your primary choice.
- If you use function expressions, named function expressions are better for debugging purposes. They also help clarify the intent of those functions.



**During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same names as the function's parameters. Within the function body, these local variables are called arguments

**Function names are just local variables, so you can assign it to a new local variable and call the function using a new name 



1. Calling a function with too few arguments *does not raise an error*.
2. Within a function, an argument that wasn't provided in the call will have the value `undefined`.



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

**CODE EXAMPLES FOR VARIABLE SCOPE**

In JavaScript, every function or block creates a new variable scope. Let's examine what this means.

These are a number of ways to create a variable in the current scope:

- Use the `let` or `const` keywords.

- Use the `var` keyword, which we'll introduce later in this lesson.

- Define parameters for a function - each parameter is a local variable.

- A function declaration creates a variable with the same name as the function. We'll talk about that in the next assignment.

- A class declaration also creates a variable with the same name as the class. We'll talk about class declarations in a later course.

  ```javascript
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

- Variable scoping rules apply to both assignment and referencing equally. This code: checks the current scope and then each higher scope, looking for a variable with the name `country`. JavaScript sets the first `country` variable it finds to `"Liechtenstein"`. 

- ```javascript
  let country = 'Spain';
  function update() {
    country = 'Liechtenstein';
  }
  
  console.log(country);  // logs: Spain
  
  update();
  console.log(country);  // logs: Liechtenstein
  ```

-  If JavaScript can't find a matching variable, **it creates a new global variable instead**. This is rarely what you want; it can be the source of subtle bugs.

- ```javascript
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

  - In the above code, `country2` isn't declared anywhere else in the code and it is assigned a value inside the function. Since JavaScript couldn't find a matching variable, it created a new "global" variable and as such it makes it possible to log its value on line 8.
  - Moreover, similar to the earlier code in the adding variables to the current scope section, `country2` is in the global scope because of the way the source code is written and not because of the scope in which the `assign` function was invoked.

- ```javascript
  let name = 'Julian';
  
  function greet() {
    let name = 'Logan';
    console.log(name);
  } //the variable declaration for name in the greet function shadows the outer name variable. Within greet, you can only access the inner name.
  ```

- If a function definition has a parameter with the same name as a variable from an outer scope, the parameter shadows the outer variable:

- JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy.

- Remember these important variable scoping rules:

  - Every function definition creates a new local variable scope.
  - Every block creates a new local variable scope.
  - Lexical scope uses the structure of the source code to determine the variable's scope. This means that the code doesn't have to be executed for the scope to exist.
  - All variables in the same or surrounding scopes are visible inside functions and blocks.





*GLOBAL SCOPE*



```javascript
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();
```

- This is different than Ruby in that it acts like block scope 
- `greetingMessage` is a global variable so it can be accessed from anywhere, even within the function. It can even be reassigned within the function.

```javascript
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople(); // => 'Good Evening'
```



*LOCAL SCOPE*



```javascript
function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
```

- declares `greetingMessage` internally and is accessible within the function but causes a `ReferenceError` if you try to use it elsewhere

```javascript
function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError
```



**Limiting Variable Scope**

- Global variables can be helpful in some scenarios, e.g.,  application-wide configuration. However, most developers discourage  their use since they often lead to bugs. In general, you should limit  the scope of your variables as much as possible; smaller scopes limit  the risk that an outer scope might misuse the variable.



**Lexical Scope (Static Scoping)**

Javascript uses lexical scope to determine where it looks for a variable.  The source code defines the scope.  When you write a function it creates a scope even if the function never gets executed and has no variables of its own. There is a hierachy of scopes from the local scope of the code up to the program's global scope. 



Javascript searched this hierachy from the bottom to the top when trying to find a variable. When it finds the variable, it stops and returns it.  This means that a lower scope variable can *shadow* or hide a variable with the same name in a higher scope. 



**CODE EXAMPLE USING A PARAMETER**

```javascript
function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople("Good Morning!");
```

- The `greetingMessage` parameter acts like a local variable. It *is*, in fact, a local variable. The chief difference is that we initialize  it from the argument passed to the function. Parameters have local scope within a function.



**Reassignment and Mutation**

- Reassignment 
  - Change what value is assigned or bound to a variable 
  - Makes that name (variable) refer to a completely different place in memory 
  - Changing the *binding* of a variable - that is, the value that is *bound* to the variable
- Mutation
  - Change the value of the thing that is bound to the variable 
  - Changes the value that is actually stored in the memory that the name  refers to
  - After mutating the value assigned to a variable, the variable continues to refer to the same place in memory.

```javascript
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

**Mutating the Caller**

- When a method permanently mutates the object that invokes the method 

- Does not preserve the previous value of the object

- ex/ 

- ```javascript
  let oddNumbers = [1, 3, 5, 7, 9];
  oddNumbers.pop();
  console.log(oddNumbers); // => [1, 3, 5, 7]
  ```

  - Destructively removes the last element of the array- change is permanent 

- Functions can also mutate the argument 

- ```javascript
  function changeFirstElement(array) {
    array[0] = 9;
  }
  
  let oneToFive = [1, 2, 3, 4, 5];
  changeFirstElement(oneToFive);
  console.log(oneToFive); // => [9, 2, 3, 4, 5]
  ```

  - When the function finishes running, we can see that the original array has changed.

- Non-mutating function which makes a copy and mutates that copy

- ```javascript
  function addToArray(array) {
    return array.concat(10);
  }
  
  let oneToFive = [1, 2, 3, 4, 5];
  console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
  console.log(oneToFive);             // => [1, 2, 3, 4, 5]
  ```

**Can I mutate everything?**

- No! This is a difference with Ruby
- One non-obvious point here is that mutation is a concern when dealing  with arrays and objects but not with primitive values like numbers,  strings, and booleans. Primitive values are **immutable**. That means their values never change; operations on immutable values always return new values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.
- It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.

**CODE BREAKDOWN**

```javascript
add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560
```

1. First, we pass two arguments to `add`: `subtract(80, 10)` and `times(subtract(20, 6), add(30, 5))`.

2. The first argument -- the `subtract` function call -- returns `70`.

3. The second argument, the 

   ```
   times
   ```

    function call, has two arguments: 

   ```
   subtract(20, 6)
   ```

    and 

   ```
   add(30, 5)
   ```

   .

   -   `subtract(20, 6)` returns `14`
   -   `add(30, 5)` returns `35`
   -   using the return values, the entire function call becomes `times(14, 35)`
   -   the overall value of the `times` call is `490`

4. Using the return values from steps 2 and 3, we get `add(70, 490)`, which returns `560`.



**CALLING A FUNCTION BEFORE ITS DECLARED**

```javascript
greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}
```

- This works only with function declaration

  

**Types of Functions**



1) **Function Declaration**

```javascript
function functionName(zeroOrMoreArguments...) {
  // function body
}
```



2. **Function Expression**

```javascript
let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();
```

- Function expressions have one key difference from a function  declaration: you cannot invoke a function expression before it appears  in your program.

- Our example declares a variable named `greetPeople` and assigns it to the function expression after the `=` sign. We can do that since JavaScript functions are **first-class functions**.

  - We can actually assign another variable to the function name and call the function by the other variable name 

    - ```javascript
      function foo(bar) {
        console.log(bar, bar, bar);
      }
      
      let bar = foo;
      
      foo("hello"); // prints "hello hello hello"
      bar("hi");    // prints "hi hi hi
      ```

  - The critical feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call.

```javascript
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
```

- Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. Even  wrapping what looks like a function declaration in parentheses creates a function expression:

3. **Arrow Function**

   ```javascript
   let greetPeople = () => console.log("Good Morning!");
   greetPeople();
   
   let add = (a, b) => a + b;
   
    - Implicit Returns 
    - We can omit it in arrow functions *when and only when the function body contains a single expression that is not itself surrounded by curly braces* (the expression may have subexpressions, but the entire expression must evaluate to a single value). 

```javascript
let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));
```



**Call Stack**

- The call stack puts information about the current function on the top of the stack, then removes that information when the function returns.

```javascript
function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();
```

- *Stack Frame*- that represents the global (top-level) portion of the program.
- *Initial Stack Frame*- sometimes called the `main` function. JavaScript uses this frame to keep track of what part of the main program it is currently working on.

| Call Stack |
| :--------: |
|     -      |
|     -      |
|     -      |
|    main    |

The call stack has a limited size that varies based on the JavaScript implementation. That size is usually sufficient for more than 10000  stack entries. If the stack runs out of room, you will see a `RangeError` exception together with a message that mentions the stack.











**Nullish Coalescing Operator**

- Nullish is `null` or `undefined`

  - The **nullish coalescing operator** evaluates to the right-hand operand if the left-hand operand is **nullish** (either `null` or `undefined`). Otherwise, it evaluates to the value of the left-hand operand.

  - ```javascript
    > null ?? "over here!"
    = 'over here!'
    
    > undefined ?? "pick me!"
    = 'pick me!'
    
    > false ?? "not me"
    = false
    
    > 0 ?? "not me either"
    = 0
    ```

  -  `||` will return the right-hand operand if the left operand is a falsy value. 

  -  `??` will return the right-hand operand if the left operand is nullish. 

```javascript
> null ?? "over here!"    // does not short-circuit
= 'over here!

> undefined ?? "pick me!" // does not short-circuit
= 'pick me!'

> false ?? "not me"       // short-circuits
= false

> 0 ?? "not me either"    // short-circuits
= 0
```

- `??` is most useful when dealing with code that could result in `undefined` or `null`, and you want to handle the situation gracefully:

**Operator Precedence**

JavaScript has a set of **precedence** rules it uses to  evaluate expressions that use multiple operators and sub-expressions.  The following is a list of the comparison operations from the highest  precedence (top) to lowest (bottom).

-   `<=`, `<`, `>`, `>=` - Comparison
-   `===`, `!==`, `==`, `!=` - Equality
-   `&&` - Logical AND
-   `||` - Logical OR

For the moment, let's ignore the fact that both `||` and `&&` are short-circuit operators. The program first evaluates the `y && z` sub-expression since `&&` has higher precedence than `||`. It then takes the result of that evaluation and evaluates `x || result`.

We can use parentheses to override the precedence: sub-expressions in  parentheses get evaluated before un-parenthesized expressions at the  same depth in the main expression.

you should strive to use parentheses in any expression that uses two or more different operators.

JavaScript evaluates parentheses in the usual algebraic order. That is,  it evaluates the expression in the innermost set of parentheses first,  then works its way out to the outermost part of the expression. When  multiple parenthesized subexpressions appear at the same depth, it  evaluates them from left to right. Once it evaluates the parenthesized  expressions, it evaluates the final expression value.

- remember that short-circuit evaluation may prevent JavaScript from  evaluating the expression to the right of the operator, but the  precedence rules remain the same.













**For Loop**

- Same purpose at `while` loop with a condensed syntax that works well when iterating over arrays and other sequences 
- A `for` loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:
- All 3 components of the `for` loop are optional
- for ([initialExpression]; [condition]; [incrementExpression]) {  statement }
  - A good way to write this:
    - In our solution code, we initialize `i` to 10, and decrement `i` by 1 on each iteration, using the short-hand expression `i -= 1`. Once `i` is equal to 0, the condition provided to our `for` loop is false and the loop terminates. Finally, we log `'Launch!'`.


```javascript
// put initialization outside of the loop


let index = 0;
for (; index < 10; index += 1) {
  console.log(index);
}

// manually check condition and break out of the loop
// If you omit the condition component in the "for", JavaScript assumes true

for (let index = 0; ; index += 1) {
  if (index >= 10) {
    break;
  }

  console.log(index);
}

// manually increment the iterator

for (let index = 0; index < 10; ) {
  console.log(index);
  index += 1;
}
```



```javascript
for (initialization; condition; increment) {
  // loop body
}
```

Similar to:

```javascript
initialization;
while (condition) {
  // loop body
  increment;
}
```

but with different scope of of variable declared by initialization clause.

In the `while` statement, the scope includes the code that surrounds the loop; in the `for` statement, the scope is the `for` statement and its body.

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

1.  Execute the initialization statement. Note that the statement may include variable declarations.
2.  Evaluate the condition. The loop terminates if the condition has a falsy value.
3.  Execute the body of the loop.
4.  Execute the increment expression.
5.  Return to step 2 for the next iteration.

- `for` loops let you see and understand the looping logic at a single glance. The syntax also lets you move the `index` variable from the global scope into the scope of the `for` statement, and it helps make your code cleaner and more organized.









**++/--**

increment operator/decrement operator 

```javascript
> let a = 1;
> ++a;  //returns next number (post-increment) If the operator appears before the operand, JavaScript modifies the operand, then evaluates the expression. 
= 2

> a
= 2

> a++ //returns same number (pre-increment)  If the operator appears after the operand, JavaScript evaluates the expression, then modifies the operand. postfix increment operator 
= 2

> a
= 3
```

```javascript
**SHOULD ONLY BE USED FOR THIS!

for (var index = 0; index < 5; ++index) {
  // body of loop
}
```



- Javascript also uses 

  - **Array looping abstractions** (prefererred)

    - **Array Iteration**

      - One way is to use the built-in `forEach` method for arrays:

      - ```javascript
        let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
        
        names.forEach(function(name) {
          console.log(name);
        });
        ```

      - a *function expression* is being passed (function has a `(` in front of it)) as an argument to `forEach`

      - It's an anonymous function (no name)

        - first class function! They are values, you can assign them to variables, pass them around as arguments to other functions, or even use them as return values in other functions 

        - When you pass a function as an argument to another function, that other  function can call the function represented by the argument. 

        - For each name, `forEach` invokes the anonymous function with the name as an argument

        - Also written:

        - ```javascript
          let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
          
          names.forEach(name => console.log(name));
          ```

          

  - **Recursion**

    - **Recursive** functions are functions that call themselves. Such code doesn't look much like a loop, but there's a close  relationship between loops and recursion.

    - ```javascript
      function doubler(number) {
        console.log(number);
      
        if (number <= 50) {
          doubler(number * 2);
        }
      }
      
      doubler(5); // => 5
                  // => 10
                  // => 20
                  // => 40
                  // => 80
      
      function fibonacci(number) {
        if (number < 2) return number; // 0 if number is 0, 1 if number is 1
        return fibonacci(number - 1) + fibonacci(number - 2);
      }
      
      console.log(fibonacci(6));  // => 8
      console.log(fibonacci(20)); // => 6765
      ```

    - Every recursive function has a **baseline condition** that marks the end of the recursion (`number < 2` in our code) and some code that recursively calls the function with a  new argument. In most cases, the baseline condition returns a concrete  value that gets reused as the code "unwinds" the recursive calls. Each  unwind step uses the previous return value(s) to calculate an  intermediate result that gets returned in the next step





**Arrays**

array methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



| Mutating method                                              | Non-mutating alternative                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`copyWithin()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | No one-method alternative                                    |
| [`fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | No one-method alternative                                    |
| [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | [`slice(0, -1)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) |
| [`push(v1, v2)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | [`concat([v1, v2\])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) |
| [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) | [`toReversed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed) |
| [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | [`slice(1)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) |
| [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | [`toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) |
| [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | [`toSpliced()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) |
| [`unshift(v1, v2)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | [`toSpliced(0, 0, v1, v2)`]                                  |

- An array is an ordered list of **elements**; each element has a value of any type. You can define an array by placing a list of values between brackets (`[]`): 	 - bracket is an operator not a method 

- Arrays can be **heterogeneous** with different data types and each element has a unique index (indexed lists)

- ```javascript
  > myArray[0]
  = 2
  
  > myArray[myArray.length - 1]
  = 'another string'
  ```

- *Replacing and Adding Elements with []*

  - ```javascript
    > let array = [1, 2, 3]
    > array[1] = 4 //brackets ([]) with the assignment operator:
    = 4
    
    > array
    = [ 1, 4, 3 ]
    ```

  - Note that variables declared with `const` and initialized to  an array are a little strange; while you can't change what array the  variable refers to, you can modify the array's contents: Essentially, a `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing

  - ```javascript
    > const MyArray = [1, 2, 3]
    > MyArray[1] = 5
    > MyArray
    = [1, 5, 3]
    
    > MyArray = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.
    ```

  - If you want the elements of the array to also be `const`, you can use the `Object.freeze` method:

  - ```javascript
    > const MyArray = Object.freeze([1, 2, 3])
    > MyArray[1] = 5
    > MyArray
    = [1, 2, 3]
    ```

  - It's important to realize that `Object.freeze` only works one level deep in the array. If your array contains nested arrays or other  objects, the values inside them can still be changed unless they are  also frozen:

  - ```javascript
    > const MyArray = Object.freeze([1, 2, 3, [4, 5, 6]])
    > MyArray[3][1] = 0
    > MyArray
    = [1, 2, 3, [4, 0, 6]]
    
    // const MyArray = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])])
    ```

  - *push*

    - returns the new length of the array

    - can push multiple 

    - ```javascript
      > array.push('a')
      = 5               // the new length of the array
      
      > array
      = [ 1, 4, 3, 10, 'a' ]
      
      > array.push(null, 'xyz')
      = 7
      
      > array
      = [ 1, 4, 3, 10, 'a', null, 'xyz' ]
      ```

    - appends argument to the caller (mutates the caller)

    -  Don't forget that methods and functions perform actions and return values.

  - *concat*

    - Non-mutating version of `push`

    - returns a brand new array that contains the original array with all arguments passed to it 

    - ```javascript
      > array.concat(42, 'abc')
      = [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]
      
      > array
      = [ 1, 4, 3, 10, 'a', null, 'xyz' ]
      ```

  - *pop*

    - Mutating way to remove last element

    - returns popped element

    - ```javascript
      > array.pop()
      = 'xyz'            // removed element value
      
      > array
      = [ 1, 4, 3, 10, 'a', null ]
      ```

  - *splice*

    - The `splice` method lets you remove one or more elements from an array, even those that aren't at the end of the array:

    - mutates and takes two arguments (index and number of elements to delete)

    - Splice also lets you add elements and still returns the spliced out elements only 

      - ```javascript
        months.splice(4, 1, 'May');
        // Replaces 1 element at index 4, you can put 0 here if you dont want to replace any and you can even add a bunch of elements
        console.log(months);
        // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
        
        ```

      - 

    - returns a new array with deleted elements

    - ```javascript
      let array = [1, 4, 3, 10, "a", null];
      
      > array.splice(3, 2)
      [ 10, 'a' ]
      
      > array
      = [ 1, 4, 3, null ]
      ```

  - *Iterate with `forEach`*

    ​	- `forEach` works well when you want to use the values of an array's elements...returns `undefined`

  - To use `forEach`, you need a **callback** function that you pass to `forEach` as an argument. A callback function is a function that you pass to  another function as an argument. The called function invokes the  callback function when it runs. The `forEach` method invokes its callback once for each element, passing it the element's value as an argument. `forEach` always returns undefined.


  *for...of*

  ```javascript
  let a = [1,2,3]
  for (let i of a) {
    console.log(i)
  } //1,2,3
  
  
  for (let i in a) {
    console.log(i)
  } //0,1,2
  ```

  

  

  - ```
    (element, index, array) you can access the array and the element
    ```

    

    - A callback is a function that you pass to another function as an  argument. The called function subsequently invokes the callback function at certain times while it runs.

    - This code invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element's value as an argument. The callback then logs it to the console. In the end, `forEach` returns `undefined`.

    - ```javascript
      let array = [1, 2, 3];
      array.forEach(function(num) {
        console.log(num); // on first iteration  => 1
                          // on second iteration => 2
                          // on third iteration  => 3
      }); // returns `undefined`
      ```

    - We can also use an arrow function instead of a function expression,  which makes our code compact and, when you're familiar with the syntax,  more readable.

    - ```javascript
      let array = [1, 2, 3];
      array.forEach(num => console.log(num));
      ```

  - *map*

    - Transform array with `map`

    - Suppose, though, that you want to create a new array whose values depend on the original contents of the array.

    - ```javascript
      > let numbers = [1, 2, 3, 4]
      > let squares = numbers.map(num => num * num);
      > squares
      = [ 1, 4, 9, 16 ]
      
      > squares = numbers.map(num => num * num);
      = [ 1, 4, 9, 16 ]
      ```

    - `map` returns a new array that contains one element for each element in `numbers`, with each element set to the return value of the callback: the squares of the numbers in this case. 

    - the callback doesn't update `squares` (the return value of `map` does that), and we don't have to reset the variable if we rerun the same code.

  - Difference between `forEach` and `map`

    - `forEach` and `map` are important methods, but they can confuse beginners. The main thing to remember is that `forEach` performs simple iteration and returns `undefined`, while `map` transforms an array's elements and returns a new array with the transformed values.

- *Filter* (like select)

  - The `filter` method is another array iteration method. It  returns a new array that includes all elements from the calling array  for which the callback returns a truthy value.

  - ```javascript
    > let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
    > numbers.filter(num => num > 4)
    = [ 5, 6, 7, 8, 9, 10 ]
    
    > numbers
    = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
    ```

  - During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing

  - it returns the array of *selected* elements: the elements for which the callback returned a truthy value- doesn't mutate the caller 

- *reduce*

  - reduces the contents of an array to a single value. 

  - `reduce` takes two arguments: a callback function and a value that initializes something called the **accumulator**. In its simplest form, the callback function takes two arguments: the  current value of the accumulator and an element from the array. It  returns a value that will be used as the accumulator in the next  invocation of the callback

  - ```javascript
    > let arr = [2, 3, 5, 7]
    > arr.reduce((accumulator, element) => accumulator + element, 0)
    = 17
    
    > arr.reduce((accumulator, element) => accumulator * element, 1)
    = 210
    ```

  - The first invocation computes the sum of all the values in the array, e.g., `2 + 3 + 5 + 7`. To get us started, we initialize the accumulator to 0. Thus, on the first invocation of the callback function, `accumulator` is `0` and `element` is `2`. The callback returns `2`, which becomes the new `accumulator` value when we invoke the callback again, this time with the element `3`. That invocation, in turn, returns `5`. This process continues until the final return value is `17`.

  ```javascript
  > let strings = ['a', 'b', 'c', 'd']
  > strings.reduce((accumulator, element) => {
  ...   return accumulator + element.toUpperCase()
  ... }, '');
  = 'ABCD'
  ```

- Arrays are objects 

- ```javascript
  > let arr = [1, 2, 3]
  > typeof arr
  = 'object'
  
  > let arr = [1, 2, 3]
  > Array.isArray(arr)
  = true
  ```

- If you change an array's `length` property to a new, smaller value, the array gets truncated; JavaScript removes all elements beyond the new final element.

  If you change an array's `length` property to a new, larger value, the array expands to the new size. The new elements **do not get initialized**, which leads to some strange behavior:



```javascript
> let arr = []
> arr.length = 3
> arr
= [ <3 empty items> ]

> arr[0]
= undefined

> arr.filter(element => element === undefined)
= []

> arr.forEach(element => console.log(element)) // no output
= undefined

> arr[1] = 3
> arr
= [ <1 empty item>, 3, <1 empty item> ]

> arr.length
= 3

> arr.forEach(element => console.log(element))
= 3
= undefined

> Object.keys(arr)
= ['1']

> arr = [1, 2, 3]
= [ 1, 2, 3 ]




These "elements" aren't true elements; they are properties on the array object, which we'll discuss later. Only index values (0, 1, 2, 3, and so on) count toward the length of the array. There is a slight nuance here: the added element becomes part of the "array object," but it isn't properly one of the array elements. The digits.length property, for instance, remains unchanged.

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= 'pi'

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
```

- Since arrays are objects, you can use the `Object.keys`  method to return an array's keys -- its index values -- as an array of  strings. Even negative, non-integer, and non-numeric indexes are  included.

- ```javascript
  > arr = [1, 2, 3]
  > arr[-3] = 4
  > arr[3.1415] = 'pi'
  > arr["cat"] = 'Fluffy'
  > arr
  = [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
  
  > Object.keys(arr)
  = [ '0', '1', '2', '-3', '3.1415', 'cat' ]
  ```

- One quirk of this method is that it treats unset values in arrays differently from those that merely have a value of `undefined`. Unset values are created when there are "gaps" in the array; they show up as empty items until you try to use their value:

- ```javascript
  > let a = new Array(3);
  > a
  = [ <3 empty items> ]
  
  > a[0] === undefined;
  = true
  
  > let b = [];
  > b.length = 3;
  > b
  = [ <3 empty items> ]
  
  > b[0] === undefined;
  = true
  
  > let c = [undefined, undefined, undefined]
  > c
  = [ undefined, undefined, undefined ]
  
  > c[0] === undefined;
  = true
  ```

- ```javascript
  > let aKeys = Object.keys(a)
  > a.length
  = 3
  > aKeys.length;
  = 0
  
  > let bKeys = Object.keys(b)
  > b.length
  = 3
  > bKeys.length;
  = 0
  
  > let cKeys = Object.keys(c)
  > c.length
  = 3
  > cKeys.length;
  = 3
  ```

- So it looks like `length` will count empty but and. Undefined, but won't count things defined with keys...?

- And `Object.keys` doesnt count anything empty, but counts everything else 

- Negative and non-integer indexes don't get taken into account when determining an array's length.

- **equality**

  - ```javascript
    > [1, 2, 3] === [1, 2, 3]
    = false
    
    > let a = [1, 2, 3]
    > let b = a
    > a === b
    
    ```

  - JavaScript treats two arrays as equal only when they are the same array: they must occupy the same spot in memory. This rule holds for  JavaScript objects in general; objects must be the same object. For this reason, the second example returns `true` while the first one returns `false`. Assigning `a` to `b` makes `b` refer to the same array as `a`; it doesn't create a new array.

*some*

- tests whether at least one element in the array passes the test implemented by the provided function\. Returns true if in the array it finds an element for which the provided function returns are true

- ```javascript
  const ARRAY = [1,2,3,4,5];
  
  const EVEN = (element) => element % 2 === 0;
  
  console.log(array.some(EVEN)); //true
  ```

*sort*

- Mutating (default ascending)

- ```javascript
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort();
  console.log(months);
  // Expected output: Array ["Dec", "Feb", "Jan", "March"]
  
  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);
  // Expected output: Array [1, 100000, 21, 30, 4]
  ```

- How to sort numbers correctly

  ```javascript
  > a.sort((a,b)=>a-b)
  ```


*rest parameter syntax*

```javascript
function concat(...args) {
  
  ...args becomes an array you can iterate through
  for (let arg of args) {
    
  }
  
  function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
  
  //turns into 
  
function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
```



*includes*

- The `includes` method determines whether an array includes a given element:

```javascript
> let a = [1, 2, 3, 4, 5]
> a.includes(2)
= true

> a.includes(10)
= false
```

*indexOf*

- The `indexOf` method searches an array for an element with a  given value and returns the index of the found element. If the element  is not found, `indexOf` returns `-1`.

```javascript
> let a = ['a', 'b', 'c', 'd', 'e','a']
> a.indexOf('c')
= 2

>a.indexOf('a',2)
=5

> a.indexOf('x')
= -1
```

- As with `includes`, `indexOf` internally uses `===` to compare elements of the array with the argument. That means we can't use `indexOf` to check for the existence of a nested array or an object unless we  have a reference to the same object or array we're looking for:

- By default, `indexOf` only looks for the first occurrence of a value in the array. If you want to look beyond the first occurrence, you need to give `indexOf` a starting index:

- ```javascript
  > let a = ['a', 'b', 'c', 'b', 'e']
  > a.indexOf('b')
  = 1
  
  > a.indexOf('b', 2)
  = 3
  
  >a.lastIndexOf('b')
  =3
  ```



- *sort*
- The `sort` method is a handy way to rearrange the elements of an array in sequence. It returns a sorted array. Mutates the caller 

```javascript
 > let a = ["e", "c", "h", "b", "d", "a"]
> a.sort()
= [ 'a', 'b', 'c', 'd', 'e', 'h' ]
```

- *slice*

  - The `slice` method - not the `splice` method you  met earlier - extracts and returns a copied portion of the array. It  takes two optional arguments. The first is the index at which extraction begins, while the second is where extraction ends:

  - ```javascript
    > let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
    > fruits.slice(1, 3)
    = [ 'orange', 'banana' ]
    
    > fruits.slice(2) // second argument defaults to rest of array
    = [ 'banana', 'pear', 'apple' ]
    
    > fruits.slice() // no arguments duplicates the array
    = [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
    ```

- *reverse*

  - ```javascript
    > let numbers = [1, 2, 3, 4]
    > numbers.reverse()
    = [ 4, 3, 2, 1 ]
    
    > numbers
    = [ 4, 3, 2, 1 ]
    ```

  - Destructive/ mutates the array

  - ```javascript
    > let numbers = [1, 2, 3, 4]
    > let reversedNumbers = numbers.slice().reverse();
    > reversedNumbers
    = [ 4, 3, 2, 1 ]
    
    > numbers
    = [ 1, 2, 3, 4 ]
    ```

**Objects**

With objects, most interactions involve "keyed" access; that is, we use a key value to add, retrieve, modify, or delete a specific data item. Since each key is associated with a specific datum, we sometimes use the term "associative array" to refer to objects.

Use an `Object` if you need to access values based on the names of those values.

- **objects** that have **behavior** (they perform actions) and **state** (they have characteristics that distinguish between different objects). 

- Objects store a collection of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**. Contrast this with arrays, which associate values with ordered indexes.

- object's keys are strings or symbols, but the values can be any type,

  -   `1`

  -   `'1'`

  -   `undefined`

  -   `'hello world'`

  -   `true`

  -   `'true'`

    - All are valid keys because JS coerces the non-string key values to strings. `1`and `'1'` are the same and `true` and `'true'` are the same 

    - Be careful! 

      - ```javascript
        > let myObj = {}
        > myObj[true] = 'hello'
        > myObj['true'] = 'world'
        > myObj[true]
        = 'world'
        ```

        

- **object literal**

  - ```javascript
    let person = {
      name:    'Jane',
      age:     37,
      hobbies: ['photography', 'genealogy'],
    };
    
    > let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }
    ```

  - Braces (`{}`) delimit the list of key-value pairs contained by the object.

- access value by dot or bracket notation

  - ```javascript
    > person.name                 // dot notation
    = 'Jane'
    
    > person['age']               // bracket notation
    = 37
    ```

  - if you have a variable that contains a key's name, you must use bracket notation:

  - ```javascript
    > person.height = '5 ft'
    = '5 ft'
    
    > person['gender'] = 'female'
    = 'female'
    
    > person
    = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }
    
    > delete person.age
    = true
    
    > delete person['gender']
    = true
    
    > delete person['hobbies']
    = true
    
    > person
    = { name: 'Jane', height: '5 ft' }
    ```

  - *delete* keyword 

    -  removes the key-value pair from the object and returns `true` unless it cannot delete the property (for instance, if the property is non-configurable).
    -  If you use delete in an array it leaves a hole, use splice
  
  - Key-value pairs are also called object **properties** in  JavaScript. We can also use "property" to refer to the key name; the  meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.
  
  - If a variable declared with `const` is initialiAlso, you have now learned enough to be able to complete the following sets of exercises: the last four exercises from [JavaScript Basics](https://launchschool.com/exercise_sets/c39a2eed) and all of [Medium 1](https://launchschool.com/exercise_sets/41f68c21) and [Medium 2](https://launchschool.com/exercise_sets/646ece8b) from JavaScript Language Fundamentals, and [Easy 3](https://launchschool.com/exercise_sets/829c41b0), [Easy 4](https://launchschool.com/exercise_sets/b1647500), and [Easy 5](https://launchschool.com/exercise_sets/605aaeb8) from JS210 - Small Problems.zed with an  object, you can't change what object that variable refers to. You can,  however, modify that object's properties and property values:
  
  - ```javascript
    > const MyObj = { foo: "bar", qux: "xyz" }
    > MyObj.qux = "hey there"
    > MyObj.pi = 3.1415
    > MyObj
    = { foo: 'bar', qux: 'hey there', pi: 3.1415 }
    
    > MyObj = {} // Uncaught TypeError: Assignment to constant variable.
    ```
  
  - You can use `Object.freeze` with objects to freeze the property values of an object, just like you can with arrays:
  
  - ```javascript
    > const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
    > MyObj.qux = "hey there"
    > MyObj
    = { foo: 'bar', qux: 'xyz' }
    ```
  
  - Objects include, but aren't limited to, the following types:
  
    -   Simple Objects
  
    -   Arrays
  
    -   Dates
  
    -   Functions
  
      - This means that functions can be assigned to variables, passed to other functions as arguments, and returned by other functions. 
  
      - ```javascript
        function hello() {
          console.log("Hello there!");
        }
        
        hello();            // Prints "Hello there!"
        
        let greet = hello;  // `greet` now points to the `hello` function
        greet();            // Prints "Hello there!"
  
  - Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a `length` property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.
  
  - We can pass functions around as arguments...
  
    - Look at the `forEach` method..
  
    - ```javascript
      Array.prototype.forEach = function(callback) {
        for (let index = 0; index < this.length; index += 1) {
          callback(this[index]);
        }
      }
      
      let array = [1, 2, 3];
      array.forEach(function callback(value) { console.log(value) })
      ```
  
    - Takes a callback function as an argument and then calls that function once for each element 
  
  - We can also define functions to return other functions
  
    - ```javascript
      function greeter(greeting) {
        return function(name) {
          return console.log(`${greeting} ${name}`);
        }
      }
      
      let hello = greeter('Hello');
      let hi = greeter('Hi');
      
      console.log(hello('Trevor'));  // prints "Hello Trevor"
      console.log(hello('Ginni'));   // prints "Hello Ginni"
      console.log(hi('Spencer'));    // prints "Hi Spencer"
      console.log(hi('Grace'));      // prints "Hi Grace"
      ```
  
    - 

**Primitive Values**

- strings, numbers, booleans, `null`, `undefined`, bigints, and symbols.
- Primitive values are always immutable; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible
-  If a variable contains a primitive value, all you can do to that  variable is use it in an expression or reassign it: give it an entirely  new value. All operations on primitive values evaluate as new values.  Even something like `0 + 0` evaluates to a new value of `0`.

**Things that aren't primitive values or objects**

-   variables and other identifiers such as function names
-   statements such as `if`, `return`, `try`, `while`, and `break`
-   keywords such as `new`, `function`, `let`, `const`, and `class`
-   comments
-   anything else that is neither data nor a function



**Prototypes**

- An interesting and handy feature of JavaScript objects is that they can **inherit** from other objects

- When an object `bar` inherits from object `foo`, we say that `foo` is the prototype of `bar`

- The practical implication is that `bar` now has access to properties defined on `foo` even though it doesn't define those properties itself.

- inheritance lets one object use the properties defined by another object and that prototypes implement inheritance in JavaScript.

  - **Object.create**

    - static method that allows you to create a new object that inherits from an existing object 

    - `Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument.

    - ```javascript
      let bob = { name: 'Bob', age: 22 };
      let studentBob = Object.create(bob);
      studentBob.year = 'Senior';
      
      console.log(studentBob.name); // => 'Bob'
      ```

    - Our example creates a new object named `studentBob` that uses `bob` as its prototype. That is, it creates an inheritance relationship from `studentBob`, the **child** object, to `bob`, the **parent** object.

    - so studentBob just becomes an empty object and it's not the same as assigning the  variable studentBob directly to bob

IN RUBY 

```ruby
irb(main):013:0> x = 'hi'
=> "hi"
irb(main):014:0> y = String.new(x)
=> "hi"
irb(main):015:0> y
=> "hi"
irb(main):016:0> x = {hi:'you'}
=> {:hi=>"you"}
irb(main):017:0> x
=> {:hi=>"you"}
irb(main):018:0> y=Hash.new(x)
=> {}
irb(main):019:0> y
=> {}
irb(main):020:0> x
=> {:hi=>"you"}
irb(main):021:0> 

THIS IS WEIRD??????
```

So this is what's happening. in Ruby Hash.new accepts a value that will be returned when trying to access a non-existent key, but that value is not included in the new hash

**Iteration with objects**

1. `for/in loop`

   1. The syntax and semantics are easier to understand since you don't need  an initializer, ending condition, or increment clause.  Instead, the  loop iterates over all the keys in the object. In each iteration, it  assigns the key to a variable which you then use to access the object's  values. As always, seeing a concept in action is helpful:

   2. ```javascript
      let person = {
        name: 'Bob',
        age: 30,
        height: '6 ft',
      };
      
      for (let prop in person) {  //prop is the key so you could just print this too by putting console.log(prop)
        console.log(person[prop]);
      }                             // => Bob
                                    //    30
                                    //    6 ft
      ```

   3. We can't use dot notation here since `prop` is a variable that contains a property name. The name `prop` is not the actual property name. 

      1. When we write `person[prop]`, `prop` gets evaluated as a variable. Thus, `person[prop]` gets evaluated as `person['age']`, and that returns the value of the desired property.

   4. ```js
      let obj1 = { a: 1, b: 2 };
      let obj2 = Object.create(obj1);
      obj2.c = 3;
      obj2.d = 4;
      
      for (let prop in obj2) {
        console.log(obj2[prop]);
      }         // => 3
                //    4
                //    1
                //    2
      ```

      - Super weird behavior. It iterates over properties of object's prototypes as well 

      - The first two items output by the above code are the "own properties" of `obj2`, and those are followed by the properties of the prototype object (`obj1`).

      - We can use the `hasOwnProperty` method to get around that problem. It takes the name of a property and returns `true` if it is the name of one of the calling object's own properties, `false` if it is not.

      - ```javascript
        let obj1 = { a: 1, b: 2 };
        let obj2 = Object.create(obj1);
        obj2.c = 3;
        obj2.d = 4;
        
        for (let prop in obj2) {
          if (obj2.hasOwnProperty(prop)) {
            console.log(obj2[prop]);
          }
        } // => 3
          //    4
        ```

   - **Object.keys**

     - The `Object.keys` static method returns an object's keys as an array.

     - Note that `Object.keys` returns the object's own keys: it does not include any keys from the prototype objects.

     - ```js
       let person = {
         name: 'Bob',
         age: 30,
         height: '6 ft',
       };
       
       let personKeys = Object.keys(person);
       console.log(personKeys);          // => ['name', 'age', 'height']
       personKeys.forEach(key => {
         console.log(person[key]);
       });                               // => Bob
                                         //    30
                                         //    6 ft
       ```

  - you should only rely on the iteration order when you know that all of the keys will be alphabetic.

    - **Object.values**

      - ```js
        let person = { name: 'Bob', age: 30, height: '6ft' };
        let personValues = Object.values(person);
        console.log(personValues); // => [ 'Bob', 30, '6ft' ]
        ```

    - **Object.entries**

      - ```js
        let person = { name: 'Bob', age: 30, height: '6ft' };
        console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
        ```

    - **Object.assign**

      - ```javascript
        > let objA = { a: 'foo' }
        = undefined
        
        > let objB = { b: 'bar' }
        = undefined
        
        > Object.assign(objA, objB)
        = { a: 'foo', b: 'bar' 
           
           //to not mutate you can use {...objA, ...objB}
        ```
        
      - merge two or more objects into a single object. 

      - First object argument is mutated. so objA is now `{ a: 'foo', b: 'bar' }`

      - If this is an issue than assign an empty hash as the first argument as it can take multiple arguments
      
      - ```javascript
        > objA = { a: 'foo' }
        = undefined
        
        > objB = { b: 'bar' }
        = undefined
        
        > Object.assign({}, objA, objB)
        = { a: 'foo', b: 'bar' }
        
        > objA
        = { a: 'foo' }
        
        > objB
        = { b: 'bar' } 
        
        //This code mutates neither objA nor objB and returns an entirely new object.
        
        ```

  - Should I use an array or an object?

    - Do the individual values have names or labels? If yes, use an object. If the data doesn't have a natural label, an array should suffice.
    - Does order matter? If yes, use an array.
    - Do I need a *stack* or *queue* structure? Arrays are good at mimicking simple "last-in-first-out" stacks and "first-in-first-out" queues.

- **Write a hash as an Array**

  - Arrays use positive integers starting with `0` as indexes. An array also must have a `length` property.

  - ```javascript
    let myArray = {
      0: 'a',
      1: 'b',
      2: 'c',
      length: 3,
    };
    
    for (let i = 0; i < myArray.length; i += 1) {
      console.log(myArray[i]);
    }
    ```

    

- **Passing a function as an argument**

  - ```javascript
    function foo(bar) {
      console.log(bar());
    }
    
    foo();    // Should print 'Welcome'
    foo();    // Should print 3.1415
    foo();    // Should print [1, 2, 3]
    ```

  - ```javascript
    function foo(bar) {
      console.log(bar());
    }
    
    foo(function() { return "Welcome" });
    foo(function() { return 3.1415 });
    foo(function() { return [1, 2, 3] });
    ```

  

**Identifying all variables, object property names, primitive values, and objects**

```javascript
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
```

1. *Variables*

   1. hello
   2. howdy
   3. foo
   4. xyzzy
   5. greeting
   6. name

2. *Object Property Names*

   1. a
   2. b
   3. c
   4. d
   5. also indexes 0, 1, 2 for array

3. *Primitive Values*

   1. a
   2. b
   3. c
   4. d
   5. 1
   6. 2
   7. 3
   8. 4
   9. 5
   10. 'Hi'
   11. "Grace"
   12. " "
   13. also indexes 0, 1, 2 for array

4. *Objects*

   1. Function hello

   2. Function xyzzy

   3. ```js
      {}
      ```

   4. ```js
      [3, 4, 5]
      ```

   5. ```js
      { a: 1, b: 2, c: [3, 4, 5], d: {} }
      ```

```javascript
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');
```

1. *Variables*

   1. Bar
   2. arg1
   3. Arg2
   4. Foo
   5. qux
   6. Result

2. *Object Property Names*

   1. abc
   2. def
   3. ghi
   4. Jkl
   5. mno
   6. pqr
   7. Indexes for [1,2,3,[4,5,6]] so 0,1,2,3
   8. also indexes[4,5,6] so 0,1,2

3. *Primitive Values*

   1. 'Hello'
   2. 1,2,3,4,5,6
   3. Null 
   4. NaN
   5. 'Victor'
   6. 'Antonina'
   7. abc
   8. def
   9. ghi
   10. Jkl
   11. mno
   12. pqr
   13. 0,1,2,3 array indexes
   14. 0,1,2 nested array index

4. *Objects*

   1. Function bar

   2. qux

      1. ```js
         {
             abc: [1, 2, 3, [4, 5, 6]],
             def: null,
             ghi: NaN,
             jkl: foo,
             mno: arg1,
             pqr: arg2,
           };
         ```

   3. ```js
      [4, 5, 6]
      ```

   4. ```js
      [1, 2, 3, [4, 5, 6]],
      ```



**Variables as pointers**

- Developers sometimes talk about **references** instead of pointers

-  You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are  references. 

- Every  time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive  values, the variable's actual value gets stored in this allocated  memory.

- *Primitive Values and Reassignement*

  - Different than Ruby.... when primitive values are stored they are stored to different memory addresses and reassignement just changes the value in that space..it doesnt point to a new space

  - ```javascript
    > let a = 5
    > let b = a
    > a = 8
    > a
    = 8
    
    > b
    = 5
    ```

  - | Code        | address `a` | `a`  | address `b` | `b`  |
    | :---------- | :---------: | :--: | :---------: | :--: |
    | `let a = 5` |   `0x14`    | `5`  |             |      |
    | `let b = a` |   `0x14`    | `5`  |   `0x76`    | `5`  |

  - | Code        | address `a` | `a`  | address `b` | `b`  |
    | :---------- | :---------: | :--: | :---------: | :--: |
    | `let a = 5` |   `0x14`    | `5`  |             |      |
    | `let b = a` |   `0x14`    | `5`  |   `0x76`    | `5`  |
    | `a = 8`     |   `0x14`    | `8`  |   `0x76`    | `5`  |

- *Objects and Non-Mutating Operations*

  - What does that look like in the computer? As we learned earlier,  creating new variables causes JavaScript to allocate a spot in its  memory for the value. However, with objects, JavaScript doesn't store  the object's value in the same place. Instead, it allocates additional  memory for the object and places a pointer to the object in the  variable. Thus, we need to follow two pointers to get the value of our  object from its variable name. The process looks like this:

  - In this example, the variable `obj` is always at address `0x1234`. The value at that address is a pointer to the actual object. While the  pointer to the object can change -- we can see it change when `{ b: 2 }` is reassigned to `obj` -- `obj` itself always has the same address. 

  - | Code                  | variable | address  |  value   | referenced object |
    | :-------------------- | :------: | :------: | :------: | :---------------: |
    | `let obj = { a: 1 };` |  `obj`   | `0x1234` | `0x1120` |    `{ a: 1 }`     |
    | `obj = { b: 2 };`     |  `obj`   | `0x1234` | `0x2212` |    `{ b: 2 }`     |

  - Does this act more like Ruby?

    - ```javascript
      > let c = [1, 2]
      > let d = c
      > c = [3, 4]
      > c
      = [ 3, 4 ]
      
      > d
      = [ 1, 2 ]
      ```

    - | Code             | addr `c` -> pointer -> object | addr `d` -> pointer -> object |
      | :--------------- | :---------------------------: | :---------------------------: |
      | `let c = [1, 2]` | `0x28` -> `0x34` -> `[1, 2]`  |                               |
      | `let d = c`      | `0x28` -> `0x34` -> `[1, 2]`  | `0x68` -> `0x34` -> `[1, 2]`  |
      | `c = [3, 4]`     | `0x28` -> `0x24` -> `[3, 4]`  | `0x68` -> `0x34` -> `[1, 2]`  |

  - Mutating methods like `push`

    - ```javascript
      > let e = [1, 2]
      > let f = e
      > e.push(3, 4)
      > e
      = [ 1, 2, 3, 4 ]
      
      > f
      = [ 1, 2, 3, 4 ]
      ```

    - Pointers have a curious effect when you assign a variable that  references an object to another variable. Instead of copying the object, JavaScript only copies the pointer. Thus, when we initialize `f` with `e`, we're making both `e` and `f` point to the same array: `[1, 2]`. It's not just the same value but the same array in the same memory  location. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both `e` and `f`.

    - Some developers call this aliasing: `e` and `f` are aliases for the same value.

    - assignment of an array to another array doesn't create a new array, but instead copies a reference from the original array (`array1` above) into the target array

    - However, since primitive values are stored in the memory address  allocated for the variable, they can never be aliases for each other. If you give one variable a new primitive value, it doesn't affect the  other.

  - The takeaway of this section is that JavaScript stores primitive values  in variables. Still, it uses pointers for non-primitive values like  arrays and other objects.

  

  **Pass by Reference vs Pass  by Value**
  
  1. *Pass By Value*
  
     1. The concept of "pass-by-value" traditionally means that when you use a variable to pass an argument to a function, the function can't do anything that sets the original variable to a different value. No matter what happens in the function, the variable will still contain the same value that was passed to the function.
  
     2. ```javascript
        let word = 'Hello';
        
        function myFunc(param) {
          param = 'Goodbye';
        }
        
        myFunc(word);
        console.log(word); // 'Hello'
        ```
  
     3. The main underlying concept is the the way in which variables, including function parameters, act as pointers. 
  
  2. Pass By Reference

     1.  If JavaScript were purely pass-by-value, there wouldn't be any way for the function to change the original object. 
  
        1. When an operation within the function mutates its argument, it affects the original object.
  
     2. However, the matter is more complicated when using objects (arrays and plain objects for example). With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this *pass-by- value-of-the-reference* or *call-by-sharing*. Whatever you call it, the most important concept you should remember is:
  
     3. Functions and methods that mutate their callers are called destructive functions or methods.
  
     4. ```javascript
        function changeMyWords(words) {
          console.log(words);
          words[0] = 'Hi';
        }
        
        let myWords = ['Hello', 'Goodbye'];
        changeMyWords(myWords);
        console.log(myWords);
        ```
  
        1. This will log `['Hello', 'Goodbye']` and then `['Hi', 'Goodbye']` to the console.
  
           In this exercise, the `myWords` variable is initialized to an array containing two elements, the strings `'Hello'`and `'Goodbye'`. Because an array is a reference type rather than a primitive, when we pass `myWords` into the `changeMyWords` function invocation, this acts like *pass-by-reference*. The `myWords` variable and the `words`function parameter both point to the *same* array. When we initially log `words` on line 2 we see the same array elements from the array literal to which we initialized `myWords`. We then mutate the array on line 3 by assigning index `0` to the string `'Hi'`. When we subsequently log `myWords` on line 8, we see the mutated array.
  
  **Using for/in loop for array**
  
  ```javascript
  let arr = [ 10, 20, 30 ]
  for (let value in arr) {
    console.log(value);
  }
  // Output:  0
  //          1
  //          2
  //be careful bc these keys are now strings
  ```
  
  Iterates over indexes...
  
  so do the same:
  
  ```javascript for (let key in a) {
  for (let key in a) {
     console.log(a[key])
  }  
  ```
  
  

**THIS IS A MESS SO USE `for/of` for Arrays**

```javascript
let arr = [ 10, 20, 30 ]
for (let value of arr) {
  console.log(value);
}
// Output:  10
//          20
//          30
```

- We can also use this to iterate over strings!

  ```javascript
  let str = "abc";
  for (let char of str) {
    console.log(char);
  }
  // Output: a
  //         b
  //         c
  //if we use for/in this will also iterate over the index of letters
  ```

  

**`.test` in regex**

- ```javascript
  > /o/.test('bobcat')
  = true
  
  > /l/.test('bobcat')
  = false
  ```

**`.match` in regex**

- ```javascript
  > "bobcat".match(/x/)         // No match
  = null
  
  > "bobcat".match(/[bct]/g)    // Global match
  = [ 'b', 'b', 'c', 't' ]
  
  > "bobcat".match(/b((o)b)/)   // Singular match with groups
  = [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]
  ```

**Math**

```javascript
> Math.sqrt(36)
= 6

> Math.sqrt(2)
= 1.4142135623730951

> Math.PI
= 3.141592653589793

> console.log(Math.max(1, 6, 3, 2)); 
= 6
```



**Dates**

- You don't have to work that hard, however. JavaScript's `Date` constructor creates objects that represent a time and date. The objects provide methods that let you work with those values (0 = Sunday)

```javascript
> let date = new Date('December 25, 2012')
> date.getDay()
= 2
```



**Failing Silently**

- JavaScript is a forgiving language. It doesn't issue error messages in  scenarios that most other languages do. Instead, it "fails silently" by  returning a value like `NaN`, `undefined`, `null`, or even `-1`.

- There are some situations where JavaScript is less forgiving; that's where **exceptions** come into play. In such cases, JavaScript **raises an error**, or **throws an exception**, then halts the program if the program does not **catch** the exception

- **Exception handling** Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the `try/catch` statement to catch exceptions that the code in the `try` block raises, and lets the programmer deal with the problem in a way  that makes sense and perhaps prevents a catastrophic failure or nasty  bug.

- The reserved words `try` and `catch` (and sometimes `finally`) often occur in real-world JavaScript programs, so you should learn enough to understand what they do.

- ```javascript
  try {
    // perform an operation that may produce an error
  } catch (exception) {
    // an error occurred. do something about it.
    // for example, log the error
  } finally {
    // Optional 'finally' block; not used often
    // Executes regardless of whether an exception occurs.
  }
  ```

- 

```javascript
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    Something went wrong
    //    frank's name has 5 letters in it.
```

**Raise own exception**

```javascript
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // we're guaranteed to have a number here
}
```

- Don't raise exceptions for preventable conditions. Exceptions are for **exceptional circumstances**: situations that your program can't control very easily, such as not  being able to connect to a remote site in a web application. 

**Syntax Error**

- A special kind of exception occurs if the code can't be handled as valid JavaScript. 

- A `SyntaxError` is special in that it occurs immediately after loading a JavaScript program, but before it begins to run. Unlike a `TypeError` exception that is dependent upon runtime conditions, JavaScript detects syntax errors based solely on the text of your program. Since they are  detected before execution begins, you can't use a `try/catch` statement to catch one.

  -  A `SyntaxError` usually has nothing to do with the values of any of your variables. You can almost always spot the error visually.

  -  A `SyntaxError` can occur long after the point where the error was. In the above example, the error is on line 3 (a missing `{`), but the problem is reported on line 5. There can be many hundreds of  lines between the point where the error is and the point where  JavaScript detects it. Unfortunately, that's more common than you might  think, so be prepared for it.

  -  The code before and after the error does not run. That's because `SyntaxError`s are detected before a program begins running. This also shows that  there are at least two phases in the life of a program -- a preliminary  phase that checks for syntax errors, and an execution phase.

  - This also shows that there are at least two phases in the life of a  program -- a preliminary phase that checks for syntax errors, and an  execution phase.

    

**Stack Trace**

```javascript
TypeError: Cannot read property 'length' of undefined
    at names.forEach (repl:2:42)
    at Array.forEach (<anonymous>)
```

-  it reports the type of error that occurred, where it occurred, and how  it got there. Such error messages rely on JavaScript's call stack, which we discussed in [the Functions chapter](https://launchschool.com/books/javascript/read/functions#callstack).



**ECMAScript 6**, or **ES6** as it's commonly known, 





**-0 and 0**

```javascript
> 0 === -0
= true

> String(-0)
= '0'

> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true

>5/0
=Infinity

>5/-0
=-Infinity

>Infinity === -Infinity
=false
```



**Escape quote**

```javascript
let quote = '"It\'s hard to fail, but it is worse never to have tried to succeed." - Theodore Roosevelt';
```

```javascript
let quote = "\"It's hard to fail, but it is worse never to have tried to succeed.\" - Theodore Roosevelt";
```

- Use `\` for long strings to connect them (concatenate lines)

**Strings**

- Act like a collection of characters so they can be accessed as such

  - ```javascript
    'hello'.charAt(1);  // "e"
    ```

  - ```javascript
    'hello'[1];         // "e"
    ```

  - In Ruby [] bracket notation is a method, in JS it is an *operator*

  - Other methods:

    - ```javascript
      'hello'.length;     // 5
      
      x.indexOf('h')      // 0
      
      x.toUpperCase() 
      x.toLowerCase()
      ```

**Variables**

- Containers that hold data
-   JavaScript is case-sensitive; `myvariable` is not the same as `myVariable`.
-   Variable names can be of any length.
-   It must start with a Unicode letter, an underscore (`_`), or a dollar sign (`$`).
-   Succeeding characters must be Unicode letters, numbers, dollar signs, or underscores.
-   It must not be a [reserved word](http://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1.1).



1. Cant start with a number and cant include other symbols

- **What is *Variable Declaration?***

  - Variables should be declared

  - *Dyanmic Typing*

    - variable may refer to a value of any data typr and can be reassigned to a different type without error

  - After variables are declared, you can reassign using `=` operator 

    - An assignment is a standalone expression that gives a variable a new value; an initializer is the `=` combined with the expression to its right in a variable declaration.

    - A variable that is declared but not initialized or assigned a value has a value of `undefined`

    - ```javascript
      let myVariable = 'Hello, World'; //with initializer
      var otherVariable = 23;
      let anotherVariable = true;
      const FOO = 42;
      
      //or
      
      let number; //without initializer 
      
      number = 3;  // variable `number` is assigned with value 3
      ```

  - Primary declared using `let`, `const`, or `var` keywords

  - You must initialize a constant when you declare it bc you cant reassign a constant

    - ```javascript
      // single declaration
      let myVariable;
      
      // multiple declarations
      let myVariable;
      let otherVariable;
      let anotherVariable;
      
      // Constant declaration
      const FOO = 'hello';
      
      // var declaration
      var myVariable;
      ```

- **Declaring with `var`**

  -   `var` is the traditional way to declare variables in JavaScript. The `let` and `const` keywords were introduced in ES6.
  -   When possible, use `let` and `const`. Use `var` if you're working with a program that already uses `var` or if you need to support some very old execution environments.
  -   `var` is similar to `let` in the way it is used, but there are some important differences that we'll discuss later.



**Operators**

- Arithmatic, Comparison, Assignment, String, Logical

- Symbol that tells the computer to perform operations on values (operands)

  1. Arithmatic Operators:

     1. Take two numeric values as input and return a single numeric value 
  
     2. ```
        +`, `-`, `*`, `/`, `%`, `+=`, `-=`, `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=
        ```
  
     1. 
  
  3. Assignment Operators
  
     1. `=`
  
     2. assigns the value of the right operand to the left operand
  
     3. *Compound Assignment Operators*
  
        1. | Name                      | Shorthand Operator | Meaning   |
           | ------------------------- | ------------------ | --------- |
           | Addition Assignment       | a += b             | a = a + b |
           | Subtraction Assignment    | a -= b             | a = a - b |
           | Multiplication Assignment | a *= b             | a = a * b |
           | Division Assignment       | a /= b             | a = a / b |
           | Remainder Assignment      | a %= b             | a = a % b |
  
  3. String Operators 
  
     1. You can compare strings just as numbers using lexicographical ordering 
  
     2. ```javascript
        'a' < 'b';         // true
        'Ant' > 'Falcon';  // false
        // String comparisons use Unicode lexicographical ordering
        '50' < '6';        // true ('5' precedes '6' lexicographically)
        
        let a = 'Hello';
        a += ', world!';
        
        a;       // "Hello, world!"
        ```
  
     

**Alert method**

- `alert()`method displays a dialog with a message and an `OK` button. Click the `OK` button to dismiss the dialog. Use `alert` to notify the user of an event or item of interest, but don't need any input from the user. Try the following from your browser's JavaScript console:

- ```javascript
  alert('Hello, world');            // alert dialog box with a message
  alert();                          // an empty alert dialog box
  ```

- works in chrome browser



**WHY?**

- Does a declaration return undefined 

```javascript
> 5 * undefined
NaN
> let foo 
undefined
> 5 * let foo
5 * let foo
        ^^^

Uncaught SyntaxError: Unexpected identifier 'foo'

```

- With prompt if you don't input anything it returns `null`.

  If you use template literals in node it actually logs `null` but in the chrome console it doesnt log anything 

**Console.log**

The `console.log` method outputs a message to the JavaScript console. You should use this method for debugging purposes; users usually don't look at the console when they use browsers.





**BigInt**

- If you want to display a number not in floating point notation than you can append an `n` to tghe end of the operands 

- ```javascript
  > 23n ** 17n    // 141050039560662968926103n
  ```

**Replace**

```javascript
const nonSpace = /\s/g
const nonAlpha = /[^a-z]/gi

const charCount = phrase.length;
const nonSpaceCount = phrase.replace(nonSpace, '').length;
const alphaCount = phrase.replace(nonAlpha, '').length;
```



**`var` and Hoisting**

- EXAMPLES: https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

- Just a mental model

  - The behavior that we try to explain with hoisting is merely a consequence of JavaScript's two phases: the creation phase and execution phase.
    - **hoisting** is the process of finding and associating variable declarations with their respective scope—prior to the execution of all other code. In addition to variable declarations, the JavaScript interpreter also hoists function declarations. However, in contrast to how only the name of a variable is hoisted, with function declarations everything is hoisted, including both the function name and body. This means that the program can execute a function even before declaring it.

  - The creation phase prepares your code for execution. Each time it encounters a variable, function, or class declaration, it adds that identifier to the current scope. Depending on the declaration and where the declaration occurs, the identifier gets added to either the global scope or the local scope (which may be either a function or a block). Thus, at the end of the creation phase, JavaScript knows all of the identifiers in your program and what scopes each one belongs to.
  - When the execution phase occurs, JavaScript no longer cares about declarations. It does care about initialization and function/class definitions, but not the declarations themselves. The identifiers are already known, and their scope is already known. JavaScript merely needs to look up the identifiers as needed.
  - The JavaScript interpreter doesn't "immediately" execute all of a program's code line by line. Instead, it first goes over the code to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope. The assignment operation, however, is not hoisted.

  ex/ 

  ```javascript
  boo();
  
  function boo() {
    console.log("Boo!");
  }
  ```

  - During the creation phase, JavaScript only encounters one declaration: the `boo` function on line 3. It puts the name `boo` in the global scope. During the execution phase, the first thing that happens is that JavaScript encounters `boo()` on line 1. Since line 1 is in the global scope, JavaScript looks to the global scope for an identifier named `boo`. That name exists since it was found during the creation phase. Therefore, JavaScript only needs to call the `boo` function.

- What is hoisting?

  - JavaScript engines operate in two main phases: a **creation phase** and an **execution phase**.
  - The effect of this process is that all the declarations get hoisted -- raised, lifted, moved -- to the top of their defined scope

  

  - JavaScript hoists function declarations to the top of the scope; it hoists the entire function declaration, including the body:

  - Function declarations have function scope. That's another way of saying that hoisting also occurs with nested functions:

  - ```javascript
    console.log(getName());
    
    function getName() {
      return "Pete";
    }
    
    //gets turned into 
    
    function getName() {
      return "Pete";
    }
    
    console.log(getName());
    
    function foo() {
      return bar();
    
      function bar() {
        return 42;
      }
    }
    
    //Even though bar is declared at the end of foo, we can still call bar at the beginning of the function. That's because hoisting makes the bar declaration available throughout foo.
    ```

  - **Function expression and hoisting**

    - Function expressions often involve assigning a function to a declared variable. Therefore, the variables obey the usual hoisting rules for variable declarations. Thus:

    - ```javascript
      console.log(hello());
      
      var hello = function () {
        return 'hello world';
      };
      
      //is the same as
      
      var hello;
      
      console.log(hello());    // raises "TypeError: hello is not a function"
      
      hello = function () {
        return 'hello world';
      };
      ```

  - It's important to realize that **hoisting doesn't change the program**. It merely executes the program in a manner that acts as though it was changed.

  - When both a variable and a function declaration exist, you can assume that the function declaration is hoisted first; that is, the function declarations are hoisted above the variable declarations. Given the following code block:

  - ```javascript
    bar();              // logs undefined
    var foo = 'hello';
    
    function bar() {
      console.log(foo);
    }
    
    //is equivalent to this: 
    
    function bar() {
      console.log(foo);
    }
    
    var foo;
    
    bar();          // logs undefined
    foo = 'hello';
    ```

  

  

  

  *SUPER WEIRD*

  ```javascript
  bar();             // logs "world"
  var bar = 'hello';
  
  function bar() {
    console.log('world');
  }
  
  //becomes
  
  function bar() {
    console.log('world');
  }
  
  bar();
  bar = 'hello';
  ```
  
  ```javascript
  var bar = 'hello';
  bar();             // raises "TypeError: bar is not a function"
  
  function bar() {
    console.log('world');
  }
  
  //becomes
  
  function bar() {
    console.log('world');
  }
  
  bar = 'hello'; //becomes reassignement 
  bar();
  ```
  
  - Since function declarations are hoisted first, the variable declaration of the same name becomes redundant (notice that there is no longer a `var bar` in the code snippets). Since the variable declaration is redundant, what remains is the reassignment. Being a reassignment, this becomes a problem for snippet2, since `bar` will no longer be of type `function`, and therefore results in an error when we try to invoke `bar`. bc you cant declare a `let` or `const` variable and a function with the same name ....SO THIS ONLY WORKED AS REASSIGNEMENT BC ITS VAR NOT LET OR CONST
  
  

  
  
  - **Creation Phase**- 
    - before the execution phase begins, the creation phase does some preliminary work. One of those work items is to find all of the variable, function, and class *declarations*.
    -  That action seems to move the declarations to the top of their respective function or block: function-scoped declarations get moved to the top of the function, and block-scoped declarations get moved to the top of the block. This process is called **hoisting**.
  
  - **Execution Phase**- 
    - when the program runs code line-by-line.
  
- How do `var`, `let`, and `const` interact with hoisting? How do they differ?

- How do functions and classes interact with hoisting? How do they differ?

- What part does hoisting play in the way a specific program works?

- How does hoisting really work?





```javascript
var foo;
var bar = "qux";
```

Both of these statements create a variable. The first creates a variable named `foo`, but sets its value to `undefined`.



```javascript
var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43

let foo = 86;
console.log(global.foo); // undefined
```

- This example shows that using `var` at the top level of a program creates a property on the global object, e.g., `global` in Node or `window` in a browser. Thus, we can use `global.bar` to examine the value of `bar`. The `let` declaration doesn't add a new property to the global object (or any other object, for that matter). Since the property doesn't exist, we get `undefined` when we examine the value of `global.foo`.

- This behavior shows that `let` is safer than `var` at the top level of a program. Placing properties on the global object may lead to conflicts and bugs; `let` alleviates that issue.

  - If you declare a variable with `var` inside a function, the variable is **not** stored as a property of the global object or any other object.

  - ```javascript
    function foo() {
      var bar = 42;
      console.log(global.bar); // undefined
    }
    
    foo();
    ```

  - A much more significant difference is that `let` is **block-scoped**, while `var` is **function-scoped**.

- A block-scoped variable is only visible within the block where it is declared; in JavaScript, a block is code delimited by curly braces, `{...}`. (Remember: [not everything between braces is a block](https://launchschool.com/books/javascript/read/variables#variablescope).) A function-scoped variable is visible within the function where it is declared. This difference in scope can lead to unexpected behavior when using `var`:

- ```javascript
  function foo() {
    if (true) {
      var a = 1;
      let b = 2;
    }
  
    console.log(a); // 1
    console.log(b); // ReferenceError: b is not defined
  }
  
  foo();
  ```

  - The `var` statement creates a variable with function scope, while `let` creates a variable with block scope. Thus, `a` is available everywhere in the function, but `b` is only available in the block.

- Lets try this:

  - ```javascript
    function foo() {
      if (false) {
        var a = 1;
      }
    
      console.log(a); // undefined
    }
    
    foo();
    ```

  - Strangely, even though we don't execute the line where we declare it, the variable is still created and exists in the function.  Bc we dont run the initialization, `a` recieves a default value of `undefined`

- If you run this from a program and `node.js` then it wraps the code in a function and it is no longer defined in global so will output `undefined`

**HOISTING RULES TO LIVE BY**

- Whenever possible, use `let` and `const` instead of `var`: avoid the confusion and subtle behaviors that can occur with `var`.

- If you must use `var`, declare all of the variables at the top of the scope:

  ```javascript
  function foo() {
    var a = 1;
    var b = 'hello';
    var c;
  
    …
  }
  ```

- If you can use `let` and `const`, declare them as close to their first usage as possible:

  ```javascript
  function foo(bar) {
    console.log("Hello world!");
  
    let result;
    if (bar) {
      let squaredBar = bar * bar;
      result = squaredBar + bar;
    } else {
      result = "bar hasn't been set";
    }
  
    return result;
  }
  
  console.log(foo(3));           // 12
  console.log(foo(undefined));   // bar hasn't been set
  ```

- Declare functions before calling them:

  ```javascript
  function foo() {
    return 'hello';
  }
  
  foo();
  ```





- **Global Scope**

  - At the top level of a program -- outside of any function -- function scope refers to the entire file. Some people use the term **global scope** to refer to function scope at the top level.

  - However, it's important to realize that there are no declarations that explicitly create a variable in the global scope. All declarations create variables that either have function scope (`var`, `function`) or block scope (`let`, `const`, `class`). This can lead to some confusion. For instance, consider this top-level code:

  - ```javascript
    let foo = 1;
    console.log(foo);
    ```

  - `foo` is in the global scope in this code. However, it's declared with block scope by the `let` keyword. In fact, we can say that `foo` has block scope, but, in this case, that block scope just happens to coincide with global scope. We can also say that `foo` has global scope, but it was declared with block scope.

  - It helps to think of scope as having two separate but related definitions. One refers to how a variable is declared -- we'll call it the **declared scope** -- while the other concerns the visibility of a variable -- let's call it the **visibility scope**. Note that we're using these terms for convenience. You probably won't find either term used outside of Launch School.

    - **Declared** - Declared scope concerns how a variable is declared: `let`, `const`, `class`, `var`, or `function`.

      - The first three declare variables with block scope while the other two declare variables with function scope. 
      - We will typically talk about the declared scope when we discuss the scope that results from a declaration.

    - **Visibility** - 

      - Visibility scope concerns where a variable is visible. This can be either global scope or local scope (inside a function or a block). 

      - We will sometimes also talk about function and block scope when discussing the local visibility scope, though this is more about where the variable is visible rather than how it was declared. Thus, something declared with `let` can have function scope when talking about its visibility.

      - ```javascript
        let foo = 1;        // visibility scope is global
        var bar = 2;        // visibility scope is global
        
        if (true) {
          let foo = 3;      // visibility scope is local (block)
          var qux = 4;      // visibility scope is global
        }
        
        function bar() {    // visibility scope is global
          let foo = 5;      // visibility scope is local (function)
          var bar = 6;      // visibility scope is local (function)
        
          if (true) {
            let foo = 7;    // visibility scope is local (block)
            var qux = 8;    // visibility scope is local (function)
          }
        }
        ```

        







**What happens if you dont declare a variable with `let` `const` `var` or `function`?**

​	It becomes global 

```javascript
function hello() {
  a = 'hi';
}

hello();
console.log(a); //logs hi
```





**Closures**

- Closures let a function access a variable that was in scope at the function's definition point even when that variable is no longer in scope. 

-  Technically, they are a mix of lexical and runtime features, but it's easier to understand them as a purely lexical feature for now. They're an artifact of the code's structure, not how the code runs.

  

- What is a closure?

  -  Closures use the scope in effect at a function's definition point to determine what variables that function can access. What variables are in scope during a function's execution depend on the closure formed by the function's definition.
  - "the combination of a function and the lexical environment within which that function was [defined]."
  - You can think of closure as a function combined with any variables from its lexical scope that the function needs. In other words, if a function uses a variable that is not declared or initialized in that function, then that variable will be part of the closure (provided it exists).

- What is in a closure?

  - The closure essentially *closes over* its environment -- what's in scope. In effect, the function definition and its scope become a single entity called a closure. 
  - That is, the function can use variables from the lexical scope where the function was defined. **Even if those variables aren't in the lexical scope where you invoke the function, it can still access them.**
  - Note that closures only close over the variables that the function needs. If the function uses the variable `foo`, but the outer scope contains both `foo` and `bar`, only `foo` will be included in the closure.

- When is a closure created?

  - Closures are created when you define a function or method.

- What is the relationship between closures and scope?

  - When we say that a variable is no longer in scope, we mean that it isn't in scope at the point in your program where you invoke the function. However, closure and scope are lexical concepts. Where you invoke a function is unimportant; where you define the function is. A closure includes the variables it needs from the scope where you defined the function. Those variables may not be in scope when you invoke the function, but they're still available to the function.

- What do we mean when we say that closures are defined lexically?

  -  "the combination of a function and the lexical environment within which that function was [defined]." You can think of closure as a function combined with any variables from its lexical scope that the function needs. 

- What is partial function application?

  - ```javascript
    function add(first, second) {
      return first + second;
    }
    
    function makeAdder(firstNumber) {
      return function(secondNumber) {
        return add(firstNumber, secondNumber);
      };
    }
    
    let addFive = makeAdder(5);
    let addTen = makeAdder(10);
    
    console.log(addFive(3));  // 8
    console.log(addFive(55)); // 60
    console.log(addTen(3));   // 13
    console.log(addTen(55));  // 65
    ```

    - A function such as `makeAdder` is said to use **partial function application**. It applies some of the function's arguments (the `add` function's `first` argument here) when called, and supplies the remaining arguments when you call the returned function. Partial function application refers to the creation of a function that can call a second function with fewer arguments than the second function expects. The created function supplies the remaining arguments.
    - Partial function application is most useful when you need to pass a function to another function that won't call the passed function with enough arguments. It lets you create a function that fills in the gaps by supplying the missing elements. For instance, suppose you have a function that downloads an arbitrary file from the Internet. The download may fail, so the function also expects a callback function that it can call when an error occurs:
    - Partial function application requires a reduction in the **number of arguments** you have to provide when you call a function. If the number of arguments isn't reduced, it isn't partial function application. 





**Closure envelope model**

- When you define a function, JavaScript finds all of the variable names it needs from the lexical scope that contains the function definition. It then takes those names and places them inside a special "envelope" object that it attaches to the function object. Each name in the envelope is a pointer to the original variable, not the value it contains.

- It's important to remember that closure definitions are purely lexical. Closures are based on your program's structure, not by what happens when you execute it. Even if you never call a particular function, that function forms a closure with its surrounding scope.

- We usually think of variables as pointers to objects, not as something that we can point to. We can point to the object that a variable references, but we can't point to the variable. That's the way JavaScript is defined. However, internally, it can do anything it needs to do, including pointing to variables. In this case, it needs a pointer to the variable so that it can see any changes made to what the variable references or contains:

- ```javascript
  let numbers = [1, 2, 3];
  
  function printNumbers() {
    console.log(numbers);
  }
  
  printNumbers(); // => [ 1, 2, 3 ]
  
  numbers = [4, 5];
  printNumbers(); // => [ 4, 5 ]
  
  //or
  
  let number = 42;
  
  function printNumber() {
    console.log(number);
  }
  
  printNumber(); // => 42
  
  number = 3.1415;
  printNumber(); // => 3.1415
  ```

  - If the closure pointed to the value instead of the variable, it wouldn't be able to tell that we reassigned `numbers` on line 9. That is also true for primitive values: we need a pointer to the variable so the closure can see any changes.
  - When a function encounters a variable name during execution, it first looks inside its local scope for that name. If it can't find the name, it peeks inside the envelope to see whether the variable is mentioned there. If it is, JavaScript can follow the pointer and get the current value of the variable. In fact, this is how scope works in JavaScript: it first checks for local variables by a given name, then it looks to the closure if it can't find it.

  - **first-class value** or **first-class object** - Clearly, in JavaScript, primitive values, arrays, and objects all meet this criteria. What you might not realize is that functions also do.

    - They can be assigned to a variable or an element of a data structure (such as an array or object).
    - They can be passed as an argument to a function.
    - They can be returned as the return value of a function.

  -  Since functions can be treated as values, we can create functions that can take other functions as arguments and return other functions. That, in turn, allows for a more declarative and expressive style of programming.

  - ```javascript
    function foo() {
      let name = "Pete";
      return function() {
        console.log(name);
      };
    }
    
    let printPete = foo();
    printPete(); // Pete
    ```

    - In this example, we first call `foo` and capture its return value, a function that logs the value of the `name`variable defined in the lexical scope of `foo`. At a minimum, the closure formed by the returned function's definition contains a pointer to `name` in its envelope. That pointer means that `name`'s value won't get discarded (garbage collected -- we'll meet this concept later) when `foo` is done. Though `name` is out of scope when `foo` finishes, the returned function has an envelope that contains a pointer to `name`. Thus, the function can still follow the pointer to the original variable, and find its current value, and that lets `printPete()` print `Pete'.



https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

**Closures are good for:**

- Currying (a special form of partial function application)
- Emulating private methods
- Creating functions that can only be executed once
- Memoization (avoiding repetitive resource-intensive operations)
- Iterators and generators
- The module pattern (putting code and data into modules)
- Asynchronous operations





**How does Javascript look up a variable?**

- When a variable is referenced, JavaScript will first look for a variable with the same name in the current scope, then keep moving up through subsequent outer scopes until the variable is found. If JavaScript reaches the outermost (global) scope without finding the variable, a `ReferenceError` will be raised in most situations, but this is not always the case, as you will see in the next exercise.
- What if ther is no variable declaration?
  - Notice that on line 2 there is no variable declaration for `myVar` (i.e., there is no `var` keyword before `myVar`). As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds `myVar` to be a "property" of the *global* object. This is "almost" the same as if `myVar` was globally declared. We will discuss more about why this is "almost"—but not "exactly"—the same in a later course when we cover the global / `window` object.zxf

**Objects vs Primitive**

- Primitive values are *immutable*: you cannot modify them. Operations on these values return a new value of the same type.
- Objects are *mutable*: you can modify them without changing their identity. Objects contain data inside themselves; it's this inner data that you can change.

- Some of the built in objects share their names with some of the primitive data types (String and Number)- they are not the same

- They are primitive values so we cant theoretically call methods on them, so js temporarily coerces them into their object counterpart (object data type)

- undefined has no built in object counterpart and null

  - Null and undefined are not objects 

- With this, we have the benefit of not having to explicitly create the  object form of strings, numbers, and booleans to use methods on them.

- ```javascript
  let a = 'hi';                        // Create a primitive string with value "hi"
  typeof a;                            // "string"; This is a primitive string value
  
  let stringObject = new String('hi'); // Create a string object
  typeof stringObject;                 // "object"; This is a String object
  
  a.toUpperCase();                     // "HI"
  stringObject.toUpperCase();          // "HI"
  
  typeof a;                            // "string"; The coercion is only temporary
  typeof stringObject;                 // "object"
  ```



**Object Properties**

- Objects are containers for two things: data and behavior 

  - named items with values represent attributes of the object (associations between a name (or key) and a value)

    - These are properties 

    - Get values of an object property with `.propertyName`

      - ```javascript
        let animal = 'turtle';
        animal.length;          // 6
        
        let colors = {
          red: '#f00',
          orange: '#ff0',
        };
        
        colors.red;             // "#f00"
        
        'blue'.length;          // 4 - works with primitives too
        ```

      - You can set a new value for a property with assignment:

      - Methods are the behaviors

      - To call a method on an object you access it like a property bc it is! and then append () and even pass arguments 

        - methods are functions with some special behavior

        How to define methods in an object- dont use arrow functions 

        ```javascript
        let myObj = {
          foo(who) {
            console.log(`hello ${who}`);
          },
        
          bar(x, y) {
            return x + y;
          },
        };
        ```

  - Property Names and Values 

    - A property name for an object can be any valid string, and a property value can be any valid expression:

    - ```javascript
      let object = {
        a: 1,                           // a is a string with quotes omitted
        'foo': 2 + 1,                   // property name with quotes
        'two words': 'this works too',  // a two word string
        true: true,                     // property name is implicitly converted to string "true"
        b: {                            // object as property value
          name: 'Jane',
          gender: 'female',
        },
        c: function () {                // function expression as property value
          return 2;
        },
        d() {                           // compact method syntax
          return 4;
        }
      };
      ```

    - Access property values by dot notation or bracket notation
    
    - ```javascript
      let object = {
        a: 'hello',
        b: 'world',
      };
      
      object.a;                 // "hello", dot notation
      object['b'];              // "world", bracket notation
      object.c;                 // undefined when property is not defined
      
      let foo = {
        a: 1,
        good: true,
        'a name': 'hello',
        person: {
          name: 'Jane',
          gender: 'female',
        },
        c: function () {        // function expression as property value
          return 2;
        },
        d() {                   // compact method syntax
          return 4;
        }
      };
      
      foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
      foo['goo' + 'd'];         // true, bracket notation can take expressions
      let a = 'a';
      foo[a];                   // 1, bracket notation works with variables since they are expressions
      foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
      foo.c();                  // 2, Call the method 'c'
      foo.d();                  // 4, Call the method 'd'
      ```
    
    - Adding and updating properties 
    
    - ```javascript
      let object = {};              // empty object
      
      object.a = 'foo';
      object.a;                     // "foo"
      
      object['a name'] = 'hello';
      object['a name'];             // "hello"
      
      object;                       // { a: "foo", "a name": "hello" }
      ```
    
    - deleting properties (use `delete` keyword)
    
      - ```javascript
        let foo = {
          a: 'hello',
          b: 'world',
        };
        
        delete foo.a;
        foo;                      // { b: "world" }
        
        We can also use delete for arrays (use bracket notation)
        a = [1,2,3,4,5]
        delete a[1]
        ```

**Arrays Length Property**

- JS's built in Array methods (join, forEach, push, splice, etc) take the value of the length property into consideration while performing their operations 

- Referring to the [ECMAScript documentation](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4), here are some key points about `Array.length`:

  - Its value is always a non-negative integer less than 232 (roughly 4.2 billion).
  - The value of the `length` property is numerically one greater than the largest **array index** in the Array. If you take all of the property names from the Array that represent non-negative integer values, then the property name with the largest numeric value is the largest array index.
  - You can set the value of the `length` property explicitly.

-  ```javascript
   let myArray = [];
   myArray["foo"] = "bar";
   myArray[0] = "baz";
   myArray[1] = "qux";
   
   console.log(myArray); // logs ['baz', 'qux', foo: 'bar']
   myArray.length; // returns 2 since foo: 'bar' is not an element
   myArray.indexOf("bar"); // returns -1 since 'bar' isn't in an element
   
   myArray[-1] = "hello";
   myArray[-2] = "world";
   myArray.length; // returns 2
   myArray.indexOf("hello"); // returns -1 since 'hello' is not in an element
   // the fact that myArray[-1] is 'hello' is
   // coincidental
   myArray.indexOf("world"); // returns -1 since 'world' is not in an element
   
   console.log(myArray); // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
   Object.keys(myArray).length; // returns 5 (there are 5 keys at this point)
   myArray.length; // returns 2 (but only 2 keys are indexes)
   ```

- A property name is an array index when it is a non-negative integer. Values that have been assigned to index properties are called **elements** of the array. All other property names and their associated values are *not* considered to be elements of the array.

- `Array.prototype.indexOf` returns `-1` if the value it is passed is not an element of the array, even if the value is associated with a non-index property.

- The value of `length` is entirely dependent on the largest array index. In the code, the largest valid index is `1` (see line 4). Therefore, `length` returns `2` (`1 + 1`).

- Logging an array logs all the indexed values and every `key: value` pair that the object contains. It logs only the value (e.g., `'baz'`, `'qux'`) if it's an element. Otherwise, it logs the `key: value` pair (e.g., `foo: 'bar'`) if it isn't an element (see line 18).

- To count all of the properties in an Array object, use `Object.keys(array).length` (see line 19). Don't use `array.length`.

- Empty lines of Arrays:

  - You wont iterate over them in iterative methods but you will in for..of
  - empty slots do not count as elements bc they have never been assigned to a value, they're only there to indicate a gap in the actual elements
    - Object.keys(a) and Object.values(a) do not return empty slots

- - `in` operator 

    - ```javascript
      0 in [];      // false
      0 in [1];     // true
      
      //or be more clear This will work for non index keys 
       a[-3]='hi'
      'hi'
      > a
      [ 1, 2, <1 empty item>, 5, '-3': 'hi' ]
      > -3 in a
      true
      > 
      
      
      let numbers = [4, 8, 1, 3];
      2 < numbers.length;          // true
      ```

      

- Using arithmatic and Comparison operators with objects

- ```javascript
  Review 
  String([]) // ''
  String({}) // '[object Object]'
  
  
  [] + {};                  // "[object Object]" -- becomes "" + "[object Object]"
  [] - {};                  // NaN -- becomes "" - "[object Object]", then 0 - NaN
  '[object Object]' == {};  // true
  '' == {};                 // false
  false == {};              // false
  0 == {};                  // false
  ```

- When you use `{}` at the beginning of the code it can think its a function and do weird things 

  ```javascript
  {} + [];                  // 0 -- becomes +[]
  {}[0];                    // [0] -- the object is ignored, so the array [0] is returned
  { foo: 'bar' }['foo'];    // ["foo"]
  {} == '[object Object]';  // SyntaxError: Unexpected token ==
  ```

  - equal with the `==` and `===` only if they are the same object

  - ```javascript
    let a = {};
    let b = a;
    a == a;                   // true
    a == b;                   // true
    a === b;                  // true
    a == {};                  // false
    a === {};                 // false
    ```

  - So let's review

    - ```javascript
      > a.length=5
      5
      > a
      [ <5 empty items> ]
      > Object.keys(a)
      []
      > a=[]
      []
      > a[-5]=4
      4
      > a['hi']='there'
      'there'
      > a
      [ '-5': 4, hi: 'there' ]
      > a.length
      0
      > Object.keys(a)
      [ '-5', 'hi' ]
      > 
      
      ```

  - **Shallow copy of an array**

  - The critical thing to be aware of is what level you're working at, especially when working with nested collections and using variables as pointers. Are you working at the level of an outer array or object or at the level of an object within that?

    - ```javascript
      let a = [1,2,3,4,5]
      let b = a.slice() 
      
      //or
      
      let c = [...a]
      ```

    - But it shares copies of nested arrays (they are not copied if they are objects within the object)

    - ```javascript
      let arr = [['a'], ['b'], ['c']];
      let copyOfArr = arr.slice();
      
      copyOfArr[1].push('d');
      
      arr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
      copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
      
      let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
      let copyOfArr = [...arr];
      
      copyOfArr[1].d = 'qux';
      
      arr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
      copyOfArr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
      ```

    - **Assign**(also shallow)

      - As you can see, `Object.assign` copies over the properties from `obj2` into `obj1` and returns `obj1`. You might be able to see that we can use `Object.assign` to create a copy of an object by providing an empty object as the first argument:

    - ```javascript
      let obj1 = { a: 'foo' };
      let obj2 = { b: 'bar' };
      
      Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
      obj1; // => { a: 'foo', b: 'bar' }
      
      let obj = { a: 'foo', b: 'bar' };
      let copyOfObj = Object.assign({}, obj);
      
      copyOfObj; // => { a: 'foo', b: 'bar' }
      ```

- **Deep copy of an array**

​	-JavaScript doesn't have an explicit method or function for deep copying objects, but there is an indirect way to do it. However, it only works with nested arrays and plain objects. Objects that have methods and complex objects like dates or custom objects cannot be deep-cloned with this technique. Most use cases of deep copying objects involve only plain objects and arrays, so this technique is useful to learn:

```javascript
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
```

- The `JSON.stringify` method **serializes** any object, including arrays, that only have primitives, arrays, and plain objects as elements. Serializing involves converting an object to a string form that can be subsequently converted back into an identical object. The `JSON.parse` method performs that conversion from a string back to an object.

**Side Effects**

A function call that performs any of the following actions is said to have side effects:

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

      -  If the side effects can only be seen inside the calling function, then that side effect has no effect on whether the calling function has side effects. Consider this code:

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





**Math Object**

- deals with radians, not degrees/ Math.PI to convert from radians to degrees (1 radian = 180/PI)

  - ```javascript
    let radiansToDegrees = radians => radians / (Math.PI / 180);
    let radiansToDegrees = radians => (radians * 180) / Math.PI;
    ```

- `Math.abs(num)` converts any number to positive

- `Math.sqrt(4)` for square root 

- `Math.pow(4,2)` for power 4^2

- `Math.rount(3.49)` => 3 , `Math.floor(3.9)`=> 3, `Math.ceil(3.1)`=> 4

- Find random number between two numbers 

  - ```javascript
    const randomInt = function(min, max) {
      if (min === max) {
        return min;
      } else if (min > max) {
        let swap = min;
        min = max;
        max = swap;
      }
    
      let difference = max - min + 1;
      return Math.floor(Math.random() * difference) + min;
    };
    
    console.log(randomInt(1, 5));
    ```

**Date**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- `let today = new Date()`- gives today's date

- `today.getDay()` returns the day of the week numerically (sun is 0)

- ```javascript
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  let today = new Date() 
  let day = today.getDay() //sun is 0
  let dayOfMonth = today.getDate()
  let dayString = daysOfWeek[day]
  let month = today.getMonth() //jan is 0 
  let year = today.getFullYear()
  let time = today.getTime()
  
  console.log(`Today is ${dayString}`)
  ```

- ```javascript
  function formattedDate(date) {
    let day = formattedDay(date);
    let month = formattedMonth(date);
  
    console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
  }
  
  function formattedMonth(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    return months[date.getMonth()];
  }
  
  function formattedDay(date) {
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    return daysOfWeek[date.getDay()];
  }
  
  formattedDate(today);
  
  let tomorrow = new Date(today.getTime());
  
  tomorrow.setDate(today.getDate() + 1);
  formattedDate(tomorrow);
  
  let current = new Date();
  
  function timeOfDay(deltaMinutes) {
    current.setHours(0,deltaMinutes,0,0); 
    let minutes = String(current.getMinutes()).padStart(2,0);
    let hours = String(current.getHours()).padStart(2,0);
    
    console.log(`${hours}: ${minutes}`);
  }
  ```

- JavaScript has four (4) ways to [create a date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date#Syntax) object:

  1. `new Date();`
  2. `new Date(value);`
  3. `new Date(dateString);`
  4. `new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);`

  Passing in the date object directly also works (e.g., `new Date(today)`). However, this employs implicit coercion which we don't recommend. Using the `Date.prototype.getTime` method makes it clear what is going on.

- - They are not the same object 

  - ```javascript
    > today = new Date()
    2023-10-13T18:04:22.105Z
    > tomorrow = new Date(today)
    2023-10-13T18:04:22.105Z
    > console.log(today === nextWeek);
    false
    undefined
    > 
    
    //use .setDate to set the date   
    console.log(today.toDateString() === nextWeek.toDateString());
    
    nextWeek.setDate(today.getDate() + 7);
    
    console.log(today.toDateString() === nextWeek.toDateString());
    ```

  - ```javascript
    let today = new Date(2013, 2, 1, 1, 10)
    
    function formatTime(today) {
      let minutes = padding(String(today.getMinutes()))
      let hours = padding(String(today.getHours()))
    
      console.log(`${hours} : ${minutes}`)
    }
    
    function padding(chars) {
      chars = chars.length == 1 ? chars = chars.padStart(2,0) : chars
      return chars
    }
    
    formatTime(today)
    ```



**Arguments**

- The `arguments` object is an *Array-like* (more on this in a bit) local variable that is available inside all Functions. It contains all the arguments passed to the Function, no matter how many arguments you provided, and no matter how many arguments the Function's definition includes:

- ```javascript
  function logArgs(a) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length); //arguments also have a length property
  }
  
  logArgs(1, 'a');
  
  // logs:
  1
  a
  2
  
  > function trial() {
  ... console.log(arguments)
  ... }
  
  > trial()
  [Arguments] {}
  undefined
  ```

- ```javascript
  function logArgs() {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    arguments.pop();
  }
  
  logArgs(1, 2);
  
  // logs:
  object       // arguments is an "object"
  false        // but it is not an Array
  TypeError: Object #<Object> has no method 'pop' // and it doesn't have the usual Array methods
  ```

- Want to create an array of arguments?

  - ```javascript
    function logArgs() {
      let args = Array.prototype.slice.call(arguments); //creates array
      console.log(typeof args);
      console.log(Array.isArray(args));
      args.pop();
    }
    
    logArgs(1, 2);
    
    // logs:
    object
    true         // args is a proper Array now
    // think of this as "borrowing" the slice method from the Array global object. When we apply slice to the arguments object, it creates an Array that contains the same values as those present in arguments
    ```

  - *Rest Parameters: What and Why?*

    - -Essentially, `...args` tells JavaScript to expect an arbitrary number of arguments (0 or more), and to stick them in the actual array specified by `args`

    - Traditional Way 

      - while no "parameters" may not be explicitly defined for function, there are still "arguments" that are available locally within the function. This is because all functions have an [arguments object](https://launchschool.com/lessons/79b41804/assignments/55096c15) that is available locally. The `arguments` object contains an entry for every argument passed to the function.

      - ```javascript
        function sum() {
          let result = 0;
          for (let index = 0; index < arguments.length; index += 1) {
            result += arguments[index];
          }
        
          return result;
        }
        ```

    - Modern Approach `[...args]`

      - ```javascript
        function logArgs(...args) { // 3 periods followed by an array name
          console.log(args[0]);
          console.log(args[1]);
          console.log(args.length);
        }
        
        logArgs(1, 'a');
        
        // logs:
        1
        a
        2
        
        function logArgs(foo, bar, ...args) {
          console.log(foo);
          console.log(bar);
          console.log(args[0]);
          console.log(args[1]);
          console.log(args.length);
        }
        
        logArgs('oof', 'rab', 1, 'a');
        
        // logs:
        oof
        rab
        1
        a
        2
        ```

        

  - 



**Dot vs bracket notation**

- Bracket notation evaluates the expression within the bracket 
- Dot Notation only allows static keys while Bracket Notation accepts dynamic keys. Static key here means that the key is typed directly, while Dynamic key here means that the key is evaluated from an expression.

- If the property is a string value 

  - you cant do this myObj[a], you have to use myObj['a'] or myObj.a

  - if its a number you can do myObj['123'] or myObj[123] but not myObj.123

    

    To access the value of a property using bracket notation (e.g., `object[someKey]`), the operand inside the brackets that references the property name (key) must be a string value. If the operand is a number, JavaScript converts it to a string using the `Number.prototype.toString()` method. If the operand is a variable, JavaScript looks up the value (converting it to a string if necessary), then uses it as a key to get the corresponding property value. The expression `myObject[a]` raises a `ReferenceError` because JavaScript cannot find the value of the variable `a`, since it has not been declared.





**Object literal methods**

Just like functions, object literal methods must be *called* by appending parentheses (e.g., `person.firstName()`) in order to be executed. Functions are first-class objects, so referencing the function name without the parentheses would return the function itself, not the string representation:



**Identifier**

An **identifier** is a sequence of characters in the code that identifies a [variable](https://developer.mozilla.org/en-US/docs/Glossary/Variable), [function](https://developer.mozilla.org/en-US/docs/Glossary/Function), or [property](https://developer.mozilla.org/en-US/docs/Glossary/Property).

In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), identifiers are case-sensitive and can contain [Unicode](https://developer.mozilla.org/en-US/docs/Glossary/Unicode)letters, `$`, `_`, and digits (0-9), but may not start with a digit.

An identifier differs from a string in that a [string](https://developer.mozilla.org/en-US/docs/Glossary/String) is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifiers to strings, but sometimes it is possible to parse strings into identifiers.





**Code Linting**

- A process called "code linting" has emerged to help avoid the trickier, more dangerous, or less readable code.

- They do this by identifying stylistic, syntactic, and procedural errors that deserve attention.

- Code linting tools identify potential issues within your code.

- As useful as code linting tools are, ultimately, they only identify potential issues in existing code. To avoid writing problem code from the start, though, you need developer education. 

- https://github.com/airbnb/javascript

- **ESLint**

  - [ESLint](https://eslint.org/) is a static code analyzer for JavaScript; it analyzes your code and offers advice about style, format, coding practices, possible errors, and other problems
  - ESLint is what developers call a **linter**. Linters inspect your code for potential errors and "code smells," and for adherence to the best practice determined by developers over the years
  - Some of the most crucial rules in the best practice category apply to function length and complexity. A function that has many lines of code or that has complicated logic can be difficult to understand, maintain, and update

  ```
  $ npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev
  $ npx eslint -v
  v7.3.1
  $ npx eslint test.js //takes js file as an argument
  ```

  Put a `.eslintrc.yml` file in parent directory first 

  ​	- `npx eslint --fix example.js` to potentially fix a problem

  ex/ 

  ```yml
  //.eslintrc.yml
  
  
  root: true
  parser: babel-eslint
  parserOptions:
    ecmaFeatures:
      impliedStrict: true
  env:
    browser: true
    es6: true
    jest: true
    jquery: true
    node: true
  extends:
    - eslint:recommended
  globals:
    alert: true
    define: true
    document: true
    global: true
    location: true
    require: true
    window: true
    Handlebars: true
  rules:
    accessor-pairs: error
    array-callback-return: error
    arrow-spacing: error
    block-scoped-var: error
    brace-style:
      - error
      - 1tbs
      - allowSingleLine: true
    camelcase: error
    complexity: error
    consistent-return: error
    constructor-super: error
    eqeqeq: error
    id-length:
      - error
      - exceptions:
        - _
        - a
        - b
        - x
        - y
        - z
        min: 2
        properties: never
    indent:
      - error
      - 2
      - SwitchCase: 1
    keyword-spacing: error
    linebreak-style: error
    max-depth: error
    max-len:
      - error
      - code: 80
        tabWidth: 2
        ignoreRegExpLiterals: false
        ignoreStrings: true
        ignoreTemplateLiterals: true
        ignoreTrailingComments: true
        ignoreUrls: true
    max-lines-per-function:
      - error
      - max: 20
        skipBlankLines: true
        skipComments: true
    max-nested-callbacks:
      - error
      - max: 4
    max-statements:
      - error
      - max: 15
      - ignoreTopLevelFunctions: true
    max-statements-per-line: error
    new-parens: error
    no-array-constructor: error
    no-async-promise-executor: error
    no-bitwise: error
    no-buffer-constructor: error
    no-caller: error
    no-class-assign: error
    no-confusing-arrow:
      - error
      - allowParens: true
    no-console: 'off'
    no-const-assign: error
    no-constant-condition:
      - error
      - checkLoops: false
    no-debugger: 'off'
    no-dupe-class-members: error
    no-duplicate-imports: error
    no-eq-null: error
    no-eval: error
    no-extend-native: error
    no-implicit-globals: error
    no-implied-eval: error
    no-inner-declarations:
      - error
      - both
    no-iterator: error
    no-label-var: error
    no-lonely-if: error
    no-loop-func: error
    no-misleading-character-class: error
    no-mixed-operators: error
    no-multi-assign: error
    no-multi-str: error
    no-multiple-empty-lines: error
    no-nested-ternary: error
    no-new: error
    no-new-func: error
    no-new-object: error
    no-new-require: error
    no-new-symbol: error
    no-new-wrappers: error
    no-octal-escape: error
    no-process-env: error
    no-process-exit: error
    no-prototype-builtins: 'off'
    no-restricted-syntax:
      - error
      - message: Do not use `with` statement.
        selector: WithStatement
    no-return-assign: error
    no-return-await: error
    no-script-url: error
    no-self-assign:
      - error
      - props: true
    no-self-compare: error
    no-sequences: error
    no-shadow-restricted-names: error
    no-tabs: error
    no-template-curly-in-string: error
    no-this-before-super: error
    no-throw-literal: error
    no-trailing-spaces: error
    no-unmodified-loop-condition: error
    no-unneeded-ternary: error
    no-unused-expressions: error
    no-unused-vars:
      - error
      - args: all
        argsIgnorePattern: "^_"
        caughtErrors: all
        caughtErrorsIgnorePattern: "^_"
        vars: local
    no-use-before-define:
      - error
      - functions: false
    no-useless-call: error
    no-useless-catch: error
    no-useless-computed-key: error
    no-useless-rename: error
    no-useless-return: error
    no-with: error
    nonblock-statement-body-position: error
    one-var-declaration-per-line: error
    operator-assignment: error
    prefer-promise-reject-errors: error
    quote-props:
      - error
      - consistent-as-needed
    radix: error
    require-await: error
    require-yield: error
    semi:
      - error
      - always
      - omitLastInOneLineBlock: true
    semi-spacing: error
    semi-style: error
    space-before-blocks: error
    space-infix-ops: error
    space-unary-ops:
      - error
      - words: true
        nonwords: false
    vars-on-top: error
  ```

  

  **Strict Mode**

  - JavaScript ES5 introduced **strict mode**, which is an optional mode that modifies the semantics of JavaScript and prevents certain kinds of errors and syntax.

    

  - What is strict mode? How does it differ from sloppy mode?

    - Strict mode eliminates some **silent errors** that occur in sloppy mode by changing them to throw errors instead. Silent errors occur when a program does something that is unintended, but continues to run as though nothing is wrong. This can lead to incorrect results or errors much later in execution that are subsequently difficult to track down.
    - Strict mode prevents some code that can inhibit JavaScript's ability to optimize a program so that it runs faster.
    - Strict mode prohibits using names and syntax that may conflict with future versions of JavaScript.
    - Several benefits to programmers:	
      - They prevent or mitigate bugs.
      - They help make debugging easier.
      - They help your code run faster.
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





**Syntactical Sugar**

-  In each case, we merely use the name of the property we want to initialize, and JavaScript looks for a variable with the same name to use as the initial value.

```javascript
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}

console.log(xyzzy('hi','ki','ji'))

//{ foo: 'hi', bar: 'ki', qux: 'ji'}

function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    answer: qux,
  };
}

//{ foo: 'hi', bar: 'ki', answer: 'ji' }
```

- When defining methods in an object you can get rid of : and function

  ```javascript
  let obj = {
    foo: function() {
      // do something
    },
  
    bar: function(arg1, arg2) {
      // do something else with arg1 and arg2
    },
  }
  
  let obj = {
    foo() {
      // do something
    },
  
    bar(arg1, arg2) {
      // do something else with arg1 and arg2
    },
  }
  ```

  

- Object destructuring 

- ```javascript
  let obj = {
    foo: "foo",
    bar: "bar",
    qux: 42,
  };
  
  let foo = obj.foo;
  let bar = obj.bar;
  let qux = obj.qux;
  
  let { foo, bar, qux } = obj; //can replace last three lines
  let { qux, foo, bar } = obj; //order doesn't matter
  let { foo } = obj; //omit lines you don't need
  let { bar, qux } = obj; 
  let { qux: myQux, foo, bar } = obj; //use different names
  
  
  //In this code, we pass an object to the function. The function's definition uses destructuring to pull out the needed properties and store them in local variables.
  
  function xyzzy({ foo, bar, qux }) {
    console.log(qux); // 3
    console.log(bar); // 2
    console.log(foo); // 1
  }
  
  let obj = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  xyzzy(obj);
  
  
  let obj = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  
  ({ foo, bar, qux } = obj);
  
  console.log(foo)
  ```
  
- Array destructuring

  - ```javascript
    let foo = [1, 2, 3];
    let [ first, second, third ] = foo;
    
    let foo = [1, 2, 3];
    let first = foo[0];
    let second = foo[1];
    let third = foo[2];
    
    let bar = [1, 2, 3, 4, 5, 6, 7];
    let [ first, , , fourth, fifth, , seventh ] = bar;
    
    let one = 1;
    let two = 2;
    let three = 3;
    
    let [ num1, num2, num3 ] =  [one, two, three];
    
    console.log(num1);   // 1
    console.log(num2);   // 2
    console.log(num3);   // 3
    
    let foo = [1, 2, 3, 4];
    let [ bar, ...qux ] = foo;
    console.log(bar);   // 1
    console.log(qux);   // [2, 3, 4]
    ```

- Spread Sytax

  - ```javascript
    function add3(item1, item2, item3) {
      return item1 + item2 + item3;
    }
    
    let foo = [3, 7, 11];
    add3(foo[0], foo[1], foo[2]); // => 21
    
    add3(...foo); // => 21
    ```

  - ```javascript
    // Create a clone of an array
    let foo = [1, 2, 3];
    let bar = [...foo];
    console.log(bar);         // [1, 2, 3]
    console.log(foo === bar); // false -- bar is a new array
    
    // Concatenate arrays
    let foo = [1, 2, 3];
    let bar = [4, 5, 6];
    let qux = [...foo, ...bar];
    qux;  // => [1, 2, 3, 4, 5, 6]
    
    // Insert an array into another array
    let foo = [1, 2, 3]
    let bar = [...foo, 4, 5, 6, ...foo];
    bar; // => [1, 2, 3, 4, 5, 6, 1, 2, 3]
    
    // Create a clone of an object
    let foo = { qux: 1, baz: 2 };
    let bar = { ...foo };
    console.log(bar);         // { qux: 1, baz: 2 }
    console.log(foo === bar); // false -- bar is a new object
    
    // Merge objects
    let foo = { qux: 1, baz: 2 };
    let xyz = { baz: 3, sup: 4 };
    let obj = { ...foo, ...xyz };
    obj;  // => { qux: 1, baz: 3, sup: 4 }
    ```

  - Rest Syntax= opposite of Spread

    ```javascript
    let foo = [1, 2, 3, 4];
    let [ bar, ...otherStuff ] = foo;
    console.log(bar);        // 1
    console.log(otherStuff); // [2, 3, 4]
    
    let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
    let { bar, baz, ...otherStuff } = foo;
    console.log(bar);        // 1
    console.log(baz);        // 3
    console.log(otherStuff); // {qux: 2, xyz: 4}
    ```

  **Errors**

  1) Reference Error 

     1)  attempt to use a variable or function that doesn't exist.

     2) ```javascript
        a;    // Referencing a variable that doesn't exist results in a ReferenceError.
        a();  // The same is true of attempting to call a function that doesn't exist.
        ```

  2) Type Error

     1) try to access a property on a value that does not have any properties, such as `null`. Trying to call something that isn't a Function can also raise a `TypeError`:

        1) ```javascript
           var a;      // a is declared but is empty, as it has not been set to a value.
           typeof(a);  // "undefined"
           
           a.name;     // TypeError: Cannot read property 'name' of undefined
           
           a = 1;
           a();        // TypeError: Property 'a' is not a function
           ```

  3) Syntax Error

     1) A `SyntaxError` is special in that one usually occurs immediately after loading a JavaScript program, and before it begins to run. Unlike `ReferenceError` and `TypeError`, which are dependent upon specific variables and values encountered at runtime, JavaScript detects `SyntaxError`s solely from the text of your program.

     2) ```javascript
        function ( {}   // SyntaxError: Unexpected token (
          
        JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
        ```

- **Avoid Errors**

  - Don't make assumptions
  - Use Guard Clauses
    -  A guard clause is code that guarantees data meets certain preconditions before it gets used.
    - Guard clauses are best used when a Function can't trust that its  arguments are valid. Invalid arguments can have incorrect types,  structures, values, or properties
  - Detect Edge Cases
    - Think about whether your program can violate your assumptions. What happens when they are? We call these situations *edge cases* because they often involve values at the extreme end of the range of possible values. In `lowerInitial`, the shortest possible String (`''`) is an edge case.
    - To identify the edge cases that can break your program, start by  considering the code's inputs. For a Function, these are usually the  arguments. Each data type has its own set of values that can cause  undesired behavior.
  - Planning your code

- **Unavoidable Errors**

  - 

  - ```javascript
    try {
      // Do something that might fail here and throw an Error.
    } catch (error) {
      // This code only runs if something in the try clause throws an Error.
      // "error" contains the Error object.
    } finally {
      // This code always runs, no matter if the above code throws an Error or not.
    }
    //The finally clause is optional; you can omit it if you don't need it, just as you can omit the else clause in an if statement.
    
    
    
    
    function parseJSON(data) {
      let result;
    
      try {
        result = JSON.parse(data);  // Throws an Error if "data" is invalid
      } catch (e) {
        // We run this code if JSON.parse throws an Error
        // "e" contains an Error object that we can inspect and use.
        console.log('There was a', e.name, 'parsing JSON data:', e.message);
        result = null;
      } finally {
        // This code runs whether `JSON.parse` succeeds or fails.
        console.log('Finished parsing data.');
      }
    
      return result;
    }
    
    let data = 'not valid JSON';
    
    parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                        //       Unexpected token i in JSON at position 0"
                        // Logs "Finished parsing data."
                        // Returns null
    ```

  - 



**Helpful Methods**

`Number.prototype.toFixed(numberOfDecimals)` returns a string that represents a number rounded to a fixed number of decimals.







`String.prototype.replace(word, replacerWord)`

`String.prototype.substring(startIndex, finalIndex) `(final index not included)

`String.prototype.length` length is not a method, its a property

`String.prototype.toUpperCase()`

`String.prototype.repeat(numTimes) `

`String.prototype.includes`

`String.prototype.replaceAll(word, replacer1)`

`String.prototype.trim()`(removes whitespaces from both ends of a string.)

`String.prototype.charAt(index)`

`String.prototype.slice(startIndex, FinalIndex)`(not including final),also for array

`String.prototype.split(char)`splits a string on the character provided 

`String.prototype.indexOf(char)` returns index of char, used in arrays too



`Array.prototype.push()` //mutating, can add multiple elements, returns new length

`Array.prototype.unshift`(add element to beginning) //mutating, can add multiple elements, returns new length

`Array.prototype.pop()` //mutating, pops off single last element, returns popped off element

`Array.prototype.splice (firstIndex, numOfElements)` //mutating for original array, returns new array of removed elements from firstIndex and number of elements

`Array.prototype.slice(firstIndex, finalIndex)` //non-mutating, returns new index starting at first Index going up to but not including finalIndex, also for string

`Array.from(string)` //static method, splits a string character by character 

`Array.isArray(obj)` //static method, returns boolean

`Array.prototype.indexOf(char)` returns index of char, used in strings too, uses strict equality so it wouldnt work for testing if objects are included, only primitives

`Array.prototype.join(joiningChar)`//default joiningChar is `,`





`Object.keys(obj)`//returns array of keys, you can also use for (let o in obj)

`Object.entries(obj)`//returns an array with key value pair subarrays

`Object.fromEntries(nestedArr)` //returns obj from nested arr

`Object.assign(obj1, obj2)` //returns arr concatenated, mutates obj1

# 

Please go through the [JavaScript Language Fundamentals exercises](https://launchschool.com/exercises#javascript_language_fundamentals) and complete any exercises that you haven't already done. In particular, don't forget to complete the [debugging exercises](https://launchschool.com/exercise_sets/cefefb80). For even more practice, you can complete the exercises in Easy 1 to Easy 5 of [JS210 - Small Problems](https://launchschool.com/exercises#JS210_small_problems).

Also, you have now learned enough to be able to complete the following sets of exercises: the last four exercises from [JavaScript Basics](https://launchschool.com/exercise_sets/c39a2eed) and all of [Medium 1](https://launchschool.com/exercise_sets/41f68c21) and [Medium 2](https://launchschool.com/exercise_sets/646ece8b) from JavaScript Language Fundamentals, and [Easy 3](https://launchschool.com/exercise_sets/829c41b0), [Easy 4](https://launchschool.com/exercise_sets/b1647500), and [Easy 5](https://launchschool.com/exercise_sets/605aaeb8) from JS210 - Small Problems.
