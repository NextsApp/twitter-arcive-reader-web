import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard'
import { ListItem, NavigationDrawer, FontIcon, IconSeparator } from 'react-md'
import navigationItems from './navigation-items'

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
        toolbarTitle={"Twitter Archive Reader Online"}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
        navItems={navigationItems.map((props, i) => (
          <NavItemLink {...props} key={i} />
        ))}
        contentId="content"
        contentClassName="md-grid"
        autoclose={true}
      >
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </NavigationDrawer>
    </Router>
  )
}

export default Navigation
