import React, {
  useRef,
  useCallback,
  memo,
} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../../../components/CircleAnimation/CircleAnimation'

const RightContent = props => {
  const circleRefRightContent = useRef()
  const [circleViewRightContent, circleInViewRightContent] = useInView({
    triggerOnce: true,
  })
  const setRefs = useCallback(
    node => {
      circleRefRightContent.current = node
      circleViewRightContent(node)
    },
    [circleViewRightContent]
  )

  const circleRefRightContent2 = useRef()
  const [circleViewRightContent2, circleInViewRightContent2] = useInView({
    triggerOnce: true,
  })
  const setRefs2 = useCallback(
    node => {
      circleRefRightContent2.current = node
      circleViewRightContent2(node)
    },
    [circleViewRightContent2]
  )

  const circleRefRightContent3 = useRef()
  const [circleViewRightContent3, circleInViewRightContent3] = useInView({
    triggerOnce: true,
  })
  const setRefs3 = useCallback(
    node => {
      circleRefRightContent3.current = node
      circleViewRightContent3(node)
    },
    [circleViewRightContent3]
  )

  const circleRefRightContent4 = useRef()
  const [circleViewRightContent4, circleInViewRightContent4] = useInView({
    triggerOnce: true,
  })
  const setRefs4 = useCallback(
    node => {
      circleRefRightContent4.current = node
      circleViewRightContent4(node)
    },
    [circleViewRightContent4]
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
            ? 'home-slider-right-content-container active-card'
            : 'home-slider-right-content-container'
        }
      >
        <Row>
          <Col lg={{ span: 9, offset: 0 }}>
            <div className='home-slider-inner-container left'>
              <p className='white text-center bolder'>ASIAN</p>
              <h4 className='white text-center bolder'>
                5-YEAR OS: ALL STAGES OF NPC BY HISTOLOGIC SUBTYPE
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
                            d='M94 4C143.706 4 184 44.2944 184 94C184 143.706 143.706 184 94 184C80.0277 184 66.799 180.816 55 175.134'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewRightContent ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M60.9952 95.36C61.3179 96.6507 61.4792 97.9853 61.4792 99.364C61.4792 100.743 61.3032 102.019 60.9512 103.192C60.3939 105.069 59.3232 106.565 57.7392 107.68C56.1845 108.765 54.3219 109.308 52.1512 109.308C50.0099 109.308 48.1765 108.78 46.6512 107.724C45.1259 106.668 44.0552 105.231 43.4392 103.412C43.1459 102.591 42.9845 101.872 42.9552 101.256V101.168C42.9552 100.933 43.0872 100.816 43.3512 100.816H46.8272C47.0912 100.816 47.2379 100.948 47.2672 101.212C47.2965 101.417 47.3699 101.725 47.4872 102.136C47.8099 103.221 48.3672 104.087 49.1592 104.732C49.9805 105.348 50.9632 105.656 52.1072 105.656C53.3099 105.656 54.3219 105.333 55.1432 104.688C55.9939 104.013 56.5659 103.089 56.8592 101.916C57.0645 101.3 57.1672 100.449 57.1672 99.364C57.1672 98.396 57.0792 97.5013 56.9032 96.68C56.6979 95.5653 56.1699 94.7147 55.3192 94.128C54.4979 93.512 53.4712 93.204 52.2392 93.204C51.0952 93.204 50.0685 93.468 49.1592 93.996C48.2499 94.4947 47.6632 95.1693 47.3992 96.02C47.3112 96.284 47.1499 96.416 46.9152 96.416H43.3952C43.1019 96.416 42.9552 96.2693 42.9552 95.976V78.64C42.9552 78.3467 43.1019 78.2 43.3952 78.2H59.8512C60.1445 78.2 60.2912 78.3467 60.2912 78.64V81.412C60.2912 81.7053 60.1445 81.852 59.8512 81.852H47.3552C47.2379 81.852 47.1792 81.9107 47.1792 82.028L47.1352 91.224C47.1352 91.4 47.2085 91.444 47.3552 91.356C48.0592 90.74 48.8659 90.2853 49.7752 89.992C50.7139 89.6693 51.6965 89.508 52.7232 89.508C54.7765 89.508 56.5365 90.0213 58.0032 91.048C59.4992 92.0747 60.4965 93.512 60.9952 95.36ZM70.0345 109C69.8878 109 69.7705 108.956 69.6825 108.868C69.6238 108.751 69.6238 108.619 69.6825 108.472L79.6705 82.072C79.6998 82.0133 79.6998 81.9693 79.6705 81.94C79.6411 81.8813 79.5971 81.852 79.5385 81.852H68.9345C68.8171 81.852 68.7585 81.9107 68.7585 82.028V84.096C68.7585 84.3893 68.6118 84.536 68.3185 84.536H65.6785C65.3851 84.536 65.2385 84.3893 65.2385 84.096V78.64C65.2385 78.3467 65.3851 78.2 65.6785 78.2H83.7625C84.0558 78.2 84.2025 78.3467 84.2025 78.64V81.588C84.2025 81.7053 84.1731 81.8813 84.1145 82.116L74.1705 108.648C74.0825 108.883 73.9211 109 73.6865 109H70.0345ZM89.1607 109C88.3394 109 87.6647 108.736 87.1367 108.208C86.6087 107.68 86.3447 107.005 86.3447 106.184C86.3447 105.363 86.6087 104.688 87.1367 104.16C87.6647 103.632 88.3394 103.368 89.1607 103.368C89.982 103.368 90.6567 103.632 91.1847 104.16C91.7127 104.688 91.9767 105.363 91.9767 106.184C91.9767 107.005 91.7127 107.68 91.1847 108.208C90.6567 108.736 89.982 109 89.1607 109ZM103.258 78.332C103.434 78.244 103.625 78.2 103.83 78.2H107.306C107.599 78.2 107.746 78.3467 107.746 78.64V108.56C107.746 108.853 107.599 109 107.306 109H103.962C103.669 109 103.522 108.853 103.522 108.56V82.732C103.522 82.6733 103.493 82.6293 103.434 82.6C103.405 82.5707 103.361 82.5707 103.302 82.6L98.6819 84.184C98.6232 84.2133 98.5499 84.228 98.4619 84.228C98.2859 84.228 98.1832 84.1107 98.1539 83.876L97.9779 81.368C97.9779 81.0747 98.0659 80.8987 98.2419 80.84L103.258 78.332ZM121.895 90.828C120.692 90.828 119.577 90.5347 118.551 89.948C117.553 89.3613 116.761 88.5693 116.175 87.572C115.588 86.5747 115.295 85.4747 115.295 84.272C115.295 83.0987 115.588 82.0133 116.175 81.016C116.761 80.0187 117.553 79.2413 118.551 78.684C119.577 78.0973 120.692 77.804 121.895 77.804C123.068 77.804 124.153 78.0973 125.151 78.684C126.148 79.2707 126.94 80.0627 127.527 81.06C128.113 82.028 128.407 83.0987 128.407 84.272C128.407 85.4747 128.113 86.5747 127.527 87.572C126.94 88.5693 126.148 89.3613 125.151 89.948C124.153 90.5347 123.068 90.828 121.895 90.828ZM120.619 109C120.443 109 120.325 108.956 120.267 108.868C120.208 108.751 120.223 108.619 120.311 108.472L136.943 78.508C137.06 78.3027 137.236 78.2 137.471 78.2H139.627C139.803 78.2 139.92 78.2587 139.979 78.376C140.037 78.464 140.023 78.5813 139.935 78.728L123.303 108.692C123.215 108.897 123.039 109 122.775 109H120.619ZM121.895 88.232C122.98 88.232 123.889 87.8507 124.623 87.088C125.356 86.3253 125.723 85.3867 125.723 84.272C125.723 83.1867 125.341 82.2773 124.579 81.544C123.845 80.7813 122.951 80.4 121.895 80.4C120.809 80.4 119.885 80.7813 119.123 81.544C118.36 82.2773 117.979 83.1867 117.979 84.272C117.979 85.3867 118.36 86.3253 119.123 87.088C119.885 87.8507 120.809 88.232 121.895 88.232ZM138.659 109.396C137.456 109.396 136.341 109.103 135.315 108.516C134.317 107.929 133.525 107.137 132.939 106.14C132.352 105.143 132.059 104.057 132.059 102.884C132.059 101.711 132.352 100.625 132.939 99.628C133.525 98.6307 134.317 97.8387 135.315 97.252C136.341 96.6653 137.456 96.372 138.659 96.372C139.832 96.372 140.917 96.6653 141.915 97.252C142.912 97.8387 143.704 98.6307 144.291 99.628C144.877 100.625 145.171 101.711 145.171 102.884C145.171 104.057 144.877 105.143 144.291 106.14C143.704 107.137 142.912 107.929 141.915 108.516C140.917 109.103 139.832 109.396 138.659 109.396ZM138.659 106.8C139.744 106.8 140.653 106.419 141.387 105.656C142.12 104.893 142.487 103.969 142.487 102.884C142.487 101.799 142.105 100.875 141.343 100.112C140.609 99.3493 139.715 98.968 138.659 98.968C137.573 98.968 136.649 99.3493 135.887 100.112C135.124 100.875 134.743 101.799 134.743 102.884C134.743 103.969 135.124 104.893 135.887 105.656C136.649 106.419 137.573 106.8 138.659 106.8Z'
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
                      Nonkeratinzizing Differentiated Carcinoma
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
                            d='M94.5 4C144.206 4 184.5 44.2944 184.5 94C184.5 143.706 144.206 184 94.5 184C66.5941 184 41.6545 171.299 25.1464 151.363'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewRightContent2 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M53.6144 93.82C54.4357 95.3747 54.8464 97.2373 54.8464 99.408C54.8464 101.197 54.5531 102.767 53.9664 104.116C53.2917 105.788 52.2357 107.079 50.7984 107.988C49.3904 108.868 47.6744 109.308 45.6504 109.308C43.4797 109.308 41.6317 108.809 40.1064 107.812C38.6104 106.815 37.5544 105.407 36.9384 103.588C36.4984 102.356 36.2784 100.933 36.2784 99.32V85.768C36.2784 83.3627 37.1144 81.4413 38.7864 80.004C40.4584 78.5667 42.6437 77.848 45.3424 77.848C47.0731 77.848 48.5984 78.1707 49.9184 78.816C51.2677 79.4613 52.3091 80.3707 53.0424 81.544C53.7757 82.688 54.1424 84.008 54.1424 85.504V86.384C54.1424 86.6773 53.9957 86.824 53.7024 86.824H50.3584C50.0651 86.824 49.9184 86.6773 49.9184 86.384V85.988C49.9184 84.668 49.4931 83.5973 48.6424 82.776C47.7917 81.9547 46.6917 81.544 45.3424 81.544C43.9051 81.544 42.7317 81.9693 41.8224 82.82C40.9424 83.6707 40.5024 84.8 40.5024 86.208V91.752C40.5024 91.8107 40.5171 91.8547 40.5464 91.884C40.6051 91.884 40.6637 91.8547 40.7224 91.796C41.9837 90.388 43.8171 89.684 46.2224 89.684C49.6837 89.684 52.1477 91.0627 53.6144 93.82ZM49.9624 102.796C50.4024 101.857 50.6224 100.728 50.6224 99.408C50.6224 97.912 50.3584 96.7093 49.8304 95.8C48.9797 94.0987 47.5424 93.248 45.5184 93.248C44.4917 93.248 43.6117 93.4827 42.8784 93.952C42.1451 94.392 41.5877 95.0373 41.2064 95.888C40.7371 96.856 40.5024 98.1027 40.5024 99.628C40.5024 100.86 40.6931 101.901 41.0744 102.752C41.4557 103.691 42.0277 104.409 42.7904 104.908C43.5531 105.377 44.4771 105.612 45.5624 105.612C47.7037 105.612 49.1704 104.673 49.9624 102.796ZM79.4176 96.944C79.711 96.944 79.8576 97.0907 79.8576 97.384V100.288C79.8576 100.581 79.711 100.728 79.4176 100.728H77.5256C77.4083 100.728 77.3496 100.787 77.3496 100.904V108.56C77.3496 108.853 77.203 109 76.9096 109H73.5656C73.2723 109 73.1256 108.853 73.1256 108.56V100.904C73.1256 100.787 73.067 100.728 72.9496 100.728H59.5736C59.2803 100.728 59.1336 100.581 59.1336 100.288V97.912C59.1336 97.7653 59.1776 97.5893 59.2656 97.384L67.9336 78.508C68.0216 78.3027 68.183 78.2 68.4176 78.2H71.9376C72.0843 78.2 72.187 78.2587 72.2456 78.376C72.3336 78.464 72.3483 78.5813 72.2896 78.728L64.0176 96.724C63.9883 96.7827 63.9883 96.8413 64.0176 96.9C64.047 96.9293 64.091 96.944 64.1496 96.944H72.9496C73.067 96.944 73.1256 96.8853 73.1256 96.768V90.212C73.1256 89.9187 73.2723 89.772 73.5656 89.772H76.9096C77.203 89.772 77.3496 89.9187 77.3496 90.212V96.768C77.3496 96.8853 77.4083 96.944 77.5256 96.944H79.4176ZM88.7154 109C87.8941 109 87.2194 108.736 86.6914 108.208C86.1634 107.68 85.8994 107.005 85.8994 106.184C85.8994 105.363 86.1634 104.688 86.6914 104.16C87.2194 103.632 87.8941 103.368 88.7154 103.368C89.5367 103.368 90.2114 103.632 90.7394 104.16C91.2674 104.688 91.5314 105.363 91.5314 106.184C91.5314 107.005 91.2674 107.68 90.7394 108.208C90.2114 108.736 89.5367 109 88.7154 109ZM106.366 109.44C103.403 109.44 101.042 108.604 99.2816 106.932C97.5509 105.231 96.6856 102.957 96.6856 100.112V87.088C96.6856 84.2427 97.5509 81.984 99.2816 80.312C101.042 78.64 103.403 77.804 106.366 77.804C109.328 77.804 111.69 78.64 113.45 80.312C115.239 81.984 116.134 84.2427 116.134 87.088V100.112C116.134 102.957 115.239 105.231 113.45 106.932C111.69 108.604 109.328 109.44 106.366 109.44ZM106.366 105.788C108.067 105.788 109.416 105.304 110.414 104.336C111.411 103.339 111.91 102.019 111.91 100.376V86.912C111.91 85.2693 111.411 83.964 110.414 82.996C109.416 81.9987 108.067 81.5 106.366 81.5C104.723 81.5 103.403 81.9987 102.406 82.996C101.408 83.964 100.91 85.2693 100.91 86.912V100.376C100.91 102.019 101.408 103.339 102.406 104.336C103.403 105.304 104.723 105.788 106.366 105.788ZM129.527 90.828C128.325 90.828 127.21 90.5347 126.183 89.948C125.186 89.3613 124.394 88.5693 123.807 87.572C123.221 86.5747 122.927 85.4747 122.927 84.272C122.927 83.0987 123.221 82.0133 123.807 81.016C124.394 80.0187 125.186 79.2413 126.183 78.684C127.21 78.0973 128.325 77.804 129.527 77.804C130.701 77.804 131.786 78.0973 132.783 78.684C133.781 79.2707 134.573 80.0627 135.159 81.06C135.746 82.028 136.039 83.0987 136.039 84.272C136.039 85.4747 135.746 86.5747 135.159 87.572C134.573 88.5693 133.781 89.3613 132.783 89.948C131.786 90.5347 130.701 90.828 129.527 90.828ZM128.251 109C128.075 109 127.958 108.956 127.899 108.868C127.841 108.751 127.855 108.619 127.943 108.472L144.575 78.508C144.693 78.3027 144.869 78.2 145.103 78.2H147.259C147.435 78.2 147.553 78.2587 147.611 78.376C147.67 78.464 147.655 78.5813 147.567 78.728L130.935 108.692C130.847 108.897 130.671 109 130.407 109H128.251ZM129.527 88.232C130.613 88.232 131.522 87.8507 132.255 87.088C132.989 86.3253 133.355 85.3867 133.355 84.272C133.355 83.1867 132.974 82.2773 132.211 81.544C131.478 80.7813 130.583 80.4 129.527 80.4C128.442 80.4 127.518 80.7813 126.755 81.544C125.993 82.2773 125.611 83.1867 125.611 84.272C125.611 85.3867 125.993 86.3253 126.755 87.088C127.518 87.8507 128.442 88.232 129.527 88.232ZM146.291 109.396C145.089 109.396 143.974 109.103 142.947 108.516C141.95 107.929 141.158 107.137 140.571 106.14C139.985 105.143 139.691 104.057 139.691 102.884C139.691 101.711 139.985 100.625 140.571 99.628C141.158 98.6307 141.95 97.8387 142.947 97.252C143.974 96.6653 145.089 96.372 146.291 96.372C147.465 96.372 148.55 96.6653 149.547 97.252C150.545 97.8387 151.337 98.6307 151.923 99.628C152.51 100.625 152.803 101.711 152.803 102.884C152.803 104.057 152.51 105.143 151.923 106.14C151.337 107.137 150.545 107.929 149.547 108.516C148.55 109.103 147.465 109.396 146.291 109.396ZM146.291 106.8C147.377 106.8 148.286 106.419 149.019 105.656C149.753 104.893 150.119 103.969 150.119 102.884C150.119 101.799 149.738 100.875 148.975 100.112C148.242 99.3493 147.347 98.968 146.291 98.968C145.206 98.968 144.282 99.3493 143.519 100.112C142.757 100.875 142.375 101.799 142.375 102.884C142.375 103.969 142.757 104.893 143.519 105.656C144.282 106.419 145.206 106.8 146.291 106.8Z'
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
                      Nonkeratinizing Undifferentiated Carcinoma
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
                            d='M94 4C143.706 4 184 44.2944 184 94C184 143.706 143.706 184 94 184C51.039 184 15.1085 153.899 6.14856 113.637'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewRightContent3 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M45.3386 109C45.1919 109 45.0746 108.956 44.9866 108.868C44.9279 108.751 44.9279 108.619 44.9866 108.472L54.9746 82.072C55.0039 82.0133 55.0039 81.9693 54.9746 81.94C54.9453 81.8813 54.9013 81.852 54.8426 81.852H44.2386C44.1213 81.852 44.0626 81.9107 44.0626 82.028V84.096C44.0626 84.3893 43.9159 84.536 43.6226 84.536H40.9826C40.6893 84.536 40.5426 84.3893 40.5426 84.096V78.64C40.5426 78.3467 40.6893 78.2 40.9826 78.2H59.0666C59.3599 78.2 59.5066 78.3467 59.5066 78.64V81.588C59.5066 81.7053 59.4773 81.8813 59.4186 82.116L49.4746 108.648C49.3866 108.883 49.2253 109 48.9906 109H45.3386ZM68.4541 78.332C68.6301 78.244 68.8207 78.2 69.0261 78.2H72.5021C72.7954 78.2 72.9421 78.3467 72.9421 78.64V108.56C72.9421 108.853 72.7954 109 72.5021 109H69.1581C68.8647 109 68.7181 108.853 68.7181 108.56V82.732C68.7181 82.6733 68.6887 82.6293 68.6301 82.6C68.6007 82.5707 68.5567 82.5707 68.4981 82.6L63.8781 84.184C63.8194 84.2133 63.7461 84.228 63.6581 84.228C63.4821 84.228 63.3794 84.1107 63.3501 83.876L63.1741 81.368C63.1741 81.0747 63.2621 80.8987 63.4381 80.84L68.4541 78.332ZM82.8228 109C82.0015 109 81.3268 108.736 80.7988 108.208C80.2708 107.68 80.0068 107.005 80.0068 106.184C80.0068 105.363 80.2708 104.688 80.7988 104.16C81.3268 103.632 82.0015 103.368 82.8228 103.368C83.6441 103.368 84.3188 103.632 84.8468 104.16C85.3748 104.688 85.6388 105.363 85.6388 106.184C85.6388 107.005 85.3748 107.68 84.8468 108.208C84.3188 108.736 83.6441 109 82.8228 109ZM110.032 95.36C110.355 96.6507 110.516 97.9853 110.516 99.364C110.516 100.743 110.34 102.019 109.988 103.192C109.431 105.069 108.36 106.565 106.776 107.68C105.221 108.765 103.359 109.308 101.188 109.308C99.0467 109.308 97.2133 108.78 95.688 107.724C94.1627 106.668 93.092 105.231 92.476 103.412C92.1827 102.591 92.0213 101.872 91.992 101.256V101.168C91.992 100.933 92.124 100.816 92.388 100.816H95.864C96.128 100.816 96.2747 100.948 96.304 101.212C96.3333 101.417 96.4067 101.725 96.524 102.136C96.8467 103.221 97.404 104.087 98.196 104.732C99.0173 105.348 100 105.656 101.144 105.656C102.347 105.656 103.359 105.333 104.18 104.688C105.031 104.013 105.603 103.089 105.896 101.916C106.101 101.3 106.204 100.449 106.204 99.364C106.204 98.396 106.116 97.5013 105.94 96.68C105.735 95.5653 105.207 94.7147 104.356 94.128C103.535 93.512 102.508 93.204 101.276 93.204C100.132 93.204 99.1053 93.468 98.196 93.996C97.2867 94.4947 96.7 95.1693 96.436 96.02C96.348 96.284 96.1867 96.416 95.952 96.416H92.432C92.1387 96.416 91.992 96.2693 91.992 95.976V78.64C91.992 78.3467 92.1387 78.2 92.432 78.2H108.888C109.181 78.2 109.328 78.3467 109.328 78.64V81.412C109.328 81.7053 109.181 81.852 108.888 81.852H96.392C96.2747 81.852 96.216 81.9107 96.216 82.028L96.172 91.224C96.172 91.4 96.2453 91.444 96.392 91.356C97.096 90.74 97.9027 90.2853 98.812 89.992C99.7507 89.6693 100.733 89.508 101.76 89.508C103.813 89.508 105.573 90.0213 107.04 91.048C108.536 92.0747 109.533 93.512 110.032 95.36ZM123.119 90.828C121.917 90.828 120.802 90.5347 119.775 89.948C118.778 89.3613 117.986 88.5693 117.399 87.572C116.813 86.5747 116.519 85.4747 116.519 84.272C116.519 83.0987 116.813 82.0133 117.399 81.016C117.986 80.0187 118.778 79.2413 119.775 78.684C120.802 78.0973 121.917 77.804 123.119 77.804C124.293 77.804 125.378 78.0973 126.375 78.684C127.373 79.2707 128.165 80.0627 128.751 81.06C129.338 82.028 129.631 83.0987 129.631 84.272C129.631 85.4747 129.338 86.5747 128.751 87.572C128.165 88.5693 127.373 89.3613 126.375 89.948C125.378 90.5347 124.293 90.828 123.119 90.828ZM121.843 109C121.667 109 121.55 108.956 121.491 108.868C121.433 108.751 121.447 108.619 121.535 108.472L138.167 78.508C138.285 78.3027 138.461 78.2 138.695 78.2H140.851C141.027 78.2 141.145 78.2587 141.203 78.376C141.262 78.464 141.247 78.5813 141.159 78.728L124.527 108.692C124.439 108.897 124.263 109 123.999 109H121.843ZM123.119 88.232C124.205 88.232 125.114 87.8507 125.847 87.088C126.581 86.3253 126.947 85.3867 126.947 84.272C126.947 83.1867 126.566 82.2773 125.803 81.544C125.07 80.7813 124.175 80.4 123.119 80.4C122.034 80.4 121.11 80.7813 120.347 81.544C119.585 82.2773 119.203 83.1867 119.203 84.272C119.203 85.3867 119.585 86.3253 120.347 87.088C121.11 87.8507 122.034 88.232 123.119 88.232ZM139.883 109.396C138.681 109.396 137.566 109.103 136.539 108.516C135.542 107.929 134.75 107.137 134.163 106.14C133.577 105.143 133.283 104.057 133.283 102.884C133.283 101.711 133.577 100.625 134.163 99.628C134.75 98.6307 135.542 97.8387 136.539 97.252C137.566 96.6653 138.681 96.372 139.883 96.372C141.057 96.372 142.142 96.6653 143.139 97.252C144.137 97.8387 144.929 98.6307 145.515 99.628C146.102 100.625 146.395 101.711 146.395 102.884C146.395 104.057 146.102 105.143 145.515 106.14C144.929 107.137 144.137 107.929 143.139 108.516C142.142 109.103 141.057 109.396 139.883 109.396ZM139.883 106.8C140.969 106.8 141.878 106.419 142.611 105.656C143.345 104.893 143.711 103.969 143.711 102.884C143.711 101.799 143.33 100.875 142.567 100.112C141.834 99.3493 140.939 98.968 139.883 98.968C138.798 98.968 137.874 99.3493 137.111 100.112C136.349 100.875 135.967 101.799 135.967 102.884C135.967 103.969 136.349 104.893 137.111 105.656C137.874 106.419 138.798 106.8 139.883 106.8Z'
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
              <p className='white text-center bolder'>ASIAN</p>
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
                            d='M94.5 4C144.206 4 184.5 44.2944 184.5 94C184.5 111.945 179.248 128.663 170.198 142.701'
                            stroke=''
                            strokeWidth='8'
                            strokeLinecap='round'
                            className={
                              circleInViewRightContent4 ? 'yellow-line' : ''
                            }
                          />
                          <path
                            d='M57.456 94.392C58.0426 95.8293 58.336 97.4867 58.336 99.364C58.336 100.919 58.1013 102.356 57.632 103.676C56.9866 105.495 55.916 106.903 54.42 107.9C52.924 108.868 51.12 109.352 49.008 109.352C46.896 109.352 45.0626 108.809 43.508 107.724C41.9826 106.639 40.912 105.172 40.296 103.324C39.9733 102.503 39.7826 101.329 39.724 99.804C39.724 99.5107 39.8706 99.364 40.164 99.364H43.552C43.8453 99.364 43.992 99.5107 43.992 99.804C44.0506 100.86 44.168 101.637 44.344 102.136C44.6373 103.221 45.18 104.087 45.972 104.732C46.7933 105.377 47.8053 105.7 49.008 105.7C51.2373 105.7 52.7333 104.688 53.496 102.664C53.8773 101.784 54.068 100.64 54.068 99.232C54.068 97.736 53.8333 96.4013 53.364 95.228C52.5426 93.4093 51.076 92.5 48.964 92.5C48.4653 92.5 47.8346 92.72 47.072 93.16C46.9546 93.2187 46.8666 93.248 46.808 93.248C46.6613 93.248 46.544 93.1747 46.456 93.028L44.784 90.74C44.7253 90.6227 44.696 90.52 44.696 90.432C44.696 90.344 44.74 90.2413 44.828 90.124L52.352 82.072C52.44 81.9253 52.4106 81.852 52.264 81.852H40.56C40.2666 81.852 40.12 81.7053 40.12 81.412V78.64C40.12 78.3467 40.2666 78.2 40.56 78.2H57.632C57.9253 78.2 58.072 78.3467 58.072 78.64V81.808C58.072 81.9547 57.9986 82.1307 57.852 82.336L51.164 89.64C51.1053 89.6987 51.0906 89.7573 51.12 89.816C51.1493 89.8453 51.208 89.8747 51.296 89.904C52.792 90.0507 54.0533 90.52 55.08 91.312C56.1066 92.0747 56.8986 93.1013 57.456 94.392ZM83.4782 96.944C83.7715 96.944 83.9182 97.0907 83.9182 97.384V100.288C83.9182 100.581 83.7715 100.728 83.4782 100.728H81.5862C81.4689 100.728 81.4102 100.787 81.4102 100.904V108.56C81.4102 108.853 81.2635 109 80.9702 109H77.6262C77.3329 109 77.1862 108.853 77.1862 108.56V100.904C77.1862 100.787 77.1275 100.728 77.0102 100.728H63.6342C63.3409 100.728 63.1942 100.581 63.1942 100.288V97.912C63.1942 97.7653 63.2382 97.5893 63.3262 97.384L71.9942 78.508C72.0822 78.3027 72.2435 78.2 72.4782 78.2H75.9982C76.1449 78.2 76.2475 78.2587 76.3062 78.376C76.3942 78.464 76.4089 78.5813 76.3502 78.728L68.0782 96.724C68.0489 96.7827 68.0489 96.8413 68.0782 96.9C68.1075 96.9293 68.1515 96.944 68.2102 96.944H77.0102C77.1275 96.944 77.1862 96.8853 77.1862 96.768V90.212C77.1862 89.9187 77.3329 89.772 77.6262 89.772H80.9702C81.2635 89.772 81.4102 89.9187 81.4102 90.212V96.768C81.4102 96.8853 81.4689 96.944 81.5862 96.944H83.4782ZM92.7759 109C91.9546 109 91.2799 108.736 90.7519 108.208C90.2239 107.68 89.9599 107.005 89.9599 106.184C89.9599 105.363 90.2239 104.688 90.7519 104.16C91.2799 103.632 91.9546 103.368 92.7759 103.368C93.5973 103.368 94.2719 103.632 94.7999 104.16C95.3279 104.688 95.5919 105.363 95.5919 106.184C95.5919 107.005 95.3279 107.68 94.7999 108.208C94.2719 108.736 93.5973 109 92.7759 109ZM106.873 78.332C107.049 78.244 107.24 78.2 107.445 78.2H110.921C111.214 78.2 111.361 78.3467 111.361 78.64V108.56C111.361 108.853 111.214 109 110.921 109H107.577C107.284 109 107.137 108.853 107.137 108.56V82.732C107.137 82.6733 107.108 82.6293 107.049 82.6C107.02 82.5707 106.976 82.5707 106.917 82.6L102.297 84.184C102.238 84.2133 102.165 84.228 102.077 84.228C101.901 84.228 101.798 84.1107 101.769 83.876L101.593 81.368C101.593 81.0747 101.681 80.8987 101.857 80.84L106.873 78.332ZM125.51 90.828C124.307 90.828 123.193 90.5347 122.166 89.948C121.169 89.3613 120.377 88.5693 119.79 87.572C119.203 86.5747 118.91 85.4747 118.91 84.272C118.91 83.0987 119.203 82.0133 119.79 81.016C120.377 80.0187 121.169 79.2413 122.166 78.684C123.193 78.0973 124.307 77.804 125.51 77.804C126.683 77.804 127.769 78.0973 128.766 78.684C129.763 79.2707 130.555 80.0627 131.142 81.06C131.729 82.028 132.022 83.0987 132.022 84.272C132.022 85.4747 131.729 86.5747 131.142 87.572C130.555 88.5693 129.763 89.3613 128.766 89.948C127.769 90.5347 126.683 90.828 125.51 90.828ZM124.234 109C124.058 109 123.941 108.956 123.882 108.868C123.823 108.751 123.838 108.619 123.926 108.472L140.558 78.508C140.675 78.3027 140.851 78.2 141.086 78.2H143.242C143.418 78.2 143.535 78.2587 143.594 78.376C143.653 78.464 143.638 78.5813 143.55 78.728L126.918 108.692C126.83 108.897 126.654 109 126.39 109H124.234ZM125.51 88.232C126.595 88.232 127.505 87.8507 128.238 87.088C128.971 86.3253 129.338 85.3867 129.338 84.272C129.338 83.1867 128.957 82.2773 128.194 81.544C127.461 80.7813 126.566 80.4 125.51 80.4C124.425 80.4 123.501 80.7813 122.738 81.544C121.975 82.2773 121.594 83.1867 121.594 84.272C121.594 85.3867 121.975 86.3253 122.738 87.088C123.501 87.8507 124.425 88.232 125.51 88.232ZM142.274 109.396C141.071 109.396 139.957 109.103 138.93 108.516C137.933 107.929 137.141 107.137 136.554 106.14C135.967 105.143 135.674 104.057 135.674 102.884C135.674 101.711 135.967 100.625 136.554 99.628C137.141 98.6307 137.933 97.8387 138.93 97.252C139.957 96.6653 141.071 96.372 142.274 96.372C143.447 96.372 144.533 96.6653 145.53 97.252C146.527 97.8387 147.319 98.6307 147.906 99.628C148.493 100.625 148.786 101.711 148.786 102.884C148.786 104.057 148.493 105.143 147.906 106.14C147.319 107.137 146.527 107.929 145.53 108.516C144.533 109.103 143.447 109.396 142.274 109.396ZM142.274 106.8C143.359 106.8 144.269 106.419 145.002 105.656C145.735 104.893 146.102 103.969 146.102 102.884C146.102 101.799 145.721 100.875 144.958 100.112C144.225 99.3493 143.33 98.968 142.274 98.968C141.189 98.968 140.265 99.3493 139.502 100.112C138.739 100.875 138.358 101.799 138.358 102.884C138.358 103.969 138.739 104.893 139.502 105.656C140.265 106.419 141.189 106.8 142.274 106.8Z'
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

export default memo(RightContent)
