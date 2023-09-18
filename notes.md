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
-   NaN
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
  
- When one of the operands is an object (including arrays and functions),  both operands are converted to strings and concatenated together:

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


There is no direct coercion of strings to booleans.
> true === 'true'
false
> true == 'true'
false
let a = 'true';
let b = 'false';
a === 'true';            // true
b === 'true';            // false
```

**Boolean**

- You can also use the `Boolean` function to convert any value into a boolean value based on the truthy and falsy rules in JavaScript:

- ```javascript
  Boolean(null);           // false
  Boolean(NaN);            // false
  Boolean(0);              // false
  Boolean('');             // false
  Boolean(false);          // false
  Boolean(undefined);      // false
  Boolean('abc');          // other values will be true
  Boolean(123);            // true
  Boolean('true');         // including the string 'true'
  Boolean('false');        // but also including the string 'false'! = true
  ```

- The double `!` operator provides a simpler way to coerce a truthy or falsy value to its boolean equivalent. The `!` operator returns the opposite of the value's boolean equivalent, so a double `!`returns the value's boolean equivalent:

- ```javascript
  !!(null);                // false
  !!(NaN);                 // false
  !!(0);                   // false
  !!('');                  // false
  !!(false);               // false
  !!(undefined);           // false
  
  !!('abc');               // true
  !!(123);                 // true
  !!('true');              // true
  !!('false');             // this is also true! All non-empty strings are truthy in JavaScript
  ```

- ```javascript
  1 + true       // true is coerced to the number 1, so the result is 2
  '4' + 3        // 3 is coerced to the string '3', so the result is '43'
  false == 0     // false is coerced to the number 0, so the result is true
  
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
  -   a`ssignments: `a = 3;`
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

A function declaration has the following structure:

1. The `function` keyword

2. The name of the function

3. A list of comma separated parameters

4. A block of statements (the function body)

**If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`. This is a reason why functions are said to "have returned" rather than "finished execution". When we talk about closures in a later course this distinction will become more apparent. For now, just be mindful of the disambiguation between the `return` value (explicit or implicit) of a function and the statement that a *"function that has returned or returns"*.



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



**Flow Control/ Conditionals**

- Conditional statements are sets of commands that are triggered when a  condition is true. In JavaScript, there are two conditional statements  supported: `if…else` and `switch`.

- When writing programs, you want your data to take the correct path by use of **conditionals**

  - Combination of `if` statements with comparison and logical operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`, `&&`, `||`) to direct traffic. They use the keywords `if` and `else`.

  - ```javascript
    if (x === 3) {                          // Example 1
      console.log("x is 3");
    }
    
    if (x === 3) {                          // Example 2
      console.log("x is 3");
    } else {
      console.log("x is NOT 3");
    }
    
    if (x === 3) console.log("x is 3");     // Example 3
    
    if (x === 3)                            // Example 4
      console.log("x is 3");
    
    if (x === 3)                            // Example 5
      console.log("x is 3");
    else
      console.log("x is NOT 3");
    
    if (x === 3) {                          // Example 6
      console.log('x is 3');
    } else {
      if (x === 4) {
        console.log('x is 4');
      } else {
        console.log('x is NOT 3 or 4');
      }
    }
    
    if (x === 3) {                          // Example 7
      console.log("x is 3");
    } else if (x === 4) {
      console.log("x is 4");
    } else {
      console.log('x is NOT 3 or 4');
    }
    ```

  - `if (x ===3)`is a conditional statement 

  - `(x==3)` is the single `condition`/expression that evaluates to a boolean

  - the text that executes when the conditional statement is true is the `clause `

    - `{console.log("x is 3")};` is a block.

    - A block groups statements and is delimited by curly braces. Blocks may have zero or more statements in them

  - It's important to understand that the `else` clause is not a separate statement: it's part of the `if` statement.

    - An `if` statement may have an optional `else` clause. The `else` clause runs when the `if` statement's condition evaluates as `false`.

  - Examples 3, 4, and 5 show that you don't need a block when the `if` or `else` clause contains a single statement or expression.
  
  - Examples 6 and 7 both behave the same way. Example 6 uses a nested `if` statement in the `else` clause, while example 7 flattens out the body of the `else` block into an `else if` clause. It's easier to read and maintain example 7 since you don't have the syntactic clutter of extra braces and indentation.
  
  
  
  **Comparison Operators**
  
  - Return a boolean value (true or false)
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

**What evaluates to false?**

-   `false`

-   The number `0` - different than ruby 

  . This includes all 3 variations of zero in JavaScript:

  -   `0`: The ordinary zero value.
  -   `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  -   `0n`: The `BigInt` version of zero.

- An empty string (`''`) - different than ruby 

  - Whats weird is that in an `if` statement `' '` will evaluate to true and `''` will evaluate to false....BUT 

    - ```javascript
      > ' ' == false
      true
      > ''==false
      true
      ```

- `undefined`

- `null`

- `NaN`



- We often use the term **falsy** to refer to values that evaluate as false, while the values that evaluate as true are **truthy**. We use these terms when we need to distinguish between boolean `true` and `false` values. We can also discuss **truthiness**: whether something is a truthy or falsy value.

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
// ternary expression
let isOk = (foo || bar) ? true : false;
```

```javascript
let isOk = !!(foo || bar);
```

**!!**

	- two consecutive `!` operators 
	- equivalent to `!(!a)`
	- The inner `!` converts the value of `a` to `false` if it is truthy, or `true` if `a` is falsy. The outer `!` then flips `true` to `false` or `false` to `true`. In the end, we end up with a boolean value instead of a truthiness value:

```javascript
> !!3    // 3 is truthy, !3 is false, !false is true
= true

> !!''   // '' is falsy, !'' is true, !true is false
= false
```



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



**Ternary Operator**

- The **ternary operator** is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the `?` and `:` symbols and takes 3 operands (hence, the name "ternary"):

  ```javascript
  > 1 == 1 ? 'this is true' : 'this is not true'
  = 'this is true'
  
  > 1 == 0 ? "this is true" : "this is not true"
  = 'this is not true'
   
  ```

  - How does this work? JavaScript first evaluates the first operand (the  comparisons). If it has a truthy result, JavaScript evaluates the second operand (`this is true`) and returns its value. Otherwise, it evaluates the third operand (`this is not true`) and returns its value.
  - The chief advantage that the ternary operator has over an `if/else` statement is that the entire structure is an expression. What that  means is that we can treat the ternary expression as a value: we can  assign it to a variable, pass it as an argument, and so on. Since `if/else` is a statement, we can't capture its result to a variable.

```javascript
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined
```

Ternary expressions should usually be used to select between 2 values,  not to choose between two actions. (An action would be something like  logging a value to the console or setting a variable to a new value.)  

*The ternary expression's result should almost always be*

1. Assigned to a  variable
2. Passed to a function as an argument
3. Returned by a  function. 
   - If you're not doing one of those things, an `if/else` statement is a better choice.

DON'T USE THEM TO CHOOSE BETWEEN ACTIONS:

```javascript
hitchhiker ? foo = 42 : bar = 3.1415;               // Setting variables
hitchhiker ? console.log(42) : console.log(3.1415); // Printing
```



**Switch Statement**

- Similar to an `if` statement with a different interface
- Compares a single value against multiple values for strict equality (===), wheras the `if` can test mutiple expessions with any condition

- Uses reserved words

  1. switch (like ruby case)
  2. case (like ruby when)
  3. default (like ruby else)
  4. break
     1. The `break` statement in each `case` is crucial. Without a break, execution "falls through" to the next `case` clause.

  * Similar to Ruby Case statement case/when/else/end

- ```javascript
  let a = 5;
  
  switch (a) {
    case 5:
      console.log('a is 5');
      break;
    case 6:
      console.log('a is 6');
      break;
    default:
      console.log('a is neither 5, nor 6');
      break;
  } // => a is 5
  ```

- Functionally identical to if/else but they differ:

  The `switch` statement evaluates the expression, `a`, compares its value to the value in each `case` clause and then executes the statements and expressions associated with the first matching clause. In this example, the value of the expression is `5`; thus, the program executes the statements and expressions associated with the `case 5:` clause. The statements and expressions in the `default:` clause run when the expression doesn't match any of the `case` clauses; it acts like the final `else` in an `if` statement.

- If you forget the `break` statement, execution falls through to the next `case` clause and will execute all 

- ```javascript
  let a = 5;
  
  switch (a) {
    case 5:
    case 6:
    case 7:
      // executed if a is 5, 6, or 7
      console.log("a is either 5, 6, or 7");
      break;
    case 8:
    case 9:
      // executed if a is 8 or 9
      console.log('a is 8 or 9');
      break;
    default:
      // executed if a is anything else
      console.log('a is not 5, 6, 7, 8, or 9');
      break;
  }
  ```

- fall through can work when you want code to execute for more than one case



**Loops and Iterating**

1) Looping Keyword
2) Condition
3) Block (loop's body)

- Loops execute the loop's body for as long as the condition remains truthy 
  - One iteration is executing the loop body once
    - By **iterate**, we mean that we process each element one at a time, in sequence from the first to the last element.
- **While Loop**
  - `while` keyword with conditional expression in parenthese and a block
  - The block must tell Javascript when the loop should stop 
    - conditional expression becomes falsy otherwise it's an infinite loop 

```javascript
let counter = 1;
while (counter <= 1000) {
  console.log(counter);
  counter = counter + 1; //or counter += 1; or add one by counter++;
}
```

When JavaScript encounters this `while` loop, it evaluates the conditional expression inside the parentheses, `counter <= 1000`. Since `counter`'s initial value is `1`, the expression is `true` at the beginning of the `while` statement and the engine runs the loop's block. Inside the block, we output `counter`'s value, then increment it by `1`.

After the first block iteration, JavaScript re-evaluates the conditional expression. This time, `counter` is `2`, which is still less than or equal to `1000`; thus, the block runs again. After 1000 iterations, `counter`'s value becomes 1001. Since the loop condition is no longer truthy, the  program stops looping and continues with the first expression or  statement after the loop.

Line 4 in this example is crucial. The loop block *must* modify `counter` in some way that ultimately makes the loop condition `false`. If it doesn't, the loop becomes an infinite loop, which, in most cases, you don't want. If your program never stops running, you probably have  an infinite loop somewhere in the program. Try running the example code  after commenting out line 4. You'll see that the number `1` keeps printing to the console. If you're using `node`, you can use the `Control+c` keystroke to terminate the program. If you're using the browser  console, you may have a tougher time; in Chrome, you can use the task  manager from the Window menu to force-close the tab.

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

Note that we initialized `names`, `upperNames`, and `index` before the loop. If we initialized them inside the loop, they would  have block scope. Every loop iteration would create, initialize, and  discard each variable. 



**Do/While Loop**

```javascript
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');  //run in browser
```

Notice how `while` and the condition are now at the end of the loop. Since the test occurs at the end of the loop, the loop always executes at least once.



**For Loop**

- Same purpose at `while` loop with a condensed syntax that works well when iterating over arrays and other sequences 
- A `for` loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:
- All 3 components of the `for` loop are optional

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



**Controlling Loops**

- keywords `continue` and `break`to provide more control over loops 

1. `continue`
   1. lets you start a new iteration of the loop
   2. When a loop encounters the `continue` keyword, it skips running the rest of the block and jumps ahead to the next iteration
   3. You can rewrite a loop that uses `continue` with a negated `if` conditional.

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

//or 

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

//you can even leave out the block in an if statement if you are using a continue, break, or return statement 
if (!someCondition) continue;
```



1. `break`
   1. lets you terminate the loop early 
   2. You sometimes want to skip all remaining iterations of a loop. For  instance, when you search an array for a specific value, you probably  want to stop searching once you find it. There's no reason to keep  searching if you don't need any subsequent matches.



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

- An array is an ordered list of **elements**; each element has a value of any type. You can define an array by placing a list of values between brackets (`[]`):

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




These "elements" aren't true elements; they are properties on the array object, which we'll discuss later. Only index values (0, 1, 2, 3, and so on) count toward the length of the array.

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
> let a = ['a', 'b', 'c', 'd', 'e']
> a.indexOf('c')
= 2

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

  - Key-value pairs are also called object **properties** in  JavaScript. We can also use "property" to refer to the key name; the  meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.

  - If a variable declared with `const` is initialized with an  object, you can't change what object that variable refers to. You can,  however, modify that object's properties and property values:

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
        = { a: 'foo', b: 'bar' }
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
     2. `+,-,/,*,%`

  2. Comparison Operators 

     1. Compares its operands and returns a boolean value (true or false)

     2. When the operands are of different types, JavaScript tries to implicitly convert them to suitable types (implicit conversion) 

        1. only with `==` and `!=`

        2. Best to use the stricter `===` `!==` so no conversions are performed 

        3. | Operator               | Description                                                  |
           | ---------------------- | ------------------------------------------------------------ |
           | Equal (==)             | Returns true if the operands are equal                       |
           | Not Equal (!=)         | Returns true if the operands are not equal                   |
           | Strict Equal (===)     | Returns true if the operands are equal and of the same type  |
           | Strict Not Equal (!==) | Returns true if the operands are not equal and/or not of the same type |
           | Greater than (>)       | Returns true if the left operand is greater than the right   |
           | Less than (<)          | Returns true if the left operand is less than the right      |

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

  4. String Operators 

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

  5. Logical Operators 

     1. You can combine boolean/non boolean values with logical operators

        1. `&&, ||, !`

           1. ```javascript
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

