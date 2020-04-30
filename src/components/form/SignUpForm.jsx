import React, { Component } from "react"
import { Row, Col, Dropdown } from "react-bootstrap"
import { navigate } from "gatsby"
import $ from "jquery"

import arrowRightWhite from "../../assets/images/arrowRightWhite.svg"
import arrowRightGreen from "../../assets/images/arrowRightGreen.svg"
import arrowUpGreen from "../../assets/images/arrowUpGreen.svg"
import arrowDownGreen from "../../assets/images/arrowDownGreen.svg"

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      zip: "",
      specialty: "Please Select Your Specialty",
      HCP: false,
      validName: false,
      validEmail: false,
      validPhone: false,
      validZip: false,
      checkedOne: false,
      dropdownIsOpen: false,
      hovered: 0,
    }
    this.formSubmitted = false
    this.emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    this.phoneRegex = new RegExp(
      /[(]?\d{3}[)]?[- ]?\d{3}[- ]?\d{4}( x\d{4})?|x\d{4}/
    )
    this.zipRegex = new RegExp(/^\d{5,}$/)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.selectOption = this.selectOption.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.formIsValid = this.formIsValid.bind(this)
    this.postData = this.postData.bind(this)
    this.getCookie = this.getCookie.bind(this)
    this.deleteCookies = this.deleteCookies.bind(this)
  }

  handleHovered = num => {
    this.setState({
      hovered: num,
    })
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      })
      this.validateForm()
    }
  }

  toggleCheck(field) {
    switch (field) {
      case "HCP":
        this.setState({
          [field]: !this.state.HCP,
        })
        this.validateForm()
        break

      default:
        break
    }
  }

  validateForm() {
    this.state.fullName !== ""
      ? this.setState({ validName: true })
      : this.setState({ validName: false })
    this.emailRegex.test(this.state.email)
      ? this.setState({ validEmail: true })
      : this.setState({ validEmail: false })
    this.phoneRegex.test(this.state.phoneNumber)
      ? this.setState({ validPhone: true })
      : this.setState({ validPhone: false })
    this.zipRegex.test(this.state.zip)
      ? this.setState({ validZip: true })
      : this.setState({ validZip: false })
  }

  formIsValid() {
    if (
      this.state.fullName !== "" &&
      this.emailRegex.test(this.state.email) &&
      this.phoneRegex.test(this.state.phoneNumber) &&
      this.zipRegex.test(this.state.zip) &&
      this.state.HCP
    ) {
      return true
    } else {
      return false
    }
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.formSubmitted = true
    this.validateForm()
    if (this.formIsValid()) {
      // this.postData()
      this.deleteCookies()
      navigate("/thankyou")
    }
  }

  selectOption(field, value) {
    this.setState({ [field]: value })
  }

  postData() {
    var data = {
      full_name: this.state.fullName,
      email: this.state.email,
      phone_number: this.state.phoneNumber,
      zip_code: this.state.zip,
      specialty: this.state.specialty,
      healthcare_professional_confirmation: this.state.HCP ? "yes" : "no",
      utm_source: this.getCookie("utm_source"),
      utm_medium: this.getCookie("utm_medium"),
      utm_campaign: this.getCookie("utm_campaign"),
      utm_content: this.getCookie("utm_content"),
      utm_term: this.getCookie("utm_term"),
    }

    $.ajax({
      type: "POST",
      url: "",
      data: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      error: e => console.log(e),
    })
  }

  getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  deleteCookies() {
    document.cookie = "utm_source="
    document.cookie = "utm_medium="
    document.cookie = "utm_campaign="
    document.cookie = "utm_content="
    document.cookie = "utm_term="
  }

  render() {
    return (
      <Row className="form-component">
        <Col className="form">
          <form>
            <Row>
              <Col className="input-field" lg={12} xs={12}>
                <input
                  type="text"
                  id="fullName"
                  required={true}
                  value={this.state.fullName}
                  onChange={this.update("fullName")}
                  className={
                    this.state.validName || !this.formSubmitted ? "" : "invalid"
                  }
                />
                <label htmlFor="fullName">
                  <strong>Full Name*</strong>
                </label>
                <p
                  className={
                    this.state.validName || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your full name.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="">
                <input
                  type="text"
                  id="eaddress"
                  required={true}
                  value={this.state.email}
                  onChange={this.update("email")}
                  className={
                    this.state.validEmail || !this.formSubmitted
                      ? ""
                      : "invalid"
                  }
                />
                <label htmlFor="eaddress">
                  <strong>Email Address*</strong>
                </label>
                <p
                  className={
                    this.state.validEmail || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your email address.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={6} xs={12}>
                <input
                  type="text"
                  id="phoneNumber"
                  value={this.state.phoneNumber}
                  required={true}
                  onChange={this.update("phoneNumber")}
                  className={
                    this.state.validPhone || !this.formSubmitted
                      ? ""
                      : "invalid"
                  }
                />
                <label htmlFor="phoneNumber">
                  <strong>Phone Number*</strong>
                </label>
                <p
                  className={
                    this.state.validPhone || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your phone number.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={6} xs={12}>
                <input
                  type="text"
                  id="zip"
                  value={this.state.zip}
                  required={true}
                  onChange={this.update("zip")}
                  className={
                    this.state.validZip || !this.formSubmitted ? "" : "invalid"
                  }
                />
                <label htmlFor="zip">
                  <strong>Zip Code*</strong>
                </label>
                <p
                  className={
                    this.state.validZip || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your ZIP code.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={6} className="form-item">
                <Dropdown
                  onToggle={() =>
                    this.setState({
                      dropdownIsOpen: !this.state.dropdownIsOpen,
                    })
                  }
                >
                  <Dropdown.Toggle
                    className="toggle-btn text-left"
                    type="button"
                  >
                    {this.state.specialty}
                    <img
                      src={
                        this.state.dropdownIsOpen
                          ? arrowUpGreen
                          : arrowDownGreen
                      }
                      style={{ height: "18px" }}
                    ></img>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption("specialty", "Allergy/Immunology")
                      }
                    >
                      Allergy/Immunology
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption(
                          "specialty",
                          "Allergy/Immunology fellow"
                        )
                      }
                    >
                      Allergy/Immunology fellow
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption(
                          "specialty",
                          "Allied health professional"
                        )
                      }
                    >
                      Allied health professional
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption("specialty", "General pediatrics")
                      }
                    >
                      General pediatrics
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption("specialty", "Otolaryngology")
                      }
                    >
                      Otolaryngology
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption("specialty", "Nurse Practitioner")
                      }
                    >
                      Nurse Practitioner
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() =>
                        this.selectOption("specialty", "Physician Assistant")
                      }
                    >
                      Physician Assistant
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row>
              <Col lg={7}>
                <Row
                  className={
                    this.state.HCP || !this.formSubmitted
                      ? "checkbox-wrapper no-border"
                      : "checkbox-wrapper no-border invalid"
                  }
                >
                  <Col lg={1} xs={1}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.HCP}
                        required={true}
                      />
                      <span
                        className="checkmark"
                        onClick={() => this.toggleCheck("HCP")}
                        id="hcp-checkbox"
                      />
                    </label>
                  </Col>
                  <Col>I am a US Healthcare Professional*</Col>
                  <p
                    className={
                      this.state.HCP || !this.formSubmitted
                        ? "hidden"
                        : "invalid"
                    }
                  >
                    Please confirm if you are a US healthcare professional.
                  </p>
                </Row>
              </Col>
            </Row>

            <Row className="terms">
              <Col>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent bibendum placerat dictum. Sed eleifend ante risus, id
                  vulputate diam finibus eget. Sed fermentum dolor velit, sed
                  sodales elit porta mattis.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={5} xs={12}>
                <button
                  className="submit-btn"
                  onClick={this.handleFormSubmit}
                  onMouseEnter={() => this.handleHovered(1)}
                  onMouseLeave={() => this.handleHovered(0)}
                >
                  <span>Submit</span>
                  <img
                    src={
                      this.state.hovered === 1
                        ? arrowRightGreen
                        : arrowRightWhite
                    }
                  />
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    )
  }
}
