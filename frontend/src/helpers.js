export const toArrAndMap = (items, idKey) => {
  let array = [],
      map = {};
  items.forEach(itm => {
    array.push(itm);
    map[itm[idKey]] = itm;
  })
  return [array, map];
}