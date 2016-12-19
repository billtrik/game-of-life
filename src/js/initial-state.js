import _ from 'lodash';
import { fromJS } from 'immutable';
import {WIDTH, HEIGHT} from './constants';

// from: http://stackoverflow.com/a/36756561/659610
function getRandomBoolean () {
  const a = new Uint8Array(1);
  crypto.getRandomValues(a);
  return a[0] < 127;
}

export function generateDummyData(width, height) {
  const result = [];

  for (let i=0; i < height; i++) {
    result[i] = [];

    for (let j=0; j < width; j++) {
      result[i][j] = getRandomBoolean();
    }
  }

  return result;
}

export default () => fromJS({
  width: WIDTH,
  height: HEIGHT,
  data: generateDummyData(WIDTH, HEIGHT)
});
