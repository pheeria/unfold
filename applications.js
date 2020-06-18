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

const cities = {
  Lyon: "France",
  Berlin: "Germany",
  Paris: "France"
};

let countries = Object.keys(cities).reduce(
  (acc, k) => ((acc[cities[k]] = [...(acc[cities[k]] || []), k]), acc),
  {}
);

let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});

/**
 * Get, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {Array|string} path string or an array of strings describing paths to be returned from an object
 * @param {*} [defaultValue] value returned when path resolves undefined
 * @returns {*} value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, 'back[1]');
 * > 39
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, ['front', 5], "no value here");
 * > 'no value here'
 */

function get(object, path, defaultValue) {
  if (typeof path === "undefined") {
    return undefined;
  }
  let pathArray;

  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path)
      .replace(/\[(\w+)\]/g, ".$1")
      .split(".");
  }

  const result = pathArray.reduce((result, search) => {
    if (result === undefined) {
      return undefined;
    }
    if (Object.prototype.hasOwnProperty.call(result, search)) {
      return result[search];
    } else {
      return undefined;
    }
  }, object);

  return result !== undefined ? result : defaultValue;
}

/**
 * Intersection creates an array of unique values that are included in all given arrays
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing the unique intersecting values between all input arrays
 *
 * @example
 * const result = arrays.intersection([4, 2, 1], [2, 3, 4]));
 * console.log(result);
 * > [4, 2]
 */
function intersection(...arrays) {
  return [...new Set(arguments[0])].reduce((acc, curr) => {
    if (
      arrays.slice(1).reduce((every, array, i) => {
        if (every && !new Set(array).has(curr)) return false;
        return every;
      }, true)
    ) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
