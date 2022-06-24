import { RecordProps } from '../../types/type'

import { RecordItem } from './styles'

export const Record = ({ value, unit, dsec }: RecordProps) => {
  return (
    <RecordItem>
      <strong>
        {value}
        {unit}
      </strong>
      {dsec}
    </RecordItem>
  )
}
