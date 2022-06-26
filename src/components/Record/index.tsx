import useCounter from '../../hooks/useCounter'
import { RecordProps } from '../../types/type'

import { RecordItem } from './styles'

export const Record = ({ value, unit, dsec }: RecordProps) => {
  const count = useCounter(value)
  return (
    <RecordItem>
      <strong>
        {count}
        {unit}
      </strong>
      {dsec}
    </RecordItem>
  )
}
