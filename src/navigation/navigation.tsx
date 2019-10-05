import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard'
import { ListItem, NavigationDrawer, FontIcon } from 'react-md'
import navigationItems from './navigation-items'
import Footer from '../components/footer/footer'
import { connect } from 'react-redux'
import { selectAppState } from '../modules/app/selectors'
import { APP_STATES } from '../modules/app/constants'
import { ZipReader } from '../modules/zip-reader'

function NavItemLink({ label, to, icon, exact }: any): React.ReactElement {
  return (
    <Route path={to} exact={exact}>
      {({ match }) => {
        return (
          <ListItem
            component={Link}
            active={false}
            to={to}
            primaryText={label}
            leftIcon={<FontIcon>{icon}</FontIcon>}
          />
        )
      }}
    </Route>
  )
}

interface INavigationProps {
  appState?: string
  children?: any
}

const Navigation: React.FunctionComponent = (props: INavigationProps) => {
  let visible: boolean = true
  let defaultComponent: any = Dashboard
  if (props.appState === APP_STATES.UNKNOWN) {
    visible = false
    defaultComponent = ZipReader
  }

  return (
    <Router>
      <NavigationDrawer
        toolbarTitle={'Twitter Archive Reader Online'}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        defaultMedia={'desktop'}
        navItems={navigationItems.map((props, i) => (
          <NavItemLink {...props} key={i} />
        ))}
        visible={visible}
        contentId="content-navigator"
        footer={<Footer />}
      >
        <Switch>
          <Route path="/" component={defaultComponent} />
        </Switch>
      </NavigationDrawer>
    </Router>
  )
}

const mapStateToProps = (state: any) => {
  return {
    appState: selectAppState(state),
  }
}

export default connect(mapStateToProps)(Navigation)
