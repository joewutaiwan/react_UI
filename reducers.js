import {
  CHANGE_ACTIVATE,
  CHANGE_OPACITY,
  CLICK_MAIN_BTN
} from './actions.js'

function clickBtnReducer(state = {
    click_info:{
      btn1_clicked: false,
      btn2_clicked: false,
      btn3_clicked: false
    }
  }, action) {
  switch (action.type) {
    case CLICK_MAIN_BTN:
      return action.click_info;
    default:
      return state
  }
}

const PageItemsInit = [{
    block_index:0,
    activate:false,
    bgopacity:1.0
  },{
    block_index:1,
    activate:false,
    bgopacity:1.0
  },{
    block_index:2,
    activate:false,
    bgopacity:1.0
  },{
    block_index:3,
    activate:false,
    bgopacity:1.0
  },{
    block_index:4,
    activate:false,
    bgopacity:1.0
  },{
    block_index:5,
    activate:false,
    bgopacity:1.0
}];

const PageItem = (state, action) => {
  switch (action.type) {
    case CHANGE_ACTIVATE:
      if (state.block_index !== action.block_index) {
        return state
      }
      return Object.assign({}, state, {
        activate: !state.activate
      })
    case CHANGE_OPACITY:
      var new_state;
      action.new_opacity.map(single_update => {
        if(state.block_index == single_update.block_index) {
          new_state = Object.assign({}, state, {
            bgopacity: single_update.bgopacity
          })
        }
      });
      if(!new_state) {
        new_state = state;
      }
      return new_state;
    default:
      return state
  }
}

const PageItems = (state = PageItemsInit, action) => {
  switch (action.type) {
    case CHANGE_ACTIVATE:
      return state.map(t =>
        PageItem(t, action)
      )
    case CHANGE_OPACITY:
      return state.map(t =>
        PageItem(t, action)
      )
    default:
      return state
  }
}

export default {
  clickBtnReducer,
  PageItems
}
