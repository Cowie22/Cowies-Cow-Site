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
        <div
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
            <ul className='purple-ul-dashed'>
              <li>
                Myfembree may increase your chances of heart attack, stroke, or blood clots, especially
                if you are over 35 years of age and smoke, have uncontrolled high blood pressure, high
                cholesterol, diabetes, or are obese. <strong>Stop taking Myfembree and call your healthcare
                provider right away or go to the nearest hospital emergency room right away if you have:</strong>
              </li>
              <ul className='purple-ul'>
                <li>
                  Leg pain or swelling that will not go away
                </li>
                <li>
                  Sudden shortness of breath
                </li>
                <li>
                  Double vision, bulging of the eyes, or sudden blindness (partial or complete)
                </li>
                <li>
                  Pain or pressure in your chest, arm, or jaw
                </li>
                <li>
                  Sudden, severe headache unlike your usual headaches
                </li>
                <li>
                  Weakness or numbness in an arm or leg, or trouble speaking
                </li>
              </ul>
            </ul>
            <li className='purple extra-bold'>
              Bone Loss (Decreased Bone Mineral Density [BMD])
            </li>
            <ul className='purple-ul-dashed'>
              <li>
                While taking Myfembree, your estrogen levels may be low. Low estrogen levels can lead to BMD loss.
              </li>
              <li>
                If you have bone loss on Myfembree, your BMD may improve after you stop taking Myfembree,
                but complete recovery may not occur. It is unknown if these BMD changes could increase
                your risk for broken bones as you age. For this reason, you should not take Myfembree for
                more than 24 months.
              </li>
              <li>
                Your healthcare provider may order an X-ray test called a DXA scan to check your bone mineral
                density when you start taking Myfembree and periodically after you start.
              </li>
              <li>
                Your doctor may advise you to take vitamin D and calcium supplements as part of a healthy lifestyle.
              </li>
            </ul>
            <li className='purple extra-bold'>
              Effects on Pregnancy
            </li>
            <ul className='purple-ul-dashed'>
              <li>
                Do not take Myfembree if you are pregnant or trying to become pregnant, as it may increase the
                risk of early pregnancy loss.
              </li>
              <li>
                If you think you may be pregnant, stop taking Myfembree right away and call your HCP.
              </li>
              <li>
                Myfembree can decrease your menstrual bleeding or result in no menstrual bleeding at all,
                making it hard to know if you are pregnant. Watch for other pregnancy signs like breast
                tenderness, weight gain, and nausea.
              </li>
              <li>
                Myfembree does not prevent pregnancy. You will need to use effective methods of birth control
                while taking Myfembree and for 1 week after you stop taking Myfembree. Examples of effective
                methods can include condoms or spermicide, which do not contain hormones.
              </li>
              <li>
                Talk to your HCP about which birth control to use during treatment with Myfembree. Your
                HCP may change the birth control you are on before you start taking Myfembree.
              </li>
            </ul>
          </ul>
        </div>
      </section>
    )
  }
}

export default IsiContent
