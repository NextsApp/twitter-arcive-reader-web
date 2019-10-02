import * as React from 'react'
import { Card, CardTitle, CardText } from 'react-md'

// props & state ---------------------------------------------------------------
interface InterfaceBaseProps {
  name?: string
}

interface InterfaceBaseState {
  anme: string
}

// component -------------------------------------------------------------------
class Base extends React.PureComponent<InterfaceBaseProps, InterfaceBaseState> {
  render() {
    return (
      <Card style={{ minHeight: 100 }}>
        <CardTitle title={'Macera Devam Ediyor'} />
        <CardText>{this.props.children}</CardText>
      </Card>
    )
  }
}

export default Base
