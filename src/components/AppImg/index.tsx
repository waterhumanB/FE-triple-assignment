import { AppImgProps } from '../../types/type'

import { AppImgItem } from './styles'

export const AppImg = ({ byDate, backImg }: AppImgProps) => {
  return <AppImgItem backImg={backImg}>{byDate}</AppImgItem>
}
