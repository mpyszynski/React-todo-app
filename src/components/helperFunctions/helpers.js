const sortList = array => array.sort((a, b) => {
  if (a.isCompleted && b.isCompleted) return a.isCompleted - b.isCompleted;
  return a.isCompleted - b.isCompleted || a.id - b.id;
});

const filterArray = (array, id) => array.filter(x => x.id !== id);

const sortListByState = (array, id, item) => {
  if (item.isCompleted) {
    const filteredList = filterArray(array, id);
    return [...filteredList, item];
  }
  return sortList(array);
};

export { sortListByState, sortList, filterArray };
