let foo = ["a", 1, ["a"], { 1: 1 }, null];

let filteredFoo = foo.filter((item) => {
  let newItem;
  if (typeof item === "object" && !Array.isArray(item)) {
    newItem = item;
  }
  return newItem;
});

console.log(filteredFoo);
// [{ '1': 1 }]