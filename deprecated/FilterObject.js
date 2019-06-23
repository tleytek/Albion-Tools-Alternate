//predicate means filter criteria
export const FilterObjectAsArray = (obj, predicate) => {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
};

Object.fromEntries = arr => {
  return Object.assign({}, ...arr.map(([k, v]) => ({ [k]: v })));
};

export const mapObjectKeys = obj => {
  console.log(Object.entries(obj).map(([k]) => k));
};
