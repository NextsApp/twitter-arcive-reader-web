import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard'
import { ListItem, NavigationDrawer, FontIcon } from 'react-md'
import navigationItems from './navigation-items'
import Footer from "../components/footer/footer"

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

const Navigation: React.FunctionComponent = props => {
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
        contentId="content-navigator"
        footer={ <Footer /> }
      >
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </NavigationDrawer>
    </Router>
  )
}

export default Navigation
