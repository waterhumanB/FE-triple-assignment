import useCounter from '../../hooks/useCounter'
import { RecordProps } from '../../types/type'

import { RecordItem } from './styles'

export const Record = ({ unit, dsec }: RecordProps) => {
  const count = useCounter(5000, 179, 3000)
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
