import styled from 'styled-components'

import colors from '../../styles/constants/colors'
import { BackImgProps } from '../../types/type'

export const AwardItem = styled.div<BackImgProps>`
  height: 54px;
  background-image: ${(props) => `url(${props.backImg}) `};
  background-size: 54px;
  background-repeat: no-repeat;
  padding: 5px 0 5px 62px;
  margin-top: 20px;
  margin-right: 42px;
  display: inline-block;
  color: ${colors.awardText};
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  font-family: sans-serif;
`
