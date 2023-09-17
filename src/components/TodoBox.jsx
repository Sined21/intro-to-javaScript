import React, { Component } from 'react';
import { v4 } from 'uuid';

import Item from './Item';
import Form from './Form';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: '',
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { inputData, items } = this.state;
    const newItem = { id: v4(), value: inputData };

    this.setState(() => {
      return { inputData: '', items: [newItem, ...items] };
    });
  };

  handleChange = (event) => {
    this.setState({ inputData: event.target.value });
  };
  
  handleRemove = (id) => () => {
    const { items } = this.state;
    const updatedItems = items.filter(item => item.id !== id)
    
    this.setState({ items: updatedItems });
  }

  render() {
    const { inputData, items } = this.state;

    return (
      <>
        <div className='mb-3'>
          <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={inputData} />
        </div>
        {items.map(item => {
          return <Item key={item.id} task={item.value} handleRemove={this.handleRemove(item.id)} />;
        })}
      </>
    );
  }
}

export default TodoBox;