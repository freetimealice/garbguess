import axios from 'axios';
import * as action from './normalActions';

export const fetchClothes = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/clothes');
    dispatch(action.gotClothes(data));
  };
};

