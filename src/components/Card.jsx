import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          {this.props.title && <h4 className='card-title'>{this.props.title}</h4>}
          {this.props.text && <p className='card-text'>{this.props.text}</p>}
          <button type='button' className='btn btn-primary'>Go somewhere</button>
        </div>
      </div>
    );
  }
}

export default Card;