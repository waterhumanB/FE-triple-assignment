import styled from 'styled-components'

import colors from '../../styles/constants/colors'
import { BackImgProps } from '../../types/type'

export const Container = styled.section`
  min-width: 1200px;
  min-height: 400px;
  align-items: center;
  position: relative;
`

export const AppImg = styled.div<BackImgProps>`
  top: 100px;
  left: 200px;
  padding-top: 275px;
  width: 400px;
  height: 340px;
  background-image: ${(props) => `url(${props.backImg}) `};
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  position: absolute;
  color: ${colors.appImgText};
  font-family: sans-serif;
`
export const RecordWrap = styled.section`
  margin-left: 780px;
  padding-top: 115px;
`
export const AwardWrap = styled.ul`
  margin-left: 780px;
  white-space: nowrap;
`
