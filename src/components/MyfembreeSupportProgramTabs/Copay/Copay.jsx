import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import SupportContentBlock from '../../SupportContentBlock/SupportContentBlock'
import SupportContentBlockData from '../../SupportContentBlock/SupportContentBlockData.js'
import SupportContentBlockLarge from '../../SupportContentBlockLarge/SupportContentBlockLarge'

const Copay = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([]);
      mounted.current = true;
    } else {
      setReferences([]);
    }
  }, []);

  const {
    SupportContentBlockData1,
    SupportContentBlockData2,
    SupportContentBlockData3,
  } = SupportContentBlockData;

  return (
    <div className='copay-container'>
      <SupportContentBlockLarge />
      <SupportContentBlock
        data={SupportContentBlockData1}
      />
      <SupportContentBlock
        data={SupportContentBlockData2}
      />
      <SupportContentBlock
        data={SupportContentBlockData3}
      />
    </div>
  )
}

export default Copay