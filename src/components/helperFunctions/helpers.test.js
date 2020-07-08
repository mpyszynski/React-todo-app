import { filterArray, sortListByState, sortList } from './helpers';

let mockArray = [];
beforeEach(() => {
  mockArray = [
    {
      title: 'Exericse',
      description: 'Go to gym and do some lifting',
      id: 3,
      isCompleted: false,
    },
    {
      title: 'Buy chocolate',
      description: 'Go to Kiwi and buy some chocolate',
      id: 4,
      isCompleted: true,
    },
    {
      title: 'Buy cola',
      description: 'Go to Kiwi and buy some cola',
      id: 2,
      isCompleted: true,
    },
    {
      title: 'Buy milk',
      description: 'Go to Kiwi and buy some milk',
      id: 1,
      isCompleted: false,
    },
  ];
});
describe('Test sort list functionality', () => {
  test('Entry with id 1 should be on first place if not completed', () => {
    const sortedArr = sortList(mockArray);
    expect(sortedArr[0].id).toEqual(1);
  });
  test('Should not sort entries marked as done', () => {
    const sortedArr = sortList(mockArray);
    expect(sortedArr[2].id).toEqual(4);
    expect(sortedArr[3].id).toEqual(2);
  });
});

describe('Test sort array by state functionality', () => {
  test('Should move entry with ID 3 to last index after marking it as done', () => {
    const item = mockArray.find(x => x.id === 3);
    item.isCompleted = true;
    const sortedArr = sortListByState(mockArray, item.id, item);
    expect(sortedArr[3].id).toEqual(3);
  });
  test('Should move entry with ID 3 to second index after marking it as undone', () => {
    const item = mockArray.find(x => x.id === 3);
    item.isCompleted = false;
    const sortedArr = sortListByState(mockArray, item.id, item);
    expect(sortedArr[1].id).toEqual(3);
  });
  test('Should move entry with ID 2 to second index after marking it as undone', () => {
    const item = mockArray.find(x => x.id === 2);
    item.isCompleted = false;
    const sortedArr = sortListByState(mockArray, item.id, item);
    expect(sortedArr[1].id).toEqual(2);
  });
});

describe('Test filter array funcionality', () => {
  test('Should remove entry with ID 2', () => {
    const filteredArr = filterArray(mockArray, 2);
    const item = filteredArr.find(x => x.id === 2);
    expect(item).toBeUndefined();
  });
});
