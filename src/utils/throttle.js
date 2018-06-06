// @flow
import debounce from './debounce';

function throttle(func, wait) {
  return debounce(func, wait, {
    leading: true,
    maxWait: wait
  });
}

export default throttle;
