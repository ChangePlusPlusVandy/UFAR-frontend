/**
 * Overrides the default criteria of detecing duplicate actions/thunks 
 * in the actionQueue to our own customization.
 * @param {*} action 
 * @param {*} actionQueue 
 * @returns 
 */
export function comparisonFn(action, actionQueue) {
    if (typeof action === 'object') {
      return actionQueue.find(queued => isEqual(queued, action));
    }
    if (typeof action === 'function') {
      console.log("args", action.meta?.args);
      return actionQueue.find(
        queued =>
          (queued.meta && action.meta.name === queued.meta.name) &&
          (queued.meta && action.meta.args[2] === queued.meta.args[2]),      
        );
    }
    return undefined;
}

export function convertFromYYYYMMDDToDDMMYYYY(date){
  var d = date.split("-");
  return `${d[2]}/${d[1]}/${d[0]}`;
};