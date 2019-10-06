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
    to: `${TO_PREFIX}/tweets`,
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
    icon: 'block',
  },
  {
    label: 'Likes',
    to: `${TO_PREFIX}/likes`,
    icon: 'favorite',
  },
]

export default navigationItems
