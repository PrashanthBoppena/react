import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import miscReducer from './miscReducer';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';
import walletReducer from './walletReducer';
import customerReducer from './customerReducer';
import customerAccountsReducer from './customerAccountsReducer';
import ticketDetailsReducer from './ticketDetailsReducer';
const rootReducer = {
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer,
  wallet:walletReducer,
  customer:customerReducer,
  customerAccounts:customerAccountsReducer,
  ticket:ticketDetailsReducer,
};

export default rootReducer;
