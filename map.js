function iterativeMap(array, fn) {
  const result = [];

  for (const element of array) {
    result.push(fn(element));
  }

  return result;
}

function recursiveMap([first, ...rest], fn) {
  return first === undefined ? [] : [fn(first), ...recursiveMap(rest, fn)];
}

function reducedMap(array, fn) {
  return array.reduce((acc, cur) => [...acc, fn(cur)], []);
}

console.log(iterativeMap([1, 2, 3], e => e ** 3));
console.log(recursiveMap([1, 2, 3], e => e ** 3));
console.log(reducedMap([1, 2, 3], e => e ** 3));
