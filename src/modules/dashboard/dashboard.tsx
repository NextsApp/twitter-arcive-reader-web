import * as React from 'react'
import Base from '../../components/base/base'

interface InterfaceDashboardProps {
  name: string
}
const Dashboard: React.FunctionComponent<InterfaceDashboardProps> = props => {
  return (
    <Base>
      <h1>{props.name}</h1>
    </Base>
  )
}

export default Dashboard
