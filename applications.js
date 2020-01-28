function reverse(array) {
  return array.reduce((acc, cur) => [cur, ...acc], []);
}

function flat(array) {
  return array.reduce(
    (acc, cur) => (Array.isArray(cur) ? [...acc, ...cur] : [...acc, cur]),
    []
  );
}

const brands = {
  eurasia: "carriage, yogiyo, foodpanda, talabat",
  americas: "pedidosya, foodora, domicilios",
  africa: "otlob"
};

console.log(
  Object.values(brands).reduce((acc, cur) => acc.concat(cur.split(", ")), [])
);
