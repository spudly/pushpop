import {readdirSync} from 'fs';
import * as exported from './index';

const fns = readdirSync(__dirname);

fns.forEach((fn) => {
  if (fn.startsWith('index')) {
    return;
  }
  test(`${fn} is exported`, () => {
    expect(exported).toHaveProperty(fn);
  });
});
