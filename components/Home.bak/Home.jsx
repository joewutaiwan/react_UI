import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ChangePhotoPanel } from '../../reducers.js';


import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import reducers from '../../reducers';
const reducer = combineReducers(Object.assign({}, reducers));
const store = createStore(reducer);

var styles = require('./Home.css');
var PhotoPanel = require('./PhotoPanel.jsx');
var TextPanel = require('./TextPanel.jsx');
var ButtonPanel = require('./ButtonPanel.jsx');
var PhotoData = require('./PhotoData.jsx');
import {ContactBox} from '../index';



var Home = React.createClass({
  render: function() {
    const { dispatch, clickBtnReducer } = this.props;
    var PhotoPanel1, PhotoPanel2, PhotoPanel3;
  if (clickBtnReducer.click_info.btn1_clicked) {
    PhotoPanel1 = <TextPanel 
                  cover_left = {PhotoData.PhotoImg.Img1} 
                  cover_right = {PhotoData.PhotoImg.Img2}
                  text = {PhotoData.PhotoText.TextDetail1}/>;
  } else {
    PhotoPanel1 = <PhotoPanel 
                  cover_left = {PhotoData.PhotoImg.Img1} 
                  cover_right = {PhotoData.PhotoImg.Img2}
                  text_left = {PhotoData.PhotoText.Text1}
                  text_right = {PhotoData.PhotoText.Text2}/>;
  }
  if (clickBtnReducer.click_info.btn2_clicked) {
    PhotoPanel2 = <TextPanel 
                  cover_left = {PhotoData.PhotoImg.Img3} 
                  cover_right = {PhotoData.PhotoImg.Img4}
                  text = {PhotoData.PhotoText.TextDetail1}/>;
  } else {
    PhotoPanel2 = <PhotoPanel 
                  cover_left = {PhotoData.PhotoImg.Img3} 
                  cover_right = {PhotoData.PhotoImg.Img4}
                  text_left = {PhotoData.PhotoText.Text3}
                  text_right = {PhotoData.PhotoText.Text4}/>;
  }
  if (clickBtnReducer.click_info.btn3_clicked) {
    PhotoPanel3 = <TextPanel 
                  cover_left = {PhotoData.PhotoImg.Img5} 
                  cover_right = {PhotoData.PhotoImg.Img6}
                  text = {PhotoData.PhotoText.TextDetail3}/>;
  } else {
    PhotoPanel3 = <PhotoPanel 
                  cover_left = {PhotoData.PhotoImg.Img5} 
                  cover_right = {PhotoData.PhotoImg.Img6}
                  text_left = {PhotoData.PhotoText.Text5}
                  text_right = {PhotoData.PhotoText.Text6}/>;
  }
    return (
      <Provider store={store}>
      <div className={styles.TopModule}>
      	<div className={styles.ComponentWraper}>
        	<ButtonPanel
        	  cover = {PhotoData.PhotoImg.Img1}
            clickBtnReducer = {clickBtnReducer}
            onCommit={click_info =>
               dispatch(ChangePhotoPanel(click_info))
            }/>
        </div>
        <div className={styles.ComponentWraper}>
        {PhotoPanel1}
        </div>
        <div className={styles.ComponentWraper}>
        {PhotoPanel2}
        </div>
        <div className={styles.ComponentWraper}>
        {PhotoPanel3}
        </div>
        <ContactBox/>
      </div>
      </Provider>
    );
  }
});

function select(state) {
  return {
    clickBtnReducer: state.clickBtnReducer
  }
  
}
export default connect(select)(Home)
//export default Home;
