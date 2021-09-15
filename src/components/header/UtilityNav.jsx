import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const UtilityNav = (props) => {
  return (
    <section className='utility-nav'>
      <Container>
        <Row>
          <Col xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
            <nav className='utility-nav-container'>
              <Row>
                <Col xl={{span: 9, offset: 3}} lg={{span: 10, offset: 2}}>
                  <ul className='utility-left-container'>
                    <li>
                      <a
                        className='utility-header-nav'
                        href='#isi'
                      >
                        Important Safety Information
                      </a>
                    </li>
                    <li className='center-nav'>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className='utility-header-nav'
                        href='https://www.myovant.com/myfembree-prescribing-information.pdf'
                        data-testid='Prescribing Information'
                      >
                        <span>Prescribing Information, including <b>BOXED WARNING</b></span>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className='utility-header-nav'
                        href='https://www.Myfembree.com/'
                      >
                        Visit Patient Site
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UtilityNav