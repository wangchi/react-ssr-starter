import axios from 'axios';
import { CHANGE_LIST } from './constants';


const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://127.0.0.1:3000/api/newslist').then((res) => {
      const list = res.data.data;
      dispatch(changeList(list));
    });
  };
}
