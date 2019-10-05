import * as React from 'react'
import Base from '../../../components/base/base'
import { selectAppState } from '../../app/selectors'
import { connect } from 'react-redux'
import { APP_STATES } from '../../app/constants'
import { ZipReader } from '../../zip-reader'

interface InterfaceDashboardProps {
  appState: string
}

interface InterfaceDashboardState {
  zipReaderModalVisible: boolean
}

export class Dashboard extends React.Component<InterfaceDashboardProps, InterfaceDashboardState> {
  render() {
    const { appState } = this.props

    return <Base>{appState === APP_STATES.UNKNOWN && <ZipReader />}</Base>
  }
}

const mapStateToProps = (state: any) => {
  return {
    appState: selectAppState(state),
  }
}

export default connect(mapStateToProps)(Dashboard)
