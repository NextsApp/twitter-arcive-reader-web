import * as React from 'react'
import Base from '../../../components/base/base'

interface InterfaceDashboardProps {
  name?: string
}
const Tweets: React.FunctionComponent<InterfaceDashboardProps> = props => {
  return (
    <Base>
      <h1>Tweets</h1>
    </Base>
  )
}

export default Tweets
