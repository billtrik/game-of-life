export const NEXT_STEP = 'NEXT_STEP';

export function nextStep() {
  return {
    type: NEXT_STEP
  };
}


export const RESET = 'RESET';

export function reset() {
  return {
    type: RESET
  };
}
