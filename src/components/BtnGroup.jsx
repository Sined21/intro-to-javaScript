import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLeftButton: false,
      activeRightButton: false,
    };
  }

  toggleLeftButton = () => {
    this.setState(() => ({ activeLeftButton: true, activeRightButton: false }));
  };

  toggleRightButton = () => {
    this.setState(() => ({ activeRightButton: true, activeLeftButton: false }));
  };

  render() {
    const { activeLeftButton, activeRightButton } = this.state;
    
    const btnClassNames = ['btn', 'btn-primary'];
    const btnLeftClassNames = classNames(btnClassNames, 'left', { 'active': activeLeftButton });
    const btnRightClassNames = classNames(btnClassNames, 'right', { 'active': activeRightButton });

    return (
      <div className='btn-group' role='group'>
        <button type='button' className={btnLeftClassNames} onClick={this.toggleLeftButton}>Left</button>
        <button type='button' className={btnRightClassNames} onClick={this.toggleRightButton}>Right</button>
      </div>
    );
  }
}

export default BtnGroup;