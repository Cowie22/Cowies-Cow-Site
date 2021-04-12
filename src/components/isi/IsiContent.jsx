import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class IsiContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // width: 0,
      // yDirection: 0,
      AdcetrisOpen: false,
      safetyInfoOpen: true,
    }
  }

  // componentDidMount = () => {
  //   this.updateWindowDimensions();
  //   this.handleScroll();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // updateWindowDimensions = () => {
  //   this.setState({
  //     width: window.innerWidth,
  //   })
  // }

  // handleScroll = (event) => {
  //   this.setState({
  //     yDirection: window.pageYOffset
  //   })
  //   let element = document.querySelector('.isi-tray');
  //   if (this.state.yDirection < 1) {
  //     element.classList.remove('scroll');
  //   }
  // }

  handleAdcetrisOpen = () => {
    const { AdcetrisOpen, safetyInfoOpen } = this.state;
    const { nonExpandedISI } = this.props;
    let element = document.querySelector('.isi-tray');

    if (!AdcetrisOpen && !safetyInfoOpen) {
      this.setState({
        AdcetrisOpen: true,
        safetyInfoOpen: true,
      })
      !nonExpandedISI ? element.classList.add('expanded') :
      element.classList.add('non-isi-expanded')
    }
    if (AdcetrisOpen && safetyInfoOpen) {
      this.setState({
        AdcetrisOpen: false,
        safetyInfoOpen: true,
      })
      element.classList.remove('expanded')
      element.classList.remove('non-isi-expanded')
    }
    if (AdcetrisOpen) {
      this.setState({
        AdcetrisOpen: false,
      })
      element.classList.remove('expanded')
      element.classList.remove('non-isi-expanded')
    }
    if (!AdcetrisOpen) {
      this.setState({
        AdcetrisOpen: true,
      })
      !nonExpandedISI ? element.classList.add('expanded') :
      element.classList.add('non-isi-expanded')
    }
  }

  handleSafetyInfoOpen = () => {
    const { AdcetrisOpen, safetyInfoOpen } = this.state;
    const { nonExpandedISI } = this.props;
    let element = document.querySelector('.isi-tray');

    if (safetyInfoOpen && !AdcetrisOpen) {
      this.setState({
        safetyInfoOpen: false,
        AdcetrisOpen: false,
      })
      !nonExpandedISI ? element.classList.add('expanded') :
      element.classList.add('non-isi-expanded')
    }
    if (!safetyInfoOpen  && !AdcetrisOpen) {
      this.setState({
        safetyInfoOpen: true,
        AdcetrisOpen: false,
      })
      element.classList.remove('expanded')
      element.classList.remove('non-isi-expanded')
    }
    if (safetyInfoOpen) {
      this.setState({
        safetyInfoOpen: false,
        AdcetrisOpen: false,
      })
      !nonExpandedISI ? element.classList.add('expanded') :
      element.classList.add('non-isi-expanded')
    }
  }

  render() {
    const { AdcetrisOpen, safetyInfoOpen } = this.state;
    const { Plus, Minus, isIsiExpanded, width, yDirection } = this.props
    return (
      <section>
        <Container>
          <Row>
            {/* {width < 769 ?
              <Col xs={{span: 12, order: 1}} className='isi-mobile-header-col'>
                <div
                  className='isi-mobile-header-container'
                  onClick={() => {
                    this.handleAdcetrisOpen()
                  }}
                >
                  <h2 className='isi-mobile-header'>
                    Indications
                  </h2>
                  {AdcetrisOpen ?
                    <img loading='lazy'
                    src={Minus}
                    width="12"
                    height="12"
                    className='isi-mobile-header-img'
                    >
                    </img>
                    :
                    <img loading='lazy'
                    src={Plus}
                    width="12"
                    height="12"
                    className='isi-mobile-header-img'
                    >
                    </img>
                  }
                </div>
              </Col>
              :
              <div>

              </div>
              } */}
            <Col
              lg={{span: 5, order: 2}}
              xs={{span: 12, order: 3}}
              style={
                !AdcetrisOpen && width < 769 && yDirection < 1 ? {height: '100%', display: 'inline', overflow: 'hidden', transition: '.4s height'} :
                !AdcetrisOpen && width < 769 ? {height: '100%', display: 'inline', overflow: 'hidden', transition: '.4s height'} :
                AdcetrisOpen && width < 769 ? {height: '100%', display: 'inline', overflow: 'scroll', transition: '.4s height'} :
                {}
              }
            >
              {/* {width > 768 ? */}
                <h2 className='indications-header'>
                  Indications
                </h2>
                {/* :
                <div>

                </div>
              } */}
              <p className='right-isi-header'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</strong>
              </p>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </li>
              </ul>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</strong>
              </p>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </li>
              </ul>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem Ipsum</strong>
              </p>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's
                </li>
              </ul>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's</strong>
              </p>
              <ul>
                <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </li>
              </ul>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem ipsum</strong>
              </p>
              <ul>
                <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's
                </li>
              </ul>
              <p className='right-isi-header'>
                <strong className='teal'>Lorem ipsum</strong>
              </p>
              <ul>
                <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
                </li>
              </ul>
            </Col>
            {width < 769 ?
              <Col
                xs={{span: 12, order: 1}}
                className='isi-mobile-header-col-safety'
                onClick={() => {
                  this.handleSafetyInfoOpen()
                }}
              >
                <div
                  className='isi-mobile-header-container'
                  style={{zIndex: 9999}}
                >
                  <h2 className='isi-mobile-header'>
                    Indications and Important Safety Information
                  </h2>
                  {!safetyInfoOpen ?
                    <img
                      src={Minus}
                      width="12"
                      height="12"
                      className='isi-mobile-header-img'
                      id='isi-mobile-header-img-2'
                    >
                    </img>
                    :
                    <img
                      src={Plus}
                      width="12"
                      height="12"
                      className='isi-mobile-header-img'
                      id='isi-mobile-header-img-1'
                    >
                    </img>
                  }
                </div>
              </Col>
              :
              <div>

              </div>
            }
            <Col
              lg={{span: 7, order: 1}}
              xs={{span: 12, order: 1}}
              // style={
              //   !safetyInfoOpen ? {height: 0, display: 'none', overflow: 'hidden', transition: '.4s height'} :
              //   safetyInfoOpen ? {height: '100%', display: 'inline', overflow: 'scroll', transition: '.4s height'} :
              //   {}
              // }
            >
              {width > 768 ?
                <h2 className='isi-header-desktop'>
                  Important Safety Information
                </h2>
                :
                <div>

                </div>
              }
              {/* <h4 className='font-weight-medium'>Important Safety Information</h4> */}
              <p className='teal font-weight-bold left-isi-header'>
                BOXED WARNING
              </p>
              <p>
                <strong>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's
                </strong>
              </p>
              <p className='teal font-weight-bold left-isi-header'>
                Loeum ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>
              <p className='teal font-weight-bold right-isi-header'>
                Lorum ipsum
              </p>
              <ul>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
              </ul>
            </Col>
            <Col
              lg={{span: 12, order: 3}}
              xs={{span: 12, order: 2}}
            >
              <ul>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
                <li>
                  <strong className='teal font-weight-medium'>Lorum ipsum</strong> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley ived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href={''}
                target='_blank'
                className='isi-info-lower'
              >
                <p className='font-weight-bold teal'>
                  Please see full Prescribing Information, including BOXED WARNING
                </p>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default IsiContent
