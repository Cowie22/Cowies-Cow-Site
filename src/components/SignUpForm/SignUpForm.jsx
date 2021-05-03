
import React from 'react'
import Layout from '../Layout'
import { navigate } from 'gatsby'
import Axios from 'axios'
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap'

import closeIcon from '../../assets/images/close.svg'
import closeIconHovered from '../../assets/images/close-hovered.svg'


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      zipCode: '',
      specialty: '',
      role: '',
      NPINumber: '',
      HCPProfession: 'waiting',
      validated: false,
      isHCP: false,
      count: 0,
      movePlaceholder: 0,
      radioClicked: false,
      submitClicked: false,
      hovered: false,
    }
  }

  postSignUpData(info) {
    Axios.post('', info)
      .then(res => {
        console.log('MADE IT', res)
      })
  }

  handleInputChange = (event) => {
    let newState = {};

    let lastVal = event.target.value.slice(-1);

    const letters = new RegExp(/^[a-zA-Z]/.test(lastVal)).toString();
    console.log(letters)
    let lettersBool = letters === '/false/' ? false : true;

    const nums = new RegExp(/\d+/g.test(lastVal)).toString();
    let numsBool = nums === '/false/' ? false : true;


    if (event.target.name === 'firstName') {
      if ((!lettersBool || event.target.value.length > 50) && event.target.value.length !== 0) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    }
    else if (event.target.name === 'lastName') {
      if ((!lettersBool || event.target.value.length > 100) && event.target.value.length !== 0) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    }
    else if (event.target.name === 'email') {
      if (event.target.value.length > 320) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    }
    else if (event.target.name === 'NPINumber') {
      if ((!numsBool || event.target.value.length > 10) && event.target.value.length !== 0) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    }
    else {
      newState[event.target.name] = event.target.value;
      this.setState(newState);
    }
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || this.state.HCPProfession === '') {
      this.setState({
        submitClicked: true,
      })
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true && this.state.HCPProfession !== '') {
      event.preventDefault();
      // navigate('/thank-you');
    }
    this.setState({
      validated: true,
    }, () => {
      if (this.state.validated === true) {
        let postData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          specialty: this.state.specialty,
          HCPProfession: this.state.HCPProfession,
          NPINumber: this.state.NPINumber,
        }
        this.postSignUpData(postData)
      }
    });
  };

  handleIsHCP = () => {
    this.setState({
      isHCP: true,
      HCPProfession: '',
    })
  }

  handleIsNotHCP = () => {
    this.setState({
      isHCP: false,
      HCPProfession: 'waiting',
    })
  }

  handleRadioClicked = () => {
    this.setState({
      radioClicked: true,
    })
  }

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const {
      validated,
      isHCP,
      movePlaceholder,
      firstName,
      lastName,
      email,
      confirmEmail,
      zipCode,
      specialty,
      role,
      NPINumber,
      HCPProfession,
      radioClicked,
      submitClicked,
      hovered,
    } = this.state
    const { signUpForm, handlePopUp } = this.props;
    return (
      <section className={signUpForm ? 'sign-up-popup-overlay' : ''}>
        <Container className='sign-up-form-container'>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <div className={signUpForm ? 'sign-up-popup-col' : 'sign-up-popup-col-hidden'}>
                <Row>
                  <Col lg={{span: 1, offset: 11}}>
                    <div
                      className='close-img-container'
                      onMouseEnter={() => this.handleHovered(true)}
                      onMouseLeave={() => this.handleHovered(false)}
                      onClick={() => handlePopUp()}
                    >
                      <img
                        src={hovered ? closeIconHovered : closeIcon}
                        className='close-img'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{span: 10, offset: 1}}>
                    <h2 className='blue text-center'>
                      Request a Representative
                    </h2>
                    <p className='text-center'>
                      Please provide the following information about yourself so we can put you in touch with a
                      Myfembree<sup>®</sup> representative in your area.
                    </p>
                    <p className='text-center extra-bold'>
                      *Indicates a required field.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='form-container'>
                      <Form
                        className='inner-sign-up-form-container'
                        noValidate
                        validated={validated}
                        onSubmit={this.handleSubmit}
                        >
                        <Row>
                          <Col lg={{span: 5, offset: 1}}>
                            <Form.Group controlId='validationCustom01'>
                              <Form.Label column className={movePlaceholder === 1 ? 'first-name-focus' : firstName !== '' ? 'first-name-focus' : 'first-name'}>
                                First Name*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='firstName'
                                value={firstName}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>Please enter your first name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='formHorizontalEmail'>
                              <Form.Label column>
                                Email*
                              </Form.Label>
                              <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>
                                {email === '' ? 'Please enter your email address' : 'Please enter a valid email address'}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='form-hcp-dropdown'>
                              {/* <Form.Label column>What is your specialty?*</Form.Label> */}
                              <select as='select' required name='specialty' onChange={this.handleInputChange} className='form-dropdown-select'>
                                <option selected>Select Specialty*</option>
                                <option value='Neurologist'>Neurologist</option>
                                <option value='Headache Specialist'>Headache Specialist</option>
                                <option value='Pain Specialist'>Pain Specialist</option>
                                <option value='Primary Care'>Primary Care</option>
                                <option value='NP/PA'>NP/PA</option>
                                <option value='Registered Nurse'>Registered Nurse</option>
                                <option value='Allergy & Immunology'>Allergy & Immunology</option>
                                <option value='Anesthesiology'>Anesthesiology</option>
                                <option value='Dentistry'>Dentistry</option>
                              </select>
                              {HCPProfession === '' && submitClicked ?
                                <p id='dropdown-invalid-warning'>
                                  Please select one option
                                </p>
                                :
                                <div>

                                </div>
                              }
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 0}}>
                            <Form.Group controlId='validationCustom02'>
                              <Form.Label column>
                                Last Name*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='lastName'
                                value={lastName}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>Please enter your last name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='formHorizontalConfirmEmail'>
                              <Form.Label column>
                                Confirm Email*
                              </Form.Label>
                              <Form.Control
                                type='email'
                                name='confirmEmail'
                                value={confirmEmail}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>
                                {email === '' ? 'Please enter your email address' : 'Please enter a valid email address'}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='form-hcp-dropdown'>
                              {/* <Form.Label column>What is your specialty?*</Form.Label> */}
                              <select as='select' required name='role' onChange={this.handleInputChange} className='form-dropdown-select'>
                                <option selected>Select Role*</option>
                                <option value='Neurologist'>Neurologist</option>
                                <option value='Headache Specialist'>Headache Specialist</option>
                                <option value='Pain Specialist'>Pain Specialist</option>
                                <option value='Primary Care'>Primary Care</option>
                                <option value='NP/PA'>NP/PA</option>
                                <option value='Registered Nurse'>Registered Nurse</option>
                                <option value='Allergy & Immunology'>Allergy & Immunology</option>
                                <option value='Anesthesiology'>Anesthesiology</option>
                                <option value='Dentistry'>Dentistry</option>
                              </select>
                              {HCPProfession === '' && submitClicked ?
                                <p id='dropdown-invalid-warning'>
                                  Please select one option
                                </p>
                                :
                                <div>

                                </div>
                              }
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 6, offset: 3}}>
                            <Form.Group controlId='validationCustom03'>
                              <Form.Label column>
                                ZIP Code*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='zipCode'
                                value={zipCode}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>Please enter your last name</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 10, offset: 1}}>
                            <Form.Group controlId='validationCustom03'>
                              <Col className='form-checkbox-col'>
                                <Form.Check type='checkbox' id={`terms-and-conditions`}>
                                  <Form.Check.Input type='checkbox' required />
                                  <Form.Check.Label className='privacy-policy-container'>
                                    <p className='upper-concent-content'>
                                      By completing and submitting this form, you certify that you are a licensed
                                      healthcare provider, and you agree to have a Myfembree representative contact
                                      you. You also understand and agree that any information you provide on this
                                      form will be used in accordance with the Myovant {' '}
                                      <a className='pink extra-bold' href=''>Privacy Policy</a> and you agree to
                                      the <a className='pink extra-bold' href=''>Terms of Use</a> for information
                                      collected on this form.*
                                    </p>
                                  </Form.Check.Label>
                                  <Form.Control.Feedback type='invalid' className='concent-feedback-label'>Please check the box to proceed</Form.Control.Feedback>
                                </Form.Check>
                              </Col>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 4, offset: 4}}>
                            <Form.Group className='form-submit-btn-row'>
                              <div className='cta-btn-container form-submit-btn-container'>
                                <Button type='submit' id='form-submit-btn' className='cta-btn pink-btn'>
                                  Sign Up Now
                                </Button>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SignUpForm

//emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);