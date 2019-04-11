import * as aTypes from './types';

export const gotClothes = clothes => ({
  type: aTypes.GOT_CLOTHES,
  clothes,
});

export const requestingData = () => {
  return {
    type: aTypes.REQUESTING_DATA,
  };
};
