import * as React from 'react'
import Navigation from './navigation/navigation'
import { Provider } from 'react-redux'

import store from './app/store'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store({})}>
          <Navigation />
        </Provider>
      </div>
    )
  }
}

export default App
