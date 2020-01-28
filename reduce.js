function iterativeReduce(array, fn, initialValue) {
  let result = initialValue;

  for (let i = 0; i < array.length; i++) {
    result = fn(result, array[i]);
  }

  return result;
}

function recursiveReduce([first, ...rest], fn, acc) {
  return first === undefined ? acc : recursiveReduce(rest, fn, fn(acc, first));
}

console.log(iterativeReduce([1, 2, 3], (a, b) => a + b, 0));
console.log(recursiveReduce([1, 2, 3], (a, b) => a + b, 0));
console.log(recursiveReduce([1, 2, 3], (a, b) => [...a, b * b], []));
