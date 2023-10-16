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







-  **Assignments and Comparison**

- **Variables** 

  - Unless mentioned specifically, we use the term **variable** in the broadest sense possible. On this exam, that means that all of the following should be treated as variables:

    -   Variables declared with `let` or `const`
    -   Function parameters
    -   Function names

    Note in particular that object property names **are not** variables.

-   **Variable Scope, especially how variables interact with function definitions and blocks**

-   **Function Scope**

-   **Hoisting**

-   **Primitive Values, Types and Type Conversions/Coercions**

-   **Object Properties and Mutation**

-   **Understand the Differences Between Loose and Strict Equality**

-   **How Passing an Argument into a Function may or may not Permanently Change the Value that a Variable Contains or Points to**

  -   Parameters are the names assigned to a function's arguments; arguments are the values that get passed to the function.
  -   Variables are not passed to or returned by functions: **values** or **references** are passed.
  -   Truthiness vs Boolean values (see above)

-   **Working with Strings, Arrays, and Objects. In particular, you  should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.**

-   **Understand that arrays are objects, and be able to determine whether you have an Array**

  - Accessing these elements by index value returns `undefined`, but certain operations like `Array.prototype.forEach` ignore those missing elements. That leads to the question of whether  the missing elements are really part of the array. We can think about  this array as either a 3-element array whose values are missing, or as  an empty array whose length is 3. Which you choose depends on the  context.
  - For most purposes, the elements of a JavaScript array are accessed by an index value, a non-negative integer (0, 1, 2, ...). However, arrays are also objects, which means they can have properties whose name is not a  non-negative integer. For instance, it is possible to define a property  whose key is `"-1"` or `"foo"` on an array, and you can access its value using an index-like syntax: `array[-1]` or `array["foo"]`. As with missing elements, that raises the question of whether these  properties are, in fact, array elements. Again, the answer is  context-dependent. There may be times, for instance, when you want to  treat the `-1` and `"foo"` (but maybe not both) properties as elements, but often you won't.

-   **[variables as pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)**

- **[console.log vs return](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues)**

- **truthiness: `false` and `true` vs. falsy and truthy**

  - In JavaScript, the *falsy* values `false`, `0`, `NaN`, `""`, `undefined`, and `null` are all said to *evaluate to false* when used in a boolean context. All other values, the *truthy* values, are all said to *evaluate to true*. Note that saying that a value evaluates to true or false is **not** the same as saying that those values **are** `true` or `false`, or that they are **equal to** `true` or `false`. These may seem like subtle distinctions, but they are important ones.
  -   Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
  -   Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
  -   Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
  -   Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.

-   **Function definition and function invocation**

-   **function declarations, function expressions, and arrow functions**

-   **implicit return value of function invocations**

-   **first-class functions**

-   **partial function application**

-   **side effects**

-   **naming conventions (legal vs idiomatic)**

-   **pure functions and side effects**

-   **strict mode vs. sloppy mode**

-   **JavaScript syntactic sugar**