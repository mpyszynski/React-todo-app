import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';
import TodoForm from './TodoForm';

const mockFunction = jest.fn();

const testState = { title: 'Buy milk', description: 'Go to kiwi and buy milk' };

describe('<FormInput />', () => {
  test('should return section with label and input', () => {
    const wrapper = shallow(
      <FormInput
        label='Title'
        value={testState.title}
        name='title'
        placeholder='Title...'
        onChange={e => {
          testState[e.target.name] = e.target.value;
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('label').text()).toEqual('Title');
    expect(wrapper.find('.form__input').props().value).toEqual('Buy milk');
    expect(wrapper.find('.form__input').props().name).toEqual('title');
    expect(wrapper.find('.form__input').props().placeholder).toEqual(
      'Title...',
    );
    wrapper.find('.form__input').simulate('change', {
      target: { name: 'title', value: 'Go for a walk' },
    });
    expect(testState.title).toEqual('Go for a walk');
  });
});

describe('<TodoForm />', () => {
  test('should return correct heading with 0 items in todo list', () => {
    const wrapper = shallow(
      <TodoForm
        title={testState.title}
        description={testState.description}
        handleChange={mockFunction}
        handleSubmit={mockFunction}
        listLength={0}
      />,
    );
    expect(wrapper.find('h1').text()).toEqual(
      "It seems that your to do list is empty. Let's add first item!",
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('should return correct heading with 10 items in todo list', () => {
    const wrapper = shallow(
      <TodoForm
        title={testState.title}
        description={testState.description}
        handleChange={mockFunction}
        handleSubmit={mockFunction}
        listLength={10}
      />,
    );
    expect(wrapper.find('h1').text()).toEqual(
      'Add more items to your to do list.',
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('should have 4 children', () => {
    const wrapper = shallow(
      <TodoForm
        title={testState.title}
        description={testState.description}
        handleChange={mockFunction}
        handleSubmit={mockFunction}
        listLength={10}
      />,
    );
    expect(wrapper.find('.form__main').children().length).toEqual(4);
  });
});
