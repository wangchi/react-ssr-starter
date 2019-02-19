import { CHANGE_LIST } from './constants';

const defaultState = {
  name: 'walkerbe',
  newsList: []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      };
    default:
      return state;
  }
}
