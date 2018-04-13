import { combineReducers } from 'redux';

import RouteIdReducer from './route_id_reducer';
import UserStatsReducer from './route_id_reducer';

const uiReducer = combineReducers({
  routeId: RouteIdReducer,
  userStats: UserStatsReducer,
});

export default uiReducer;