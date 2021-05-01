
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
      NPINumber: '',
      specialty: '',
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
      navigate('/thank-you');
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

  handleMovePlaceholder = (val) => {
    this.setState({
      movePlaceholder: val,
    })
  }

  handleReturnPlaceholder = () => {
    this.setState({
      movePlaceholder: 0,
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
      NPINumber,
      HCPProfession,
      radioClicked,
      submitClicked,
      specialty,
      hovered,
    } = this.state
    const { signUpForm, handlePopUp } = this.props;
    return (
      <section className={signUpForm ? 'sign-up-popup-overlay' : ''} onClick={() => handlePopUp()}>
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
                                FIRST NAME*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='firstName'
                                value={firstName}
                                required
                                onChange={this.handleInputChange}
                                onFocus={() => this.handleMovePlaceholder(1)}
                                onBlur={this.handleReturnPlaceholder}
                              />
                              <Form.Control.Feedback type='invalid'>Please enter your first name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='formHorizontalEmail'>
                              <Form.Label column className={movePlaceholder === 3 ? 'email-focus' : email !== '' ? 'email-focus' : 'email'}>
                                EMAIL ADDRESS*
                              </Form.Label>
                              <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                required
                                onChange={this.handleInputChange}
                                onFocus={() => this.handleMovePlaceholder(3)}
                                onBlur={this.handleReturnPlaceholder}
                              />
                              <Form.Control.Feedback type='invalid'>
                                {email === '' ? 'Please enter your email address' : 'Please enter a valid email address'}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 0}}>
                            <Form.Group controlId='validationCustom02'>
                              <Form.Label column className={movePlaceholder === 2 ? 'last-name-focus' : lastName !== '' ? 'last-name-focus' : 'last-name'}>
                                LAST NAME*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='lastName'
                                value={lastName}
                                required
                                onChange={this.handleInputChange}
                                onFocus={() => this.handleMovePlaceholder(2)}
                                onBlur={this.handleReturnPlaceholder}
                              />
                              <Form.Control.Feedback type='invalid'>Please enter your last name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId='formHorizontalEmail'>
                              <Form.Label column className={movePlaceholder === 3 ? 'email-focus' : email !== '' ? 'email-focus' : 'email'}>
                                Confirm Email*
                              </Form.Label>
                              <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                required
                                onChange={this.handleInputChange}
                                onFocus={() => this.handleMovePlaceholder(3)}
                                onBlur={this.handleReturnPlaceholder}
                              />
                              <Form.Control.Feedback type='invalid'>
                                {email === '' ? 'Please enter your email address' : 'Please enter a valid email address'}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                          {/* <fieldset>
                            <Form.Group>
                              <Form.Label as='legend' column>
                                What is your interest in migraine?*
                              </Form.Label>
                              <Col>
                                <Form.Check
                                  type='radio'
                                  label='I am a medical professional'
                                  name='specialty'
                                  value='1'
                                  id='specialty1'
                                  required
                                  onChange={this.handleInputChange}
                                  onClick={() => {
                                    this.handleIsHCP();
                                    this.handleRadioClicked();
                                  }}
                                />
                                <Form.Check
                                  type='radio'
                                  label='I have migraine'
                                  name='specialty'
                                  value='2'
                                  id='specialty2'
                                  required
                                  onChange={this.handleInputChange}
                                  onClick={() => {
                                    this.handleIsNotHCP();
                                    this.handleRadioClicked();
                                  }}
                                />
                                <Form.Check
                                  type='radio'
                                  label='I know someone with migraine'
                                  name='specialty'
                                  value='3'
                                  id='specialty3'
                                  required
                                  onChange={this.handleInputChange}
                                  onClick={() => {
                                    this.handleIsNotHCP();
                                    this.handleRadioClicked();
                                  }}
                                />
                                <Form.Check
                                  type='radio'
                                  label='Other'
                                  name='specialty'
                                  value='4'
                                  id='specialty4'
                                  required
                                  onChange={this.handleInputChange}
                                  onClick={() => {
                                    this.handleIsNotHCP();
                                    this.handleRadioClicked();
                                  }}
                                  // feedback='Please select'
                                >

                                </Form.Check>
                              </Col>
                            {!radioClicked && submitClicked ?
                              <p id='radio-invalid-warning'>
                                Please select one option
                              </p>
                              :
                              <div>

                              </div>
                            }
                            </Form.Group>
                          </fieldset> */}
                          {/* {isHCP ?
                          <div>
                            <Form.Group controlId='form-hcp-dropdown'>
                              <Form.Label column>What is your specialty?*</Form.Label>
                              <Col>
                                <select as='select' required name='HCPProfession' onChange={this.handleInputChange} className='form-dropdown-select'>
                                  <option selected>Select one</option>
                                  <option value='Neurologist'>Neurologist</option>
                                  <option value='Headache Specialist'>Headache Specialist</option>
                                  <option value='Pain Specialist'>Pain Specialist</option>
                                  <option value='Primary Care'>Primary Care</option>
                                  <option value='NP/PA'>NP/PA</option>
                                  <option value='Registered Nurse'>Registered Nurse</option>
                                  <option value='Allergy & Immunology'>Allergy & Immunology</option>
                                  <option value='Anesthesiology'>Anesthesiology</option>
                                  <option value='Dentistry'>Dentistry</option>
                                  <option value='Dermatology'>Dermatology</option>
                                  <option value='Diagnostic Radiology'>Diagnostic Radiology</option>
                                  <option value='Emergency Medicine'>Emergency Medicine</option>
                                  <option value='Internal Medicine'>Internal Medicine</option>
                                  <option value='Medical Genetics'>Medical Genetics</option>
                                  <option value='Nuclear Medicine'>Nuclear Medicine</option>
                                  <option value='Obstetrics & Gynecology'>Obstetrics & Gynecology</option>
                                  <option value='Ophthalmology'>Ophthalmology</option>
                                  <option value='Pathology'>Pathology</option>
                                  <option value='Physical Medicine & Rehabilitation'>Physical Medicine & Rehabilitation</option>
                                  <option value='Preventative Medicine'>Preventative Medicine</option>
                                  <option value='Psychiatry'>Psychiatry</option>
                                  <option value='Radiation Oncology'>Radiation Oncology</option>
                                  <option value='Surgery'>Surgery</option>
                                  <option value='Urology'>Urology</option>
                                  <option value='Other medical professional'>Other medical professional</option>
                                </select>
                                {HCPProfession === '' && submitClicked ?
                                  <p id='dropdown-invalid-warning'>
                                    Please select one option
                                  </p>
                                  :
                                  <div>

                                  </div>
                                }
                              </Col>
                            </Form.Group>
                            <Form.Group controlId='form-NPI-number'>
                              <Form.Label column className={movePlaceholder === 4 ? 'NPI-Number-focus' : NPINumber !== '' ? 'NPI-Number-focus' : 'NPI-Number'}>
                                NPI number
                              </Form.Label>
                              <Col>
                                <Form.Control
                                  size='lg'
                                  type='text'
                                  name='NPINumber'
                                  value={NPINumber}
                                  onChange={this.handleInputChange}
                                  onFocus={() => this.handleMovePlaceholder(4)}
                                  onBlur={this.handleReturnPlaceholder}
                                />
                              </Col>
                            </Form.Group>
                          </div>
                            :
                            <div>

                            </div>
                          } */}
                          {/* <Form.Group controlId='validationCustom03'>
                            <Col>
                              <Form.Check type='checkbox' id={`terms-and-conditions`}>
                                <Form.Check.Input type='checkbox' required />
                                <Form.Check.Label className='privacy-policy-container'>
                                  <p className='upper-concent-content'>
                                    By checking this box, you are authorizing Lundbeck, its agents, or vendors acting on
                                    behalf of Lundbeck to send you information regarding Lundbeck and its products and
                                    services, send you additional health, medical, or patient education information,
                                    and contact you to seek your participation in other surveys or programs.
                                  </p>
                                  <br />
                                    Lundbeck will not sell the data you provide to any third party, at any time. View our {' '}
                                  <a href='https://www.lundbeck.com/us/terms-of-use-and-privacy-policy' id='form-privacy-policy-link' target='_blank'>Terms of Use and Privacy Policy</a>.
                                </Form.Check.Label>
                                <Form.Control.Feedback type='invalid' className='concent-feedback-label'>Please check the box to proceed</Form.Control.Feedback>
                              </Form.Check>
                            </Col>
                          </Form.Group> */}
                          {/* <Form.Group className='form-submit-btn-row'>
                            <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} xs={{span: 12}} className='form-submit-btn-col'>
                              <Button type='submit' id='form-submit-btn'>SUBMIT</Button>
                            </Col>
                          </Form.Group> */}
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