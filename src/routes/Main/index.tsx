import styled from 'styled-components'

import { TripleImg, PlayStoreImg, AppleImg } from '../../assets/images'

const Container = styled.section`
  min-width: 1200px;
  min-height: 400px;
  align-items: center;
  position: relative;
`
const AppImg = styled.div`
  top: 100px;
  left: 200px;
  padding-top: 250px;
  width: 400px;
  height: 340px;
  background-image: url(${TripleImg});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  position: absolute;
`

const Main = () => {
  return (
    <Container>
      <AppImg>2021년 12월 기준</AppImg>
      <ul style={{ marginLeft: '780px', paddingTop: '50px' }}>
        <li>
          <p style={{ fontSize: '36px' }}>
            <strong>700만 명</strong>의 여행자
            <br />
            <strong>100만 개</strong>의 여행 리뷰
            <br />
            <strong>470만</strong>의 여행 일정
          </p>
        </li>
      </ul>
      <ul style={{ display: 'flex', marginLeft: '780px' }}>
        <li style={{ display: 'flex', marginRight: '54px' }}>
          <img
            style={{
              width: '54px',
              height: '54px',
              margin: 'auto 5px auto 0',
            }}
            alt="playstore"
            src={PlayStoreImg}
          />
          <p style={{ fontSize: '14px' }}>
            2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
          </p>
        </li>
        <li style={{ display: 'flex' }}>
          <img
            style={{
              width: '54px',
              height: '54px',
              margin: 'auto 5px auto 0',
            }}
            alt="playstore"
            src={AppleImg}
          />
          <p style={{ fontSize: '14px' }}>
            2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
          </p>
        </li>
      </ul>
    </Container>
  )
}

export default Main
