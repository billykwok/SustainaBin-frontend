// @flow
const rafThrottle = (callback: func, trailing: boolean = true) => {
  let requestId;
  let oArgs = null;

  const later = (context, nArgs) => () => {
    requestId = null;
    callback.apply(context, !trailing || oArgs === null ? nArgs : oArgs);
  };

  const throttled = function(...args) {
    if (trailing) oArgs = args;
    if (requestId === null || requestId === undefined) {
      requestId = requestAnimationFrame(later(this, args));
      if (trailing) oArgs = null;
    }
  };

  throttled.cancel = () => cancelAnimationFrame(requestId);

  return throttled;
};

export default rafThrottle;
