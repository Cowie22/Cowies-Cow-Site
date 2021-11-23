import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../../../components/CircleAnimation/CircleAnimation'

const LeftContent = props => {
  const circleRefLeftContent = useRef()
  const [circleViewLeftContent, circleInViewLeftContent] = useInView({
    triggerOnce: true,
  })
  const setRefs = useCallback(
    node => {
      circleRefLeftContent.current = node
      circleViewLeftContent(node)
    },
    [circleViewLeftContent]
  )

  const circleRefLeftContent2 = useRef()
  const [circleViewLeftContent2, circleInViewLeftContent2] = useInView({
    triggerOnce: true,
  })
  const setRefs2 = useCallback(
    node => {
      circleRefLeftContent2.current = node
      circleViewLeftContent2(node)
    },
    [circleViewLeftContent2]
  )

  const circleRefLeftContent3 = useRef()
  const [circleViewLeftContent3, circleInViewLeftContent3] = useInView({
    triggerOnce: true,
  })
  const setRefs3 = useCallback(
    node => {
      circleRefLeftContent3.current = node
      circleViewLeftContent3(node)
    },
    [circleViewLeftContent3]
  )

  const circleRefLeftContent4 = useRef()
  const [circleViewLeftContent4, circleInViewLeftContent4] = useInView({
    triggerOnce: true,
  })
  const setRefs4 = useCallback(
    node => {
      circleRefLeftContent4.current = node
      circleViewLeftContent4(node)
    },
    [circleViewLeftContent4]
  )

  const cardRef = useRef()
  const [cardView, cardInView] = useInView({ triggerOnce: true })
  const setCardRef = useCallback(
    node => {
      cardRef.current = node
      cardView(node)
    },
    [cardView]
  )

  return (
    <Col lg={{ span: 12, offset: 0 }}>
      <div
        ref={setCardRef}
        className={
          cardInView
            ? 'home-slider-left-content-container active-card'
            : 'home-slider-left-content-container'
        }
      >
        <Row>
          <Col lg={{ span: 9, offset: 0 }}>
            <div className='home-slider-inner-container left'>
              <p className='white text-center bolder'>NON-HISPANIC WHITE</p>
              <h4 className='white text-center bolder'>
                5-YEAR OS: ALL STAGES Of NPC BY HISTOLOGIC SUBTYPE
              </h4>
              <Row>
                <Col lg={{ span: 4, offset: 0 }}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Keratinizing Squamous Cell Carcinoma
                    </p>
                    <CircleAnimation
                      circleDelayClass='less-animation-delay'
                      image={
                        <svg
                          width='188'
                          height='188'
                          viewBox='0 0 188 188'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          ref={setRefs}
                        >
                          <circle
                            cx='94'
                            cy='94'
                            r='90'
                            stroke='#997F8A'
                            strokeWidth='2'
                          />
                          <path
                            d='M94 4C143.706 4 184 44.2944 184 94C184 122.537 170.719 147.972 150 164.46'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewLeftContent ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M54.1415 94.392C54.7282 95.8293 55.0215 97.4867 55.0215 99.364C55.0215 100.919 54.7868 102.356 54.3175 103.676C53.6722 105.495 52.6015 106.903 51.1055 107.9C49.6095 108.868 47.8055 109.352 45.6935 109.352C43.5815 109.352 41.7482 108.809 40.1935 107.724C38.6682 106.639 37.5975 105.172 36.9815 103.324C36.6588 102.503 36.4682 101.329 36.4095 99.804C36.4095 99.5107 36.5562 99.364 36.8495 99.364H40.2375C40.5308 99.364 40.6775 99.5107 40.6775 99.804C40.7362 100.86 40.8535 101.637 41.0295 102.136C41.3228 103.221 41.8655 104.087 42.6575 104.732C43.4788 105.377 44.4908 105.7 45.6935 105.7C47.9228 105.7 49.4188 104.688 50.1815 102.664C50.5628 101.784 50.7535 100.64 50.7535 99.232C50.7535 97.736 50.5188 96.4013 50.0495 95.228C49.2282 93.4093 47.7615 92.5 45.6495 92.5C45.1508 92.5 44.5202 92.72 43.7575 93.16C43.6402 93.2187 43.5522 93.248 43.4935 93.248C43.3468 93.248 43.2295 93.1747 43.1415 93.028L41.4695 90.74C41.4108 90.6227 41.3815 90.52 41.3815 90.432C41.3815 90.344 41.4255 90.2413 41.5135 90.124L49.0375 82.072C49.1255 81.9253 49.0962 81.852 48.9495 81.852H37.2455C36.9522 81.852 36.8055 81.7053 36.8055 81.412V78.64C36.8055 78.3467 36.9522 78.2 37.2455 78.2H54.3175C54.6108 78.2 54.7575 78.3467 54.7575 78.64V81.808C54.7575 81.9547 54.6842 82.1307 54.5375 82.336L47.8495 89.64C47.7908 89.6987 47.7762 89.7573 47.8055 89.816C47.8348 89.8453 47.8935 89.8747 47.9815 89.904C49.4775 90.0507 50.7388 90.52 51.7655 91.312C52.7922 92.0747 53.5842 93.1013 54.1415 94.392ZM77.9197 83.612C78.3597 84.844 78.5797 86.2667 78.5797 87.88V101.432C78.5797 103.837 77.7437 105.759 76.0717 107.196C74.3997 108.633 72.2144 109.352 69.5157 109.352C67.7851 109.352 66.2451 109.029 64.8957 108.384C63.5757 107.739 62.5491 106.844 61.8157 105.7C61.0824 104.527 60.7157 103.192 60.7157 101.696V100.816C60.7157 100.523 60.8624 100.376 61.1557 100.376H64.4997C64.7931 100.376 64.9397 100.523 64.9397 100.816V101.212C64.9397 102.532 65.3651 103.603 66.2157 104.424C67.0664 105.245 68.1664 105.656 69.5157 105.656C70.9237 105.656 72.0824 105.231 72.9917 104.38C73.9011 103.529 74.3557 102.4 74.3557 100.992V95.448C74.3557 95.3893 74.3264 95.3453 74.2677 95.316C74.2384 95.2867 74.1944 95.3013 74.1357 95.36C72.8744 96.7973 71.0411 97.516 68.6357 97.516C66.9051 97.516 65.4091 97.164 64.1477 96.46C62.9157 95.756 61.9477 94.7293 61.2437 93.38C60.4224 91.8253 60.0117 89.9627 60.0117 87.792C60.0117 86.032 60.2904 84.4627 60.8477 83.084C61.5224 81.412 62.5784 80.136 64.0157 79.256C65.4531 78.3467 67.1837 77.892 69.2077 77.892C71.3784 77.892 73.2117 78.3907 74.7077 79.388C76.2037 80.3853 77.2744 81.7933 77.9197 83.612ZM73.6517 91.312C74.1211 90.344 74.3557 89.0973 74.3557 87.572C74.3557 86.34 74.1651 85.2987 73.7837 84.448C73.4024 83.5093 72.8304 82.8053 72.0677 82.336C71.3051 81.8373 70.3811 81.588 69.2957 81.588C68.2104 81.588 67.2864 81.8373 66.5237 82.336C65.7904 82.8053 65.2477 83.4947 64.8957 84.404C64.4557 85.3133 64.2357 86.4427 64.2357 87.792C64.2357 89.2587 64.4851 90.4613 64.9837 91.4C65.8931 93.1013 67.3304 93.952 69.2957 93.952C71.3784 93.952 72.8304 93.072 73.6517 91.312ZM87.4849 109C86.6636 109 85.9889 108.736 85.4609 108.208C84.9329 107.68 84.6689 107.005 84.6689 106.184C84.6689 105.363 84.9329 104.688 85.4609 104.16C85.9889 103.632 86.6636 103.368 87.4849 103.368C88.3063 103.368 88.9809 103.632 89.5089 104.16C90.0369 104.688 90.3009 105.363 90.3009 106.184C90.3009 107.005 90.0369 107.68 89.5089 108.208C88.9809 108.736 88.3063 109 87.4849 109ZM113.77 94.392C114.357 95.8293 114.65 97.4867 114.65 99.364C114.65 100.919 114.415 102.356 113.946 103.676C113.301 105.495 112.23 106.903 110.734 107.9C109.238 108.868 107.434 109.352 105.322 109.352C103.21 109.352 101.377 108.809 99.8221 107.724C98.2968 106.639 97.2261 105.172 96.6101 103.324C96.2874 102.503 96.0968 101.329 96.0381 99.804C96.0381 99.5107 96.1848 99.364 96.4781 99.364H99.8661C100.159 99.364 100.306 99.5107 100.306 99.804C100.365 100.86 100.482 101.637 100.658 102.136C100.951 103.221 101.494 104.087 102.286 104.732C103.107 105.377 104.119 105.7 105.322 105.7C107.551 105.7 109.047 104.688 109.81 102.664C110.191 101.784 110.382 100.64 110.382 99.232C110.382 97.736 110.147 96.4013 109.678 95.228C108.857 93.4093 107.39 92.5 105.278 92.5C104.779 92.5 104.149 92.72 103.386 93.16C103.269 93.2187 103.181 93.248 103.122 93.248C102.975 93.248 102.858 93.1747 102.77 93.028L101.098 90.74C101.039 90.6227 101.01 90.52 101.01 90.432C101.01 90.344 101.054 90.2413 101.142 90.124L108.666 82.072C108.754 81.9253 108.725 81.852 108.578 81.852H96.8741C96.5808 81.852 96.4341 81.7053 96.4341 81.412V78.64C96.4341 78.3467 96.5808 78.2 96.8741 78.2H113.946C114.239 78.2 114.386 78.3467 114.386 78.64V81.808C114.386 81.9547 114.313 82.1307 114.166 82.336L107.478 89.64C107.419 89.6987 107.405 89.7573 107.434 89.816C107.463 89.8453 107.522 89.8747 107.61 89.904C109.106 90.0507 110.367 90.52 111.394 91.312C112.421 92.0747 113.213 93.1013 113.77 94.392ZM127.824 90.828C126.622 90.828 125.507 90.5347 124.48 89.948C123.483 89.3613 122.691 88.5693 122.104 87.572C121.518 86.5747 121.224 85.4747 121.224 84.272C121.224 83.0987 121.518 82.0133 122.104 81.016C122.691 80.0187 123.483 79.2413 124.48 78.684C125.507 78.0973 126.622 77.804 127.824 77.804C128.998 77.804 130.083 78.0973 131.08 78.684C132.078 79.2707 132.87 80.0627 133.456 81.06C134.043 82.028 134.336 83.0987 134.336 84.272C134.336 85.4747 134.043 86.5747 133.456 87.572C132.87 88.5693 132.078 89.3613 131.08 89.948C130.083 90.5347 128.998 90.828 127.824 90.828ZM126.548 109C126.372 109 126.255 108.956 126.196 108.868C126.138 108.751 126.152 108.619 126.24 108.472L142.872 78.508C142.99 78.3027 143.166 78.2 143.4 78.2H145.556C145.732 78.2 145.85 78.2587 145.908 78.376C145.967 78.464 145.952 78.5813 145.864 78.728L129.232 108.692C129.144 108.897 128.968 109 128.704 109H126.548ZM127.824 88.232C128.91 88.232 129.819 87.8507 130.552 87.088C131.286 86.3253 131.652 85.3867 131.652 84.272C131.652 83.1867 131.271 82.2773 130.508 81.544C129.775 80.7813 128.88 80.4 127.824 80.4C126.739 80.4 125.815 80.7813 125.052 81.544C124.29 82.2773 123.908 83.1867 123.908 84.272C123.908 85.3867 124.29 86.3253 125.052 87.088C125.815 87.8507 126.739 88.232 127.824 88.232ZM144.588 109.396C143.386 109.396 142.271 109.103 141.244 108.516C140.247 107.929 139.455 107.137 138.868 106.14C138.282 105.143 137.988 104.057 137.988 102.884C137.988 101.711 138.282 100.625 138.868 99.628C139.455 98.6307 140.247 97.8387 141.244 97.252C142.271 96.6653 143.386 96.372 144.588 96.372C145.762 96.372 146.847 96.6653 147.844 97.252C148.842 97.8387 149.634 98.6307 150.22 99.628C150.807 100.625 151.1 101.711 151.1 102.884C151.1 104.057 150.807 105.143 150.22 106.14C149.634 107.137 148.842 107.929 147.844 108.516C146.847 109.103 145.762 109.396 144.588 109.396ZM144.588 106.8C145.674 106.8 146.583 106.419 147.316 105.656C148.05 104.893 148.416 103.969 148.416 102.884C148.416 101.799 148.035 100.875 147.272 100.112C146.539 99.3493 145.644 98.968 144.588 98.968C143.503 98.968 142.579 99.3493 141.816 100.112C141.054 100.875 140.672 101.799 140.672 102.884C140.672 103.969 141.054 104.893 141.816 105.656C142.579 106.419 143.503 106.8 144.588 106.8Z'
                            fill='white'
                          />
                        </svg>
                      }
                    />
                  </div>
                </Col>
                <Col lg={{ span: 4, offset: 0 }}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Non-Keratinzizing Differentiated Carcinoma
                    </p>
                    <CircleAnimation
                      circleDelayClass='less-animation-delay'
                      image={
                        <svg
                          width='189'
                          height='188'
                          viewBox='0 0 189 188'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          ref={setRefs2}
                        >
                          <circle
                            cx='94.5'
                            cy='94'
                            r='90'
                            stroke='#997F8A'
                            strokeWidth='2'
                          />
                          <path
                            d='M94.5001 4C144.206 4 184.5 44.2944 184.5 94C184.5 143.706 144.206 184 94.5001 184C79.2401 184 64.8672 180.202 52.2749 173.5'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewLeftContent2 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M57.128 95.36C57.4507 96.6507 57.612 97.9853 57.612 99.364C57.612 100.743 57.436 102.019 57.084 103.192C56.5267 105.069 55.456 106.565 53.872 107.68C52.3173 108.765 50.4547 109.308 48.284 109.308C46.1427 109.308 44.3093 108.78 42.784 107.724C41.2587 106.668 40.188 105.231 39.572 103.412C39.2787 102.591 39.1173 101.872 39.088 101.256V101.168C39.088 100.933 39.22 100.816 39.484 100.816H42.96C43.224 100.816 43.3707 100.948 43.4 101.212C43.4293 101.417 43.5027 101.725 43.62 102.136C43.9427 103.221 44.5 104.087 45.292 104.732C46.1133 105.348 47.096 105.656 48.24 105.656C49.4427 105.656 50.4547 105.333 51.276 104.688C52.1267 104.013 52.6987 103.089 52.992 101.916C53.1973 101.3 53.3 100.449 53.3 99.364C53.3 98.396 53.212 97.5013 53.036 96.68C52.8307 95.5653 52.3027 94.7147 51.452 94.128C50.6307 93.512 49.604 93.204 48.372 93.204C47.228 93.204 46.2013 93.468 45.292 93.996C44.3827 94.4947 43.796 95.1693 43.532 96.02C43.444 96.284 43.2827 96.416 43.048 96.416H39.528C39.2347 96.416 39.088 96.2693 39.088 95.976V78.64C39.088 78.3467 39.2347 78.2 39.528 78.2H55.984C56.2773 78.2 56.424 78.3467 56.424 78.64V81.412C56.424 81.7053 56.2773 81.852 55.984 81.852H43.488C43.3707 81.852 43.312 81.9107 43.312 82.028L43.268 91.224C43.268 91.4 43.3413 91.444 43.488 91.356C44.192 90.74 44.9987 90.2853 45.908 89.992C46.8467 89.6693 47.8293 89.508 48.856 89.508C50.9093 89.508 52.6693 90.0213 54.136 91.048C55.632 92.0747 56.6293 93.512 57.128 95.36ZM66.1673 109C66.0206 109 65.9033 108.956 65.8153 108.868C65.7566 108.751 65.7566 108.619 65.8153 108.472L75.8033 82.072C75.8326 82.0133 75.8326 81.9693 75.8033 81.94C75.7739 81.8813 75.7299 81.852 75.6713 81.852H65.0673C64.9499 81.852 64.8913 81.9107 64.8913 82.028V84.096C64.8913 84.3893 64.7446 84.536 64.4513 84.536H61.8113C61.5179 84.536 61.3713 84.3893 61.3713 84.096V78.64C61.3713 78.3467 61.5179 78.2 61.8113 78.2H79.8953C80.1886 78.2 80.3353 78.3467 80.3353 78.64V81.588C80.3353 81.7053 80.3059 81.8813 80.2473 82.116L70.3033 108.648C70.2153 108.883 70.0539 109 69.8193 109H66.1673ZM85.2935 109C84.4722 109 83.7975 108.736 83.2695 108.208C82.7415 107.68 82.4775 107.005 82.4775 106.184C82.4775 105.363 82.7415 104.688 83.2695 104.16C83.7975 103.632 84.4722 103.368 85.2935 103.368C86.1148 103.368 86.7895 103.632 87.3175 104.16C87.8455 104.688 88.1095 105.363 88.1095 106.184C88.1095 107.005 87.8455 107.68 87.3175 108.208C86.7895 108.736 86.1148 109 85.2935 109ZM111.887 95.844C112.503 97.076 112.811 98.5427 112.811 100.244C112.811 102.121 112.4 103.764 111.579 105.172C110.875 106.492 109.819 107.519 108.411 108.252C107.032 108.985 105.404 109.352 103.527 109.352C101.649 109.352 99.992 108.985 98.5547 108.252C97.1174 107.489 96.032 106.404 95.2987 104.996C94.5067 103.617 94.1107 102.019 94.1107 100.2C94.1107 98.5867 94.4334 97.1053 95.0787 95.756C95.724 94.4067 96.6774 93.3947 97.9387 92.72C98.0854 92.6613 98.0854 92.588 97.9387 92.5C97 91.796 96.296 91.0627 95.8267 90.3C95.0054 89.068 94.5947 87.66 94.5947 86.076C94.5947 84.3453 95.0934 82.7613 96.0907 81.324C96.824 80.2093 97.836 79.3293 99.1267 78.684C100.447 78.0387 101.913 77.716 103.527 77.716C105.169 77.716 106.621 78.0387 107.883 78.684C109.144 79.3293 110.141 80.2093 110.875 81.324C111.843 82.7613 112.327 84.3453 112.327 86.076C112.327 87.66 111.916 89.0973 111.095 90.388C110.567 91.2093 109.877 91.9133 109.027 92.5C108.88 92.588 108.88 92.6613 109.027 92.72C110.259 93.3947 111.212 94.436 111.887 95.844ZM99.3907 83.832C98.98 84.5947 98.7747 85.3427 98.7747 86.076C98.7747 87.2493 99.0534 88.232 99.6107 89.024C100.403 90.344 101.693 91.004 103.483 91.004C105.243 91.004 106.548 90.3293 107.399 88.98C107.897 88.276 108.147 87.2933 108.147 86.032C108.147 85.2107 107.956 84.4627 107.575 83.788C107.193 83.0547 106.651 82.468 105.947 82.028C105.243 81.588 104.407 81.368 103.439 81.368C102.529 81.368 101.723 81.588 101.019 82.028C100.315 82.468 99.772 83.0693 99.3907 83.832ZM107.531 103.676C108.205 102.737 108.543 101.476 108.543 99.892C108.543 98.484 108.293 97.3253 107.795 96.416C106.973 94.8907 105.536 94.128 103.483 94.128C101.488 94.128 100.08 94.8467 99.2587 96.284C98.7014 97.2227 98.4227 98.44 98.4227 99.936C98.4227 101.403 98.7307 102.605 99.3467 103.544C100.197 104.952 101.591 105.656 103.527 105.656C105.345 105.656 106.68 104.996 107.531 103.676ZM125.762 90.828C124.559 90.828 123.445 90.5347 122.418 89.948C121.42 89.3613 120.629 88.5693 120.042 87.572C119.455 86.5747 119.162 85.4747 119.162 84.272C119.162 83.0987 119.455 82.0133 120.042 81.016C120.629 80.0187 121.42 79.2413 122.418 78.684C123.445 78.0973 124.559 77.804 125.762 77.804C126.935 77.804 128.021 78.0973 129.018 78.684C130.015 79.2707 130.807 80.0627 131.394 81.06C131.981 82.028 132.274 83.0987 132.274 84.272C132.274 85.4747 131.981 86.5747 131.394 87.572C130.807 88.5693 130.015 89.3613 129.018 89.948C128.021 90.5347 126.935 90.828 125.762 90.828ZM124.486 109C124.31 109 124.193 108.956 124.134 108.868C124.075 108.751 124.09 108.619 124.178 108.472L140.81 78.508C140.927 78.3027 141.103 78.2 141.338 78.2H143.494C143.67 78.2 143.787 78.2587 143.846 78.376C143.905 78.464 143.89 78.5813 143.802 78.728L127.17 108.692C127.082 108.897 126.906 109 126.642 109H124.486ZM125.762 88.232C126.847 88.232 127.757 87.8507 128.49 87.088C129.223 86.3253 129.59 85.3867 129.59 84.272C129.59 83.1867 129.209 82.2773 128.446 81.544C127.713 80.7813 126.818 80.4 125.762 80.4C124.677 80.4 123.753 80.7813 122.99 81.544C122.227 82.2773 121.846 83.1867 121.846 84.272C121.846 85.3867 122.227 86.3253 122.99 87.088C123.753 87.8507 124.677 88.232 125.762 88.232ZM142.526 109.396C141.323 109.396 140.209 109.103 139.182 108.516C138.185 107.929 137.393 107.137 136.806 106.14C136.219 105.143 135.926 104.057 135.926 102.884C135.926 101.711 136.219 100.625 136.806 99.628C137.393 98.6307 138.185 97.8387 139.182 97.252C140.209 96.6653 141.323 96.372 142.526 96.372C143.699 96.372 144.785 96.6653 145.782 97.252C146.779 97.8387 147.571 98.6307 148.158 99.628C148.745 100.625 149.038 101.711 149.038 102.884C149.038 104.057 148.745 105.143 148.158 106.14C147.571 107.137 146.779 107.929 145.782 108.516C144.785 109.103 143.699 109.396 142.526 109.396ZM142.526 106.8C143.611 106.8 144.521 106.419 145.254 105.656C145.987 104.893 146.354 103.969 146.354 102.884C146.354 101.799 145.973 100.875 145.21 100.112C144.477 99.3493 143.582 98.968 142.526 98.968C141.441 98.968 140.517 99.3493 139.754 100.112C138.991 100.875 138.61 101.799 138.61 102.884C138.61 103.969 138.991 104.893 139.754 105.656C140.517 106.419 141.441 106.8 142.526 106.8Z'
                            fill='white'
                          />
                        </svg>
                      }
                    />
                  </div>
                </Col>
                <Col lg={{ span: 4, offset: 0 }}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Non-Keratinizing Undifferentiated Carcinoma
                    </p>
                    <CircleAnimation
                      circleDelayClass='less-animation-delay'
                      image={
                        <svg
                          width='188'
                          height='188'
                          viewBox='0 0 188 188'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          ref={setRefs3}
                        >
                          <circle
                            cx='94'
                            cy='94'
                            r='90'
                            stroke='#997F8A'
                            strokeWidth='2'
                          />
                          <path
                            d='M93.9999 4C143.706 4 184 44.2944 184 94C184 143.706 143.706 184 93.9999 184C62.2565 184 34.3515 167.566 18.3286 142.742'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewLeftContent3 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M53.8605 93.82C54.6818 95.3747 55.0925 97.2373 55.0925 99.408C55.0925 101.197 54.7992 102.767 54.2125 104.116C53.5378 105.788 52.4818 107.079 51.0445 107.988C49.6365 108.868 47.9205 109.308 45.8965 109.308C43.7258 109.308 41.8778 108.809 40.3525 107.812C38.8565 106.815 37.8005 105.407 37.1845 103.588C36.7445 102.356 36.5245 100.933 36.5245 99.32V85.768C36.5245 83.3627 37.3605 81.4413 39.0325 80.004C40.7045 78.5667 42.8898 77.848 45.5885 77.848C47.3192 77.848 48.8445 78.1707 50.1645 78.816C51.5138 79.4613 52.5552 80.3707 53.2885 81.544C54.0218 82.688 54.3885 84.008 54.3885 85.504V86.384C54.3885 86.6773 54.2418 86.824 53.9485 86.824H50.6045C50.3112 86.824 50.1645 86.6773 50.1645 86.384V85.988C50.1645 84.668 49.7392 83.5973 48.8885 82.776C48.0378 81.9547 46.9378 81.544 45.5885 81.544C44.1512 81.544 42.9778 81.9693 42.0685 82.82C41.1885 83.6707 40.7485 84.8 40.7485 86.208V91.752C40.7485 91.8107 40.7632 91.8547 40.7925 91.884C40.8512 91.884 40.9098 91.8547 40.9685 91.796C42.2298 90.388 44.0632 89.684 46.4685 89.684C49.9298 89.684 52.3938 91.0627 53.8605 93.82ZM50.2085 102.796C50.6485 101.857 50.8685 100.728 50.8685 99.408C50.8685 97.912 50.6045 96.7093 50.0765 95.8C49.2258 94.0987 47.7885 93.248 45.7645 93.248C44.7378 93.248 43.8578 93.4827 43.1245 93.952C42.3912 94.392 41.8338 95.0373 41.4525 95.888C40.9832 96.856 40.7485 98.1027 40.7485 99.628C40.7485 100.86 40.9392 101.901 41.3205 102.752C41.7018 103.691 42.2738 104.409 43.0365 104.908C43.7992 105.377 44.7232 105.612 45.8085 105.612C47.9498 105.612 49.4165 104.673 50.2085 102.796ZM78.0797 95.36C78.4024 96.6507 78.5637 97.9853 78.5637 99.364C78.5637 100.743 78.3877 102.019 78.0357 103.192C77.4784 105.069 76.4077 106.565 74.8237 107.68C73.2691 108.765 71.4064 109.308 69.2357 109.308C67.0944 109.308 65.2611 108.78 63.7357 107.724C62.2104 106.668 61.1397 105.231 60.5237 103.412C60.2304 102.591 60.0691 101.872 60.0397 101.256V101.168C60.0397 100.933 60.1717 100.816 60.4357 100.816H63.9117C64.1757 100.816 64.3224 100.948 64.3517 101.212C64.3811 101.417 64.4544 101.725 64.5717 102.136C64.8944 103.221 65.4517 104.087 66.2437 104.732C67.0651 105.348 68.0477 105.656 69.1917 105.656C70.3944 105.656 71.4064 105.333 72.2277 104.688C73.0784 104.013 73.6504 103.089 73.9437 101.916C74.1491 101.3 74.2517 100.449 74.2517 99.364C74.2517 98.396 74.1637 97.5013 73.9877 96.68C73.7824 95.5653 73.2544 94.7147 72.4037 94.128C71.5824 93.512 70.5557 93.204 69.3237 93.204C68.1797 93.204 67.1531 93.468 66.2437 93.996C65.3344 94.4947 64.7477 95.1693 64.4837 96.02C64.3957 96.284 64.2344 96.416 63.9997 96.416H60.4797C60.1864 96.416 60.0397 96.2693 60.0397 95.976V78.64C60.0397 78.3467 60.1864 78.2 60.4797 78.2H76.9357C77.2291 78.2 77.3757 78.3467 77.3757 78.64V81.412C77.3757 81.7053 77.2291 81.852 76.9357 81.852H64.4397C64.3224 81.852 64.2637 81.9107 64.2637 82.028L64.2197 91.224C64.2197 91.4 64.2931 91.444 64.4397 91.356C65.1437 90.74 65.9504 90.2853 66.8597 89.992C67.7984 89.6693 68.7811 89.508 69.8077 89.508C71.8611 89.508 73.6211 90.0213 75.0877 91.048C76.5837 92.0747 77.5811 93.512 78.0797 95.36ZM86.899 109C86.0777 109 85.403 108.736 84.875 108.208C84.347 107.68 84.083 107.005 84.083 106.184C84.083 105.363 84.347 104.688 84.875 104.16C85.403 103.632 86.0777 103.368 86.899 103.368C87.7203 103.368 88.395 103.632 88.923 104.16C89.451 104.688 89.715 105.363 89.715 106.184C89.715 107.005 89.451 107.68 88.923 108.208C88.395 108.736 87.7203 109 86.899 109ZM113.448 83.612C113.888 84.844 114.108 86.2667 114.108 87.88V101.432C114.108 103.837 113.272 105.759 111.6 107.196C109.928 108.633 107.743 109.352 105.044 109.352C103.314 109.352 101.774 109.029 100.424 108.384C99.1042 107.739 98.0775 106.844 97.3442 105.7C96.6108 104.527 96.2442 103.192 96.2442 101.696V100.816C96.2442 100.523 96.3908 100.376 96.6842 100.376H100.028C100.322 100.376 100.468 100.523 100.468 100.816V101.212C100.468 102.532 100.894 103.603 101.744 104.424C102.595 105.245 103.695 105.656 105.044 105.656C106.452 105.656 107.611 105.231 108.52 104.38C109.43 103.529 109.884 102.4 109.884 100.992V95.448C109.884 95.3893 109.855 95.3453 109.796 95.316C109.767 95.2867 109.723 95.3013 109.664 95.36C108.403 96.7973 106.57 97.516 104.164 97.516C102.434 97.516 100.938 97.164 99.6762 96.46C98.4442 95.756 97.4762 94.7293 96.7722 93.38C95.9508 91.8253 95.5402 89.9627 95.5402 87.792C95.5402 86.032 95.8188 84.4627 96.3762 83.084C97.0508 81.412 98.1068 80.136 99.5442 79.256C100.982 78.3467 102.712 77.892 104.736 77.892C106.907 77.892 108.74 78.3907 110.236 79.388C111.732 80.3853 112.803 81.7933 113.448 83.612ZM109.18 91.312C109.65 90.344 109.884 89.0973 109.884 87.572C109.884 86.34 109.694 85.2987 109.312 84.448C108.931 83.5093 108.359 82.8053 107.596 82.336C106.834 81.8373 105.91 81.588 104.824 81.588C103.739 81.588 102.815 81.8373 102.052 82.336C101.319 82.8053 100.776 83.4947 100.424 84.404C99.9842 85.3133 99.7642 86.4427 99.7642 87.792C99.7642 89.2587 100.014 90.4613 100.512 91.4C101.422 93.1013 102.859 93.952 104.824 93.952C106.907 93.952 108.359 93.072 109.18 91.312ZM127.281 90.828C126.079 90.828 124.964 90.5347 123.937 89.948C122.94 89.3613 122.148 88.5693 121.561 87.572C120.975 86.5747 120.681 85.4747 120.681 84.272C120.681 83.0987 120.975 82.0133 121.561 81.016C122.148 80.0187 122.94 79.2413 123.937 78.684C124.964 78.0973 126.079 77.804 127.281 77.804C128.455 77.804 129.54 78.0973 130.537 78.684C131.535 79.2707 132.327 80.0627 132.913 81.06C133.5 82.028 133.793 83.0987 133.793 84.272C133.793 85.4747 133.5 86.5747 132.913 87.572C132.327 88.5693 131.535 89.3613 130.537 89.948C129.54 90.5347 128.455 90.828 127.281 90.828ZM126.005 109C125.829 109 125.712 108.956 125.653 108.868C125.595 108.751 125.609 108.619 125.697 108.472L142.329 78.508C142.447 78.3027 142.623 78.2 142.857 78.2H145.013C145.189 78.2 145.307 78.2587 145.365 78.376C145.424 78.464 145.409 78.5813 145.321 78.728L128.689 108.692C128.601 108.897 128.425 109 128.161 109H126.005ZM127.281 88.232C128.367 88.232 129.276 87.8507 130.009 87.088C130.743 86.3253 131.109 85.3867 131.109 84.272C131.109 83.1867 130.728 82.2773 129.965 81.544C129.232 80.7813 128.337 80.4 127.281 80.4C126.196 80.4 125.272 80.7813 124.509 81.544C123.747 82.2773 123.365 83.1867 123.365 84.272C123.365 85.3867 123.747 86.3253 124.509 87.088C125.272 87.8507 126.196 88.232 127.281 88.232ZM144.045 109.396C142.843 109.396 141.728 109.103 140.701 108.516C139.704 107.929 138.912 107.137 138.325 106.14C137.739 105.143 137.445 104.057 137.445 102.884C137.445 101.711 137.739 100.625 138.325 99.628C138.912 98.6307 139.704 97.8387 140.701 97.252C141.728 96.6653 142.843 96.372 144.045 96.372C145.219 96.372 146.304 96.6653 147.301 97.252C148.299 97.8387 149.091 98.6307 149.677 99.628C150.264 100.625 150.557 101.711 150.557 102.884C150.557 104.057 150.264 105.143 149.677 106.14C149.091 107.137 148.299 107.929 147.301 108.516C146.304 109.103 145.219 109.396 144.045 109.396ZM144.045 106.8C145.131 106.8 146.04 106.419 146.773 105.656C147.507 104.893 147.873 103.969 147.873 102.884C147.873 101.799 147.492 100.875 146.729 100.112C145.996 99.3493 145.101 98.968 144.045 98.968C142.96 98.968 142.036 99.3493 141.273 100.112C140.511 100.875 140.129 101.799 140.129 102.884C140.129 103.969 140.511 104.893 141.273 105.656C142.036 106.419 142.96 106.8 144.045 106.8Z'
                            fill='white'
                          />
                        </svg>
                      }
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={{ span: 3, offset: 0 }}>
            <div className='home-slider-inner-container right'>
              <p className='white text-center bolder'>NON-HISPANIC WHITE</p>
              <h4 className='white text-center bolder'>
                5-YEAR OS: METASTATIC AT DIAGNOSIS
              </h4>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <div className='home-slider-circle-container'>
                    <CircleAnimation
                      circleDelayClass='less-animation-delay'
                      image={
                        <svg
                          width='189'
                          height='188'
                          viewBox='0 0 189 188'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          ref={setRefs4}
                        >
                          <circle
                            cx='94.5'
                            cy='94'
                            r='90'
                            stroke='#997F8A'
                            strokeWidth='2'
                          />
                          <path
                            d='M94.5 4C139.269 4 176.404 36.6886 183.338 79.5'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewLeftContent4 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M40.5019 105.128C40.4725 105.187 40.4725 105.245 40.5019 105.304C40.5312 105.333 40.5752 105.348 40.6339 105.348H53.8779C54.1712 105.348 54.3179 105.495 54.3179 105.788V108.56C54.3179 108.853 54.1712 109 53.8779 109H35.4419C35.1485 109 35.0019 108.853 35.0019 108.56V105.876C35.0019 105.671 35.0752 105.495 35.2219 105.348C36.2192 104.204 38.5072 101.52 42.0859 97.296L45.1219 93.644C47.8499 90.388 49.2139 87.8653 49.2139 86.076C49.2139 84.6973 48.7445 83.5973 47.8059 82.776C46.8965 81.9253 45.6792 81.5 44.1539 81.5C42.6285 81.5 41.4112 81.9253 40.5019 82.776C39.5925 83.6267 39.1525 84.7413 39.1819 86.12V87.44C39.1819 87.7333 39.0352 87.88 38.7419 87.88H35.3539C35.0605 87.88 34.9139 87.7333 34.9139 87.44V85.548C34.9725 84.0227 35.3979 82.6733 36.1899 81.5C37.0112 80.3267 38.1112 79.432 39.4899 78.816C40.8685 78.1707 42.4232 77.848 44.1539 77.848C46.0312 77.848 47.6739 78.2 49.0819 78.904C50.4899 79.608 51.5752 80.576 52.3379 81.808C53.1005 83.04 53.4819 84.4333 53.4819 85.988C53.4819 88.4227 52.1619 91.2973 49.5219 94.612C48.3485 96.108 46.9552 97.7947 45.3419 99.672C43.7285 101.52 42.1152 103.339 40.5019 105.128ZM64.8755 105.128C64.8461 105.187 64.8461 105.245 64.8755 105.304C64.9048 105.333 64.9488 105.348 65.0075 105.348H78.2515C78.5448 105.348 78.6915 105.495 78.6915 105.788V108.56C78.6915 108.853 78.5448 109 78.2515 109H59.8155C59.5221 109 59.3755 108.853 59.3755 108.56V105.876C59.3755 105.671 59.4488 105.495 59.5955 105.348C60.5928 104.204 62.8808 101.52 66.4595 97.296L69.4955 93.644C72.2235 90.388 73.5875 87.8653 73.5875 86.076C73.5875 84.6973 73.1181 83.5973 72.1795 82.776C71.2701 81.9253 70.0528 81.5 68.5275 81.5C67.0021 81.5 65.7848 81.9253 64.8755 82.776C63.9661 83.6267 63.5261 84.7413 63.5555 86.12V87.44C63.5555 87.7333 63.4088 87.88 63.1155 87.88H59.7275C59.4341 87.88 59.2875 87.7333 59.2875 87.44V85.548C59.3461 84.0227 59.7715 82.6733 60.5635 81.5C61.3848 80.3267 62.4848 79.432 63.8635 78.816C65.2421 78.1707 66.7968 77.848 68.5275 77.848C70.4048 77.848 72.0475 78.2 73.4555 78.904C74.8635 79.608 75.9488 80.576 76.7115 81.808C77.4741 83.04 77.8555 84.4333 77.8555 85.988C77.8555 88.4227 76.5355 91.2973 73.8955 94.612C72.7221 96.108 71.3288 97.7947 69.7155 99.672C68.1021 101.52 66.4888 103.339 64.8755 105.128ZM87.313 109C86.4917 109 85.817 108.736 85.289 108.208C84.761 107.68 84.497 107.005 84.497 106.184C84.497 105.363 84.761 104.688 85.289 104.16C85.817 103.632 86.4917 103.368 87.313 103.368C88.1344 103.368 88.809 103.632 89.337 104.16C89.865 104.688 90.129 105.363 90.129 106.184C90.129 107.005 89.865 107.68 89.337 108.208C88.809 108.736 88.1344 109 87.313 109ZM116.106 96.944C116.4 96.944 116.546 97.0907 116.546 97.384V100.288C116.546 100.581 116.4 100.728 116.106 100.728H114.214C114.097 100.728 114.038 100.787 114.038 100.904V108.56C114.038 108.853 113.892 109 113.598 109H110.254C109.961 109 109.814 108.853 109.814 108.56V100.904C109.814 100.787 109.756 100.728 109.638 100.728H96.2622C95.9689 100.728 95.8222 100.581 95.8222 100.288V97.912C95.8222 97.7653 95.8662 97.5893 95.9542 97.384L104.622 78.508C104.71 78.3027 104.872 78.2 105.106 78.2H108.626C108.773 78.2 108.876 78.2587 108.934 78.376C109.022 78.464 109.037 78.5813 108.978 78.728L100.706 96.724C100.677 96.7827 100.677 96.8413 100.706 96.9C100.736 96.9293 100.78 96.944 100.838 96.944H109.638C109.756 96.944 109.814 96.8853 109.814 96.768V90.212C109.814 89.9187 109.961 89.772 110.254 89.772H113.598C113.892 89.772 114.038 89.9187 114.038 90.212V96.768C114.038 96.8853 114.097 96.944 114.214 96.944H116.106ZM129.672 90.828C128.469 90.828 127.355 90.5347 126.328 89.948C125.331 89.3613 124.539 88.5693 123.952 87.572C123.365 86.5747 123.072 85.4747 123.072 84.272C123.072 83.0987 123.365 82.0133 123.952 81.016C124.539 80.0187 125.331 79.2413 126.328 78.684C127.355 78.0973 128.469 77.804 129.672 77.804C130.845 77.804 131.931 78.0973 132.928 78.684C133.925 79.2707 134.717 80.0627 135.304 81.06C135.891 82.028 136.184 83.0987 136.184 84.272C136.184 85.4747 135.891 86.5747 135.304 87.572C134.717 88.5693 133.925 89.3613 132.928 89.948C131.931 90.5347 130.845 90.828 129.672 90.828ZM128.396 109C128.22 109 128.103 108.956 128.044 108.868C127.985 108.751 128 108.619 128.088 108.472L144.72 78.508C144.837 78.3027 145.013 78.2 145.248 78.2H147.404C147.58 78.2 147.697 78.2587 147.756 78.376C147.815 78.464 147.8 78.5813 147.712 78.728L131.08 108.692C130.992 108.897 130.816 109 130.552 109H128.396ZM129.672 88.232C130.757 88.232 131.667 87.8507 132.4 87.088C133.133 86.3253 133.5 85.3867 133.5 84.272C133.5 83.1867 133.119 82.2773 132.356 81.544C131.623 80.7813 130.728 80.4 129.672 80.4C128.587 80.4 127.663 80.7813 126.9 81.544C126.137 82.2773 125.756 83.1867 125.756 84.272C125.756 85.3867 126.137 86.3253 126.9 87.088C127.663 87.8507 128.587 88.232 129.672 88.232ZM146.436 109.396C145.233 109.396 144.119 109.103 143.092 108.516C142.095 107.929 141.303 107.137 140.716 106.14C140.129 105.143 139.836 104.057 139.836 102.884C139.836 101.711 140.129 100.625 140.716 99.628C141.303 98.6307 142.095 97.8387 143.092 97.252C144.119 96.6653 145.233 96.372 146.436 96.372C147.609 96.372 148.695 96.6653 149.692 97.252C150.689 97.8387 151.481 98.6307 152.068 99.628C152.655 100.625 152.948 101.711 152.948 102.884C152.948 104.057 152.655 105.143 152.068 106.14C151.481 107.137 150.689 107.929 149.692 108.516C148.695 109.103 147.609 109.396 146.436 109.396ZM146.436 106.8C147.521 106.8 148.431 106.419 149.164 105.656C149.897 104.893 150.264 103.969 150.264 102.884C150.264 101.799 149.883 100.875 149.12 100.112C148.387 99.3493 147.492 98.968 146.436 98.968C145.351 98.968 144.427 99.3493 143.664 100.112C142.901 100.875 142.52 101.799 142.52 102.884C142.52 103.969 142.901 104.893 143.664 105.656C144.427 106.419 145.351 106.8 146.436 106.8Z'
                            fill='white'
                          />
                        </svg>
                      }
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default LeftContent
