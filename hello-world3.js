
function foo(){
  setTimeout(bar, 1000);
}

function bar() {
  console.log("world");
  throw new Error("hit a problem");
}

setTimeout(foo, 2000)

console.log("hello");

