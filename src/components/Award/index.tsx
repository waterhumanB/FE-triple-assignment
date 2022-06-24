import { AwardProps } from '../../types/type'

import { AwardItem } from './styles'

export const Award = ({ backImg, year, enterprise, award }: AwardProps) => {
  return (
    <AwardItem backImg={backImg}>
      {year} {enterprise} <br />
      {award}
    </AwardItem>
  )
}
