import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap'

class MoodForm extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalQuestion">
          <Col componentClass={ControlLabel} sm={2}>
            mood
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="mood" ref="mood" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Name" ref="name" />
          </Col>
        </FormGroup>

        <DropdownButton title="The Weather Outside Is" id="layoutDropdown">
             <MenuItem eventKey="CELTIC_CROSS" >Sunny</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="TETRAKTYS" >Cloudy</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="YOU_ME_US" >Foggy</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="CAREER_PATH" >Windy</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="RELATIONSHIP_SPREAD" >Rainy</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="SELF_HEALING" >Snowy</MenuItem>
        </DropdownButton>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.submitClicked.bind(this)}>
              Give Me a Playlist
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  submitClicked(event) {
    event.preventDefault()

    const mood =  ReactDOM.findDOMNode(this.refs.mood).value
    const name =  ReactDOM.findDOMNode(this.refs.name).value

    this.props.submitForm( mood, name )
  }

}

export default MoodForm
