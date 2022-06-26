import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(10px);
}

to {
  opacity: 1;
}
`

export const Container = styled.section`
  min-width: 1200px;
  min-height: 400px;
  align-items: center;
  position: relative;
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
`
export const RecordWrap = styled.section`
  margin-left: 780px;
  padding-top: 115px;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
`
export const AwardWrap = styled.ul`
  margin-left: 780px;
  padding-top: 10px;
  white-space: nowrap;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`
