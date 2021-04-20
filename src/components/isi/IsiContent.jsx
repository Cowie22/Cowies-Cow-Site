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
            <Col
              lg={{span: 11, order: 1}}
              xs={{span: 12, order: 3}}
              style={
                !AdcetrisOpen && width < 769 && yDirection < 1 ? {height: '100%', display: 'inline', overflow: 'hidden', transition: '.4s height'} :
                !AdcetrisOpen && width < 769 ? {height: '100%', display: 'inline', overflow: 'hidden', transition: '.4s height'} :
                AdcetrisOpen && width < 769 ? {height: '100%', display: 'inline', overflow: 'scroll', transition: '.4s height'} :
                {}
              }
            >
              <h4 className='purple'>
                Use
              </h4>
              <p>
                Myfembree is a prescription medicine that is used in the treatment of heavy menstrual bleeding
                associated with uterine fibroids.
              </p>
              <h4 className='purple'>
                Important Safety Information
              </h4>
              <p className='purple extra-bold'>
                What is the most important information I should know about Myfembree?
              </p>
              <p className='extra-bold'>
                Myfembree may cause serious side effects, including:
              </p>
              <ul className='purple-ul'>
                <li className='purple extra-bold'>
                  Cardiovascular Conditions
                </li>
                <ul>
                  <li>
                    Myfembree may increase your chances of heart attack, stroke, or blood clots, especially
                    if you are over 35 years of age and smoke, have uncontrolled high blood pressure, high
                    cholesterol, diabetes, or are obese. Stop taking Myfembree and call your healthcare
                    provider right away or go to the nearest hospital emergency room right away if you have:
                  </li>
                </ul>
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
          </Row>
        </Container>
      </section>
    )
  }
}

export default IsiContent
