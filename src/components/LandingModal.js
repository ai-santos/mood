import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import '../../public/styles/landing.css'

class LandingModal extends Component {
  hideLandingModal() {
    this.props.hideLandingModal()
  }

  render() {
    return (
      <Modal show={true} onHide={this.hideLandingModal.bind(this)}
        dialogClassName="custom-modal">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">What Is Your Mood?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideLandingModal.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default LandingModal