///action
export const CLICK_MAIN_BTN = "CLICK_MAIN_BTN";
export const CHANGE_ACTIVATE = "CHANGE_ACTIVATE";
export const CHANGE_OPACITY = "CHANGE_OPACITY";

export function ChangePhotoPanel(click_info) {
  return { type: CLICK_MAIN_BTN, click_info }
}


export const ChangeActivate = (block_index) => {
  return {
    type: CHANGE_ACTIVATE,
    block_index
  }
}

export const ChangeOpacity = (new_opacity) => {
  return {
    type: CHANGE_OPACITY,
    new_opacity
  }
}

