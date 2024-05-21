function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack, subCallback) {
  sumCallBack(a, b);
  subCallback(a, b);
}

calculator(10, 11, sum, (a, b) => {
  console.log(a - b);
});
