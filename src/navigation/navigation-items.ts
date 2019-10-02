const TO_PREFIX = ''
const navigationItems = [
  {
    label: 'Dashboard',
    to: TO_PREFIX,
    exact: true,
    icon: 'dashboard',
  },
  {
    label: 'Tweets',
    to: `${TO_PREFIX}/Tweets`,
    icon: 'edit',
  },
  {
    label: "DM's",
    to: `${TO_PREFIX}/dm`,
    icon: 'send',
  },
  {
    label: 'Account',
    to: `${TO_PREFIX}/account`,
    icon: 'account_circle',
  },
  {
    label: 'Follower & Friends',
    to: `${TO_PREFIX}/follower-and-friends`,
    icon: 'supervisor_account',
  },
  {
    label: 'Blocked',
    to: `${TO_PREFIX}/profile`,
    icon: 'account_circle',
  },
  {
    label: 'Likes',
    to: `${TO_PREFIX}/profile`,
    icon: 'account_circle',
  },
]

export default navigationItems
