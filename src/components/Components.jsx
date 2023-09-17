import React, { Component } from 'react';
import Modal from './Modal/Modal';

class Components extends Component {
  state = { modal: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  
  render() {
    return (
      <>
        <button type='button' className='modal-open-button btn btn-danger' onClick={this.toggle}>Open</button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </Modal.Body>
          <Modal.Footer>
            <button type='button' className='modal-close-button btn btn-secondary' onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Components;