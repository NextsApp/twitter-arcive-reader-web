import * as React from 'react'
import Navigation from './navigation/navigation'

interface InterfaceDashboardProps {
  name: string
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    )
  }
}

export default App
