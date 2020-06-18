function iterativeFilter(array, predicate) {
  const result = [];

  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

function recursiveFilter([first, ...rest], predicate) {
  return first === undefined
    ? []
    : predicate(first)
    ? [first, ...recursiveFilter(rest, predicate)]
    : [...recursiveFilter(rest, predicate)];
}

function scalaFilter(list, predicate) {
  function tailRecur([first, ...rest], acc) {
    return first === undefined
      ? acc
      : tailRecur(rest, predicate(first) ? acc.concat(first) : acc);
  }
  return tailRecur(list, []);
}

function reducedFilter(array, predicate) {
  return array.reduce((acc, cur) => (predicate(cur) ? [...acc, cur] : acc), []);
}

console.log(iterativeFilter([1, 2, 3], e => e >= 2));
console.log(recursiveFilter([1, 2, 3], e => e >= 2));
console.log(reducedFilter([1, 2, 3], e => e >= 2));
console.log(scalaFilter([1, 2, 3], e => e >= 2));
