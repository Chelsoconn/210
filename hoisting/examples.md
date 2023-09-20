(1)

```javascript
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

//outer
//inner
//outer
```

- Line 8 is the first invocation of `console.log`; here, `a` is the global variable `a` from line 1. Line 9 calls the `testScope` function; in the function, `a` is a local variable on line 4, so line 5 logs `inner`. After `testScope` returns, the `a` on line 10 is the global variable on line 1 again; therefore, it logs `outer`.



(2)

```javascript
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

//outer
//inner
//inner
```

- On line 4, `a` is the global variable from line 1. The assignment assigns `inner` to the variable. Thus, line 10 logs `inner` instead of `outer`.



(3)

```javascript
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

//empty
//play station
//computer
```

- The first log operation occurs on line 8; here, `basket` still has its original value, `empty`. The function call on line 19 changes `basket` to `tv`, and the call on line 20 changes it to `computer`. The function call on line 21 does not alter the value of the `basket` global, but defines and sets a local variable with the same name. It then logs `play station`. Upon returning from `shop3`, the local variable goes away, so line 23 logs the value of the global `basket`: `computer`.



(4)

```javascript
function hello() {
  a = 'hi';
}

hello();
console.log(a);

//hi
```

- Here, we call the `hello` function, so we assign a value of `hi` to the variable. The variable is a global variable since we don't declare it with `let`, `const`, `var`, or `function`. Thus, line 6 logs `hi`.

Note that this is nearly identical to what happens when we explicitly declare `a` at the global level:

```javascript
let a;

function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

- However, there is a subtle difference: without an explicit declaration, `a` becomes a property of the global object. We discuss objects in more detail later and why this extremely subtle distinction matters. For now, though, you just need to know that `a` is available everywhere in the program.



(5)

```javascript
function hello() {
  let a = 'hello';
}

hello();
console.log(a);

//Uncaught ReferenceError: a is not defined
```

- Since we don't define a global variable `a`, line 6 does not find any variables named `a`; thus, it raises a `ReferenceError`.



(6)

```javascript
console.log(a);

var a = 1;

//undefined
```

- After hoisting, this program is equivalent to:

```javascript
var a;
console.log(a);
a = 1;
```



(7)

```javascript
console.log(a);

let a = 1;

//ReferenceError: Cannot access 'a' before initialization
```

- After hoisting, JavaScript can tell that there is an `a` variable, but that variable lives in the Temporal Dead Zone; it is unset and cannot be accessed.



(8)

```javascript
console.log(a);

function hello() {
  a = 1;
}

//Uncaught ReferenceError: a is not defined
```

- After hoisting, this program is equivalent to:

```javascript
function hello() {
  a = 1;
}

console.log(a);
```

- We define `hello`, but never call it, so we never assign a value to `a`. Since we also don't declare `a` anywhere, line 5 produces a `ReferenceError`.



(9)

```javascript
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

//undefined
```

- The scope of variables declared with `var` is function-level, not block-level. Therefore, after hoisting, this code becomes:

```javascript
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

- Since we declare but never assign `a`, line 7 logs `undefined`.



(10)

```javascript
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

//ReferenceError: a is not defined
```

- The scope of variables declared with `let` is block-level, not function-level. Therefore, the variable `a` is only available inside the `if` clause on line 3.



(11)

```javascript
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

//hello
//Uncaught ReferenceError: a is not defined
```

- After hoisting:

```javascript
function hello() {
  var a;
  a = 'hello';

  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);
```

- `a`'s scope is the body of `hello`. Since there is no global variable named `a`, line 13 raises an error.



(12)

```javascript
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

//hello
//hello
```

- Inside the `if` statement, `a`'s scope is confined to line 6. Since `a` on line 2 is not declared, it is treated as a global variable. Thus, both lines 3 and 11 output `hello`.



(13)

```javascript
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);

//4
```

- JavaScript hoists the variable declaration on line 4 to the top of the global scope. Since a global variable named `a` exists, the hoist has no direct effect on operation. Inside the loop, `a` gets assigned five times; at the end of the loop, it has a value of 4. Thus, line 7 logs `4`.



(14)

```javascript
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

//hello
```

- In this code, we have two different `a` variables: one in the outer scope, and one in the inner scope. The declaration on line 4 creates and initializes the inner-scoped variable. On line 7, we output the value of the `a` variable declared on line 1. That variable still has the value `'hello'`, so line 7 outputs `hello`.



(15)

```javascript
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);

//4
//3
```

- The `foo` function returns the return value of the `bar` function, which is 4. During this process, the code changes the global variable twice. Thus, the final value is 3.



(16)

```javascript
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

//superNested
//global
```

- With super-nested functions, you must chase through the functions starting with the function invocations. Here, we start with line 18, the first function invocation. From there, line 4 goes to line 5, line 5 to line 15, and so on through lines 6, 7, 12, 8, and 9. Line 9 obviously returns `'superNested'`, so line 12 must return `'superNested'` too. This takes us back to line 15 which also returns `'superNested'`. Finally, line 18 receives the final return value (`'superNested'`) and logs it. During this entire process, we never modify the global `a`, so it still has the value `global`.

  Remember, `var` declarations are function-scoped, so each of the `var` declarations within this problem are declared within their own individual scope. The last `var`declaration, `'nested'` is reassigned on line 8.



(17)

```javascript
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner'; 
}

//outer
//outer
//outer
//inner
```

- Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument.



(18)

```javascript
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

//50
//60
//15
```

- Though our parameter has the same name as the variable declared on line 2, it is not the same variable. Function parameters are locally scoped variables, even when they have the same names as variables defined in the outer scope.



(19)

```javascript
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

//outer
//Uncaught TypeError: setScope is not a function(…)
```

With hoisting, the above code is equivalent to:

```javascript
var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};
```

- Line 6 tries to call `setScope` as a function. However, `setScope` is just a declared global variable whose value is `undefined`. Note that unlike function declarations, with function expressions using `var`, the name of the function is hoisted, but not the function body.





DEFINITION: 

Hoisting is the default behavior of **moving all the declarations at the top of the scope before code execution**. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local



RULES:

1) So these global variables are Undeclared... so they don't get moved up they are just where they are

2. Subsequent `var` declarations with the same name become reassignment 
3. Function declarations are hoisted above variable declarations 