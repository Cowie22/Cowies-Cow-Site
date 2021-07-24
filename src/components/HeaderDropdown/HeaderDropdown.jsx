import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'



const HeaderDropdown = (props) => {

  const {
    currentData,
    activeDropdownLink,
    handleActiveDropdownLink,
    handleActiveHeaderDropdown,
    currentPage,
    handleCurrentPage,
  } = props;

  return (
    <Row>
      <Col lg={12}>
        <div className='header-dropdown-container' id='header-dropdown-container'>
          <ul className='header-dropdown-ul'>
            {
              currentData.list.map((listData, i) => {
                const { listName, listLink, innerPageNav, externalLink, pageName, activeDropdownVal } = listData;
                console.log('second', activeDropdownLink, activeDropdownVal)
                return (
                  <li
                    key={i}
                    className={
                      (activeDropdownLink === activeDropdownVal && pageName === currentPage) ?
                      'header-dropdown-active' : ''
                    }
                    onClick={() => {
                      handleActiveDropdownLink(activeDropdownVal);
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


export default HeaderDropdown