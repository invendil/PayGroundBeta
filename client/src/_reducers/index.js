import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { companies } from './companies.reducer'
import { news } from '../_components/NewsContainer/reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  companies,
  news
});

export default rootReducer;