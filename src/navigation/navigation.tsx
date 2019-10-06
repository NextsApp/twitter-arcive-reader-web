import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import { Dashboard, Tweets, ZipReader, DirectMessages } from '../modules'
import { ListItem, NavigationDrawer, FontIcon } from 'react-md'
import navigationItems from './navigation-items'
import Footer from '../components/footer/footer'
import { connect } from 'react-redux'
import { selectAppState } from '../modules/app/selectors'
import { APP_STATES } from '../modules/app/constants'
import dashboard from '../modules/dashboard/containers/dashboard'

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
  if (props.appState === APP_STATES.UNKNOWN) {
    visible = false
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
        {!visible ? (
          <ZipReader />
        ) : (
          <Switch>
            <Route path="/" exact component={dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/tweets" exact component={Tweets} />
            <Route path="/dm" exact component={DirectMessages} />
          </Switch>
        )}
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
