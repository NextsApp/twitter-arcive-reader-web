import * as React from 'react'
import Base from '../../../components/base/base'

interface IDirectMessagesProps {
  name?: string
}
const DirectMessages: React.FunctionComponent<IDirectMessagesProps> = props => {
  return (
    <Base>
      <h1>DirectMessages</h1>
    </Base>
  )
}

export default DirectMessages
