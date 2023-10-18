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

  -  See comparison rules

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

  - See code examples for extra

  - Variables declared with the `let` statement are block scoped (say "the variable `a` declared in the `let` statement". This means that when we declare the variable `myValue` within a block on line 2, that variable is not accessible outside of the block on line 5, and a `ReferenceError` is raised.

  - Variables declared in an outer scope can be accessed in any inner scope.

  - gobal scope can be called "very top level of our code and is accessible from everywhere in our code"

    1. **Variable Shadowing**

       ```javascript
       let a = 1;
       
       function myFunction(a) {
         console.log(a);
       }
       
       let b = 2;
       
       myFunction(b);
       ```

       The parameter `a` of `myFunction` shadows the variable `a` declared on line 1. The `a` we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of `b`, which is then logged.

- **Function Scope**

- **Hoisting**

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





- **Primitive Values, Types and Type Conversions/Coercions**

- **Object Properties and Mutation**

  -  To define a new object property (or to re-assign the value of an existing property), we can again use either dot notation or bracket notation, together with simple assignment syntax to set the desired value.
  -  A property value can be any valid expression, including a function expression. When the value is a function and it is invoked with an explicit caller, as seen on line 13 of the original code, it is called *method*invocation. You will continue to learn much more about this in future lessons.
  -  Object property names are always strings. When we omit quotes around our property names, JavaScript implicitly converts the name to a string. So `true` is not a property defined on `obj`, but `'true'` is. You can check this for example as follows:

- **Understand the Differences Between Loose and Strict Equality**

- **How Passing an Argument into a Function may or may not Permanently Change the Value that a Variable Contains or Points to**

  -   Parameters are the names assigned to a function's arguments; arguments are the values that get passed to the function.
  -   Variables are not passed to or returned by functions: **values** or **references** are passed.
  -   Truthiness vs Boolean values (see above)

- **Working with Strings, Arrays, and Objects. In particular, you  should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.**

  -  Be aware if you have a nested array, or a two dimensional array

- **Understand that arrays are objects, and be able to determine whether you have an Array**

  - Accessing these elements by index value returns `undefined`, but certain operations like `Array.prototype.forEach` ignore those missing elements. That leads to the question of whether  the missing elements are really part of the array. We can think about  this array as either a 3-element array whose values are missing, or as  an empty array whose length is 3. Which you choose depends on the  context.
  - For most purposes, the elements of a JavaScript array are accessed by an index value, a non-negative integer (0, 1, 2, ...). However, arrays are also objects, which means they can have properties whose name is not a  non-negative integer. For instance, it is possible to define a property  whose key is `"-1"` or `"foo"` on an array, and you can access its value using an index-like syntax: `array[-1]` or `array["foo"]`. As with missing elements, that raises the question of whether these  properties are, in fact, array elements. Again, the answer is  context-dependent. There may be times, for instance, when you want to  treat the `-1` and `"foo"` (but maybe not both) properties as elements, but often you won't.

- **[variables as pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)**

  - Array

    - ```javascript
      let array1 = [2, 6, 4];
      let array2 = [2, 6, 4];
      
      console.log(array1 === array2);  //false
      
      let array1 = [2, 6, 4];
      let array2 = array1;
      
      console.log(array1 === array2); // true
      ```

      Primitives, like strings or numbers, are compared by their value. Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the *same object*, i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

  - As you might expect, the values for the `number` and `string` keys changed in `objCopy`, but not in `obj`. However, when we mutated the value of `objCopy.array`, it also mutated that value of `obj.array`. That's because a shallow copy only copies pointers for nested objects; since arrays are objects, the shallow copy just copied the pointer to the original array to `objCopy`. If you're wondering why this happens, you might want to review [Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers) section in the Introduction to JavaScript book.

- **[console.log vs return](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues)**

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

  - ```javascriptfunction greet(greeting = 'Hello') {
    function greet(greeting = 'Hello') {
      console.log(greeting + ', world!');
    }
    ```

    Default parameters are a great way to assign a default value to a parameter. This default value is used in case the parameter is `undefined`, which is the case if `greet` is called without an argument.

- **function declarations, function expressions, and arrow functions**

- **implicit return value of function invocations**

- **first-class functions**

- **partial function application**

- **side effects**

- **naming conventions (legal vs idiomatic)**

- **pure functions and side effects**

- **strict mode vs. sloppy mode**

- **JavaScript syntactic sugar**





















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

