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
      return actionQueue.find(
        queued =>
          (queued.meta && action.meta.name === queued.meta.name) &&
          (queued.meta && action.meta.args[1] === queued.meta.args[1]),
      );
    }
    return undefined;
}