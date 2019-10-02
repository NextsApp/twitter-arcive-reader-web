import * as React from 'react'

interface InterfaceDashboardProps {
  name: string
}
const Dashboard: React.FunctionComponent<InterfaceDashboardProps> = props => {
  return <h1>Hello, {props.name}</h1>
}

export default Dashboard
