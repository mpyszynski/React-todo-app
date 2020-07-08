import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import List from './List';

let mockArray = [];
const mockFunction = jest.fn();
beforeEach(() => {
  mockArray = [
    {
      title: 'Exercise',
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

describe('<ListItem />', () => {
  test('should return item with correct information', () => {
    const entry = shallow(
      <ListItem
        todo={mockArray[0]}
        toggleCompletion={mockFunction}
        deleteItem={mockFunction}
      />,
    );
    expect(entry.find('.todo__item--section h1').text()).toEqual('Exercise');
    expect(entry.find('.todo__item--section p').text()).toEqual(
      'Go to gym and do some lifting',
    );
  });
  test('should return item list without button', () => {
    const entry = shallow(
      <ListItem
        todo={mockArray[0]}
        toggleCompletion={mockFunction}
        deleteItem={mockFunction}
      />,
    );
    const buttonDiv = entry.find('.todo__item--div');
    expect(entry).toMatchSnapshot();
    expect(entry.hasClass('todo__item')).toBeTruthy();
    expect(entry.hasClass('todo__item--completed')).toBeFalsy();
    expect(buttonDiv.length).toEqual(0);
  });
  test('should return item list with button', () => {
    const entry = shallow(
      <ListItem
        todo={mockArray[1]}
        toggleCompletion={mockFunction}
        deleteItem={mockFunction}
      />,
    );
    const buttonDiv = entry.find('.todo__item--div');
    expect(entry).toMatchSnapshot();
    expect(entry.hasClass('todo__item--completed')).toBeTruthy();
    expect(buttonDiv.length).toEqual(1);
  });
});

describe('<List />', () => {
  test('should return list with 4 elements', () => {
    const wrapper = shallow(
      <List
        todoList={mockArray}
        toggleCompletion={mockFunction}
        deleteItem={mockFunction}
      />,
    );
    expect(wrapper.find('.todo__main').children().length).toEqual(4);
    expect(wrapper).toMatchSnapshot();
  });
});
