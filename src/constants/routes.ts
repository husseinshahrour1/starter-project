export const LOGIN = '/login';
export const FORGET_PASSWORD = '/forget-password';
export const RESET_PASSWORD = '/reset';

//ADS
export const ADS = '/ads';
export const CREATEAD = '/ads/create';
export const EDITAD = '/ads/:id';

//DASHBOARD
export const DASHBOARD = '/dashboard';

//STORES
export const STORES = '/stores';
export const ADDSTORE = '/stores/add';
export const EDITSTORE = '/stores/:id';
export const STOREREWARDS = '/stores/rewards/:id';

//DEVICES
export const DEVICES = '/devices';
export const EDITDEVICE = '/devices/:id';
export const DEVICE_HISTORY = '/devices/history';

//RESET REQUESTS
export const RESETLISTING = '/requests';

export const ADDUSER = '/users/add';
export const USERS = '/users';
export const EDITUSER = '/users/:id';
//SKU
export const SKUS = '/skus';
export const CREATESKU = '/skus/create';
export const EDITSKU = '/skus/:id';

//REWARDS
export const REWARDS = '/rewards';
export const CREATEREWARD = '/rewards/create';
export const EDITREWARD = '/rewards/:id';

//EMAIL NOTIFICATION SETTINGS
export const EMAILSETTINGS = '/email-notification-settings';

//REGIONS
export const REGIONS = '/regions';
export const ADDREGION = '/regions/create';
export const EDITREGION = '/regions/:id';

//MARKET
export const MARKETS = '/markets';
export const ADDMARKET = '/markets/create';
export const EDITMARKET = '/markets/:id';

//SUBMARKET
export const SUBMARKETS = '/sub-markets';
export const ADDSUBMARKET = '/sub-markets/create';
export const EDITSUBMARKET = '/sub-markets/:id';

//ROLES
export const ROLES = '/roles';
export const ADDROLE = '/roles/create';
export const EDITROLE = '/roles/:id';

export const routeKeys = [
  { key: '1', url: DASHBOARD },
  { key: '2', url: STORES },
  { key: '3', url: DEVICES },
  { key: '4', url: USERS },
  { key: '5', url: ADS },
  { key: '6', url: RESETLISTING },
  { key: '7', url: SKUS },
  { key: '8', url: DEVICE_HISTORY },
  { key: '9', url: REWARDS },
  // { key: '10', url: EMAILSETTINGS },
  { key: '12', url: REGIONS },
  { key: '13', url: MARKETS },
  { key: '14', url: SUBMARKETS },
  { key: '15', url: ROLES },
];
