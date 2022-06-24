import styled from 'styled-components'

import colors from '../../styles/constants/colors'
import { BackImgProps } from '../../types/type'

export const AppImgItem = styled.div<BackImgProps>`
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
