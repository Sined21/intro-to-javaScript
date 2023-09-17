import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      logs: [],
    };
  }

  increase = () => {
    this.setState(({ logs, counter }) => {
      const newCounter = counter + 1;
      return { counter: newCounter, logs: [newCounter, ...logs] };
    });
  };

  decrease = () => {
    this.setState(({ logs, counter }) => {
      const updatedCounter = counter - 1;
      return { counter: updatedCounter, logs: [updatedCounter, ...logs] };
    });
  };

  removeLog = (id) => () => {
    const updatedLogs = this.state.logs.filter((item, index) => index !== id);
    this.setState({ logs: updatedLogs });
  };

  render() {
    const { logs } = this.state;

    return (
      <div>
        <div className='btn-group font-monospace' role='group'>
          <button type='button' className='btn btn-outline-success' onClick={this.increase}>+</button>
          <button type='button' className='btn btn-outline-danger' onClick={this.decrease}>-</button>
        </div>
        <div className='list-group'>
          {logs.map((item, index) => {
            return (
              <button
                className='list-group-item list-group-item-action'
                type='button'
                key={index}
                onClick={this.removeLog(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Component;