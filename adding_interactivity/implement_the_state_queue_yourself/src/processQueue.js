export function getFinalState(baseState, queue) {
  let finalState = queue.reduce((accumulator, currentValue) => {
    if (typeof currentValue === "function") {
      accumulator = currentValue(accumulator);
    } else {
      accumulator = currentValue;
    }
    return accumulator;
  }, baseState);
  return finalState;
}
