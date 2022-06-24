import { TripleImg, PlayStoreImg, AppleImg } from '../../assets/images'
import { Award } from '../../components/Award'
import { Record } from '../../components/Record'

import { AppImg, Container, AwardWrap, RecordWrap } from './styles'

const Main = () => {
  return (
    <Container>
      <AppImg backImg={TripleImg}>2021년 12월 기준</AppImg>
      <RecordWrap>
        <Record value={700} unit="만 명" dsec="의 여행자" />
        <Record value={100} unit="만 개" dsec="의 여행 리뷰" />
        <Record value={470} unit="만 개" dsec="의 여행 일정" />
      </RecordWrap>
      <AwardWrap>
        <Award
          backImg={PlayStoreImg}
          year="2018"
          enterprise="구글 플레이스토어"
          award="올해의 앱 최우수상 수상"
        />
        <Award
          backImg={AppleImg}
          year="2018"
          enterprise="애플 앱스토어"
          award="오늘의 여행앱 선정"
        />
      </AwardWrap>
    </Container>
  )
}

export default Main
