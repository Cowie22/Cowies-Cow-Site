import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {
      currentData,
      activeDropdownLink,
      handleActiveDropdownLink,
      handleActiveHeaderDropdown,
      currentPage,
      handleCurrentPage,
    } = this.props;
    return (
      <Row>
        <Col lg={12}>
          <div className='header-dropdown-container' id='header-dropdown-container'>
            <ul className='header-dropdown-ul'>
              {
                currentData.list.map((listData, i) => {
                  const { listName, listLink, innerPageNav, externalLink } = listData;
                  return (
                    <li
                      key={i}
                      className={
                        (activeDropdownLink === i + 1 && currentData.name === currentPage) ?
                        'header-dropdown-active' : ''
                      }
                      onClick={() => {
                        handleActiveDropdownLink(i + 1);
                        handleActiveHeaderDropdown('');
                      }}
                    >
                      {
                        !externalLink ?
                        <Link to={`/${listLink}`} className={innerPageNav ? 'inner-page' : ''}>
                          {listName}
                        </Link>
                        :
                        <a
                          href={listLink}
                          className={innerPageNav ? 'inner-page' : ''}
                          target='_blank'
                        >
                          {listName}
                        </a>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Col>
      </Row>
    )
  }
}

export default HeaderDropdown