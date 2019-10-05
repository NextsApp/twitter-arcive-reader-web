import * as React from 'react'
import { Card, CardText } from 'react-md'

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
      <Card>
        <CardText>{this.props.children}</CardText>
      </Card>
    )
  }
}

export default Base
