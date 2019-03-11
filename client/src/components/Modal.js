import React from 'react'
import { Modal, Button, Form, FormGroup, Dropdown} from 'react-bootstrap'
import  {Input, Col, Row, Label} from 'reactstrap'

const BootModal = (props) => {
    const {isAvailable, currentAppt, availableTimes} = props
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
          {isAvailable ? ''
            : <Dropdown>
                <div>Change Time: </div>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {availableTimes[0].time}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {availableTimes.map(time => {
                    if(time._id !== availableTimes[0]._id){
                      return <Dropdown.Item key={time._id} onClick={(e) => props.timeChange(e, time)}>{time.time}</Dropdown.Item>
                    } else return ''
                  })}
                </Dropdown.Menu>
              </Dropdown>
            }
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
              <Button type="submit" style={{marginRight: '10px'}} color="primary">{isAvailable ? 'Submit' : 'Update'}</Button>
              {isAvailable ? '' : <Button className='btn-danger' onClick={props.handleCancel}>Cancel Appointment</Button>}
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BootModal