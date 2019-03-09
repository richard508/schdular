import React, { Component } from 'react'
import { Modal, Button, Form, FormGroup} from 'react-bootstrap'
import  {Input, Col, Row, Label} from 'reactstrap'

class BootModal extends Component {
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleSubmit()
  }

  render() {
    const {first_name, last_name, phone} = this.props
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
                    value={first_name ? first_name : ''}
                    onChange={this.props.handleChange}
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
                      value={last_name ? last_name : ''}
                      placeholder="Enter Last Name"
                      onChange={this.props.handleChange}
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
                  defaultValue={phone ? phone : ''}
                  onChange={this.props.handleChange}
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