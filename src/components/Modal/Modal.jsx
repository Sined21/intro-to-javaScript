import React, { Component } from 'react';
import cn from 'classnames';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Modal extends Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    const classNames = cn('modal', { 'fade show': isOpen });

    return (
      <div className={classNames} style={{ display: isOpen ? 'block' : 'none' }} role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;