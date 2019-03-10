import React from 'react'
import { Modal, Button, Form, FormGroup} from 'react-bootstrap'
import  {Input, Col, Row, Label} from 'reactstrap'

const BootModal = (props) => {
    const {isAvailable, currentAppt} = props
    return (
      <Modal
        show={props.show}
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
          <Form onSubmit={props.handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="first_name">First Name</Label>
                  <Input
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    value={currentAppt.first_name || ''}
                    onChange={props.handleChange}
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
                      value={currentAppt.last_name || ''}
                      placeholder="Enter Last Name"
                      onChange={props.handleChange}
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
                  value={currentAppt.phone || ''}
                  onChange={props.handleChange}
                  placeholder="Enter Phone Number"
                  required
                />
              </FormGroup>
              {isAvailable 
                ? <Button type="submit" color="primary">Submit</Button>
                : <Button onClick={props.handleUpdate} color="primary">Update</Button>
              }
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BootModal