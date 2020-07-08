import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import {
  filterArray,
  sortList,
  sortListByState,
} from './components/helperFunctions/helpers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todoList: [],
      idCounter: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem('state', JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    const localState = JSON.parse(localStorage.getItem('state'));
    if (localState) this.setState(localState);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      title, description, idCounter, todoList,
    } = this.state;
    const newToDo = {
      id: idCounter,
      title,
      description,
      isCompleted: false,
    };
    const sortedArray = sortList([...todoList, newToDo]);
    this.setState(prevState => ({
      title: '',
      description: '',
      todoList: sortedArray,
      idCounter: prevState.idCounter + 1,
    }));
  };

  handleClick = id => {
    const todoList = [...this.state.todoList];
    const entryToUpd = todoList.find(x => x.id === id);
    entryToUpd.isCompleted = !entryToUpd.isCompleted;
    const sortedArray = sortListByState(todoList, id, entryToUpd);
    this.setState({
      todoList: sortedArray,
    });
  };

  handleDelete = (e, id) => {
    const todoList = [...this.state.todoList];
    const filteredList = filterArray(todoList, id);
    this.setState({
      todoList: filteredList,
    });
    e.stopPropagation();
  };

  render() {
    const { title, description, todoList } = this.state;
    return (
      <main>
        <TodoForm
          title={title}
          description={description}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          listLength={todoList.length}
        />
        <List
          todoList={todoList}
          toggleCompletion={this.handleClick}
          deleteItem={this.handleDelete}
        />
      </main>
    );
  }
}
