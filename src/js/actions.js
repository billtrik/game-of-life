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


export const TOGGLE_AUTOPLAY = 'TOGGLE_AUTOPLAY';

function toggleAutoplay() {
  return {
    type: TOGGLE_AUTOPLAY
  };
}

export function handleAutoplayToggling() {
  return (dispatch, getState) => {
    dispatch(toggleAutoplay());

    function triggerNextStep() {
      setTimeout(() => {
        const state = getState();

        if (state.get('autoplay')) {
          dispatch(nextStep());
          triggerNextStep();
        }
      }, 1000);
    }

    triggerNextStep();
  };
}
