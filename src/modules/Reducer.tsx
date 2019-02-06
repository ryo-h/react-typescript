import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

export interface IRootState {  // 必要なら当然自分用のstateも追加してOK
  router: RouterState,   // Router用の領域
};

export function createRootReducer(history: History) {
  return combineReducers(
    {
      router: connectRouter(history),
    }
  );
}