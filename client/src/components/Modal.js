import React, { Component } from 'react'
import { Modal, Button, Form, FormGroup} from 'react-bootstrap'
import  {Input, Col, Row, Label} from 'reactstrap'

class BootModal extends Component {
  state={
    first_name: "",
    last_name: "",
    phone: Number
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
    const payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone
    }
    this.props.handleSubmit(payload)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const currentAppt = this.props.currentAppt
    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Book Your Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="first_name">First Name</Label>
                  <Input
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    value={currentAppt.person ? currentAppt.person.first_name : ''}
                    onChange={this.state.handleChange}
                    required
                  />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input
                      type="text"
                      name="last_name"
                      value={currentAppt.person ? currentAppt.person.last_name : ''}
                      placeholder="Enter Last Name"
                      onChange={this.state.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="Phone">Phone</Label>
                <Input
                  type="tel"
                  pattern="^[0-9-+s()]*$"
                  name="phone"
                  defaultValue={currentAppt.person ? currentAppt.person.phone : ''}
                  onChange={this.state.handleChange}
                  placeholder="Enter Phone Number"
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BootModal