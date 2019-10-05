import * as React from 'react'
import Navigation from './navigation/navigation'
import { connect } from 'react-redux'

import { selectAppState } from './modules/app/selectors'

interface InterfaceAppProps {
  appState: string
}

class App extends React.Component<InterfaceAppProps> {
  render() {
    return <Navigation />
  }
}

const mapStateToProps = (state: any) => {
  return {
    appState: selectAppState(state),
  }
}

export default connect(mapStateToProps)(App)
