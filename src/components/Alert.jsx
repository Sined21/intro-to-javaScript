import React from 'react';

class Alert extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.type}`} role='alert'>{this.props.text}</div>
    );
  }
}

Alert.defaultProps = {
  type: 'primary'
};

export default Alert;