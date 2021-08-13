
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
      thankYou: false,
      validated: false,
      count: 0,
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
    else if (event.target.name === 'confirmEmail') {
      if (event.target.value.length > 320) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    }
    else if (event.target.name === 'zipCode') {
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
    if (form.checkValidity() === false) {
      this.setState({
        submitClicked: true,
      })
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      this.setState({
        thankYou: true,
      })
    }
    this.setState({
      validated: true,
    }, () => {
      if (form.checkValidity() === true) {
        let postData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          confirmEmail: this.state.confirmEmail,
          zipCode: this.state.zipCode,
          specialty: this.state.specialty,
          role: this.state.role,
        }
        this.postSignUpData(postData)
      }
    });
  };

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const {
      validated,
      firstName,
      lastName,
      email,
      confirmEmail,
      zipCode,
      specialty,
      role,
      thankYou,
      submitClicked,
      hovered,
    } = this.state
    const { signUpForm, handlePopUp } = this.props;
    return (
      <section className={signUpForm ? 'sign-up-popup-overlay' : ''}>
        <Container className='sign-up-form-container'>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
            {
              !thankYou ?
              <div className={signUpForm ? 'sign-up-popup-col' : 'sign-up-popup-col-hidden'}>
                <Row>
                  <Col lg={{span: 1, offset: 11}}>
                    <div className='close-img-outer-container'>
                      <div
                        className='close-img-container'
                        onMouseEnter={() => this.handleHovered(true)}
                        onMouseLeave={() => this.handleHovered(false)}
                        onClick={() => handlePopUp()}
                      >
                        <img
                          src={hovered ? closeIconHovered : closeIcon}
                          className='close-img'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{span: 10, offset: 1}} xs={{span: 10, offset: 1}}>
                    <h2 className='blue text-center'>
                      Request a Representative
                    </h2>
                    <p className='text-center'>
                      Please provide the following information so we can put you in touch with a
                      Myfembree® representative in your area.
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
                          <Col lg={{span: 5, offset: 1, order: 1}} xs={{span: 10, offset: 1, order: 1}}>
                            <Form.Group
                              controlId='validationCustom01'
                              className={(submitClicked === true && firstName === '') ? 'invalid-group' : ''}
                            >
                              <Form.Label column>
                                First name*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='firstName'
                                value={firstName}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>
                                This field cannot be blank.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 1, order: 3}} xs={{span: 10, offset: 1, order: 3}}>
                            <Form.Group
                              controlId='formHorizontalEmail'
                              className={(submitClicked === true && email === '') ? 'invalid-group' : ''}
                            >
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
                                {email === '' ? 'This field cannot be blank.' : 'Please enter a valid email address.'}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 1, order: 5}} xs={{span: 10, offset: 1, order: 5}}>
                            <Form.Group controlId='form-hcp-dropdown' className='select-form-group'>
                              {/* <Form.Label column>What is your specialty?*</Form.Label> */}
                              <select
                                as='select'
                                required
                                name='specialty'
                                onChange={this.handleInputChange}
                                className={(specialty === '' && submitClicked) ? 'form-dropdown-select invalid-dropdown' : 'form-dropdown-select'}
                              >
                                <option defaultValue>Select specialty*</option>
                                <option value='Gynecologic Oncology'>Gynecologic oncology</option>
                                <option value='Reproductive Endocrinology'>Reproductive endocrinology</option>
                                <option value='Urogynecology'>Urogynecology</option>
                                <option value='Obstetrics & gynecology'>Generalist</option>
                                <option value='Other'>Other</option>
                              </select>
                              {specialty === '' && submitClicked ?
                                <p id='dropdown-invalid-warning'>
                                  Please select a specialty.
                                </p>
                                :
                                <div>

                                </div>
                              }
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 0, order: 2}} xs={{span: 10, offset: 1, order: 2}}>
                            <Form.Group
                              controlId='validationCustom02'
                              className={(submitClicked === true && lastName === '') ? 'invalid-group' : ''}
                            >
                              <Form.Label column>
                                Last name*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='lastName'
                                value={lastName}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>
                                This field cannot be blank.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 0, order: 4}} xs={{span: 10, offset: 1, order: 4}}>
                            <Form.Group
                              controlId='formHorizontalConfirmEmail'
                              className={(submitClicked === true && confirmEmail === '') ? 'invalid-group' : ''}
                            >
                              <Form.Label column>
                                Confirm email*
                              </Form.Label>
                              <Form.Control
                                type='email'
                                name='confirmEmail'
                                value={confirmEmail}
                                required
                                onChange={this.handleInputChange}
                                isInvalid={confirmEmail !== email}
                              />
                              <Form.Control.Feedback type='invalid'>
                                {confirmEmail !== email ? 'Confirmation email does not match email.' : 'This field cannot be blank.'}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={{span: 5, offset: 0, order: 6}} xs={{span: 10, offset: 1, order: 6}}>
                            <Form.Group controlId='form-hcp-dropdown' className='select-form-group'>
                              {/* <Form.Label column>What is your specialty?*</Form.Label> */}
                              <select
                                as='select'
                                required
                                name='role'
                                onChange={this.handleInputChange}
                                className={(role === '' && submitClicked) ? 'form-dropdown-select invalid-dropdown' : 'form-dropdown-select'}
                              >
                                <option defaultValue>Select role*</option>
                                <option value='Physician'>Physician</option>
                                <option value='Physician Assistant'>Physician assistant</option>
                                <option value='Nurse'>Nurse</option>
                                <option value='Nurse Practitioner'>Nurse practitioner</option>
                                <option value='Nurse Practitioner'>Other</option>
                              </select>
                              {role === '' && submitClicked ?
                                <p id='dropdown-invalid-warning'>
                                  Please select a role.
                                </p>
                                :
                                <div>

                                </div>
                              }
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 6, offset: 3}} xs={{span: 10, offset: 1}}>
                            <Form.Group
                              controlId='validationCustom03'
                              className={(submitClicked === true && zipCode === '') ? 'invalid-group' : ''}
                            >
                              <Form.Label column>
                                ZIP code*
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='zipCode'
                                value={zipCode}
                                required
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type='invalid'>
                                This field cannot be blank.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 10, offset: 1}} xs={{span: 10, offset: 1}}>
                            <Form.Group controlId='validationCustom04'>
                              <Col className='form-checkbox-col'>
                                <Form.Check type='checkbox' id={`terms-and-conditions`}>
                                  <Form.Check.Input type='checkbox' required />
                                  <Form.Check.Label className='privacy-policy-container'>
                                    <p className='upper-concent-content'>
                                      By completing and submitting this form, you certify that you are a licensed
                                      healthcare provider, and you agree to have a Myfembree representative contact
                                      you. You also understand and agree that any information you provide on this
                                      form will be used in accordance with the Myovant {' '}
                                      <a
                                        className='pink extra-bold'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.myovant.com/privacy-policy/'
                                      >
                                        Privacy Policy, {' '}
                                      </a>
                                      and you agree to the {' '}
                                      <a
                                        className='pink extra-bold'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.myovant.com/terms-of-use/'
                                      >
                                        Terms of Use {' '}
                                      </a>
                                      for information collected on this form.
                                    </p>
                                  </Form.Check.Label>
                                  <Form.Control.Feedback type='invalid' className='concent-feedback-label'>
                                    Please provide confirmation.
                                  </Form.Control.Feedback>
                                </Form.Check>
                              </Col>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{span: 4, offset: 4}} xs={{span: 10, offset: 1}}>
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
              :
              <div className={signUpForm ? 'thank-you-popup-col' : 'thank-you-popup-col-hidden'}>
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
                        alt=''
                        loading='lazy'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{span: 10, offset: 1}} xs={{span: 10, offset: 1}}>
                    <h2 className='blue text-center'>
                      Thank You
                    </h2>
                    <p className='text-center'>
                      We have received your request for more information about Myfembree®
                      (relugolix, estradiol, and norethindrone acetate) tablets. A Myfembree representative
                      in your area will follow up soon to get you the information you need.
                    </p>
                  </Col>
                </Row>
              </div>
            }
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SignUpForm

//emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);