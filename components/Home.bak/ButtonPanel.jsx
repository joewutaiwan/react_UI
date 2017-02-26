var React = require('react');
var styles = require('./ButtonPanel.css');
import {CircleButton} from '../index';

var ButtonPanel = React.createClass({
  getInitialState: function() {
    return {renderBtn: false};
  },
  onClickBtn1: function() {
    console.log('this.props.clickBtnReducer',this.props.clickBtnReducer);
    let tmp = this.props.clickBtnReducer.click_info;
    tmp.btn1_clicked = !tmp.btn1_clicked;
    this.props.onCommit({click_info: tmp});
  },
  onClickBtn2: function() {
    let tmp = this.props.clickBtnReducer.click_info;
    tmp.btn2_clicked = !tmp.btn2_clicked;
    this.props.onCommit({click_info: tmp});
  },
  onClickBtn3: function() {
    let tmp = this.props.clickBtnReducer.click_info;
    tmp.btn3_clicked = !tmp.btn3_clicked;
    this.props.onCommit({click_info: tmp});
  },
  handleonMouseEnter: function() {
    //console.log('handleonMouseEnter');
    this.setState({renderBtn: true});
  },
  handleonMouseLeave: function() {
   // console.log('handleonMouseLeave');
    this.setState({renderBtn: false});
  },
  handleonClick: function() {
    //console.log('handleonClick');
  },
  render: function() {
  	var BtnsItem1, BtnsItem2, BtnsItem3;
	if (this.state.renderBtn) {
	  BtnsItem1 = <CircleButton 
            className={styles.Btn1}
	  				onClickBtn={this.onClickBtn1}
	  				name= 'I'
	  				color='#8F008F'
	  				img_front = '/public/btn/x.png'
	  				img_back = '/public/btn/cloud.png'/>
    BtnsItem2 = <CircleButton 
            className={styles.Btn2}
            onClickBtn={this.onClickBtn2}
            name= 'P'
            color='#A30000'
            img_front = '/public/btn/x.png'
            img_back = '/public/btn/cloud.png'/>
    BtnsItem3 = <CircleButton 
            className={styles.Btn3}
            onClickBtn={this.onClickBtn3}
            name= 'C'
            color='#009900'
            img_front = '/public/btn/x.png'
            img_back = '/public/btn/cloud.png'/>
	} else {
	  BtnsItem1 = null;
    BtnsItem2 = null;
    BtnsItem3 = null;
	}
    return (
      <div className = {styles.Main}
      	onMouseEnter = {this.handleonMouseEnter}
      	onMouseLeave = {this.handleonMouseLeave}>
        <div className = {styles.Mask}>
        {BtnsItem1}
        {BtnsItem2}
        {BtnsItem3}
        </div>
      </div>
    );
  }
});

module.exports = ButtonPanel;
