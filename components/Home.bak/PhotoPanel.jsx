var React = require('react');
var styles = require('./PhotoPanel.css');
var onhover = false;
import {CircleButtonRefresh} from '../index';

var PhotoPanel = React.createClass({
  getInitialState: function() {
    var state = {
      EnterRight: false,
      EnterLeft: false,
      RenderRightText: false,
      RenderLeftText: false
    }
    return state;
  },
  ShowLeftComment: function() {
    console.log('ShowLeftComment');
    this.setState({RenderLeftText: true});
  },

  ShowRightComment: function() {
    console.log('ShowRightComment');
    this.setState({RenderRightText: true});
  },

  handleonMouseLeave: function() {
    this.setState({
      EnterLeft: false,
      EnterRight: false,
      RenderRightText: false,
      RenderLeftText: false
    });
  },
  handleonMouseEnterLeft: function() {
    this.setState({EnterLeft: true});
  },
  //handleonMouseLeaveLeft: function() {
  //  this.setState({EnterLeft: false});
  //},

  handleonMouseEnterRight: function() {
    this.setState({EnterRight: true});
  },
  //handleonMouseLeaveRight: function() {
  //  this.setState({EnterRight: false});
  //},
  render: function() {
    var PhotoTextLeft, PhotoTextRight, DivCommentBtn;
    var img_left, img_right;
    if (!this.state.EnterRight && !this.state.EnterLeft) {
      PhotoTextLeft = null;
      PhotoTextRight = null;
      DivCommentBtn = null;

      img_left = styles.CoverLeft;
      img_right = styles.CoverRight;

    } else if (this.state.EnterRight && !this.state.EnterLeft) {
      if (this.state.RenderRightText) {
        PhotoTextLeft = null;
        PhotoTextRight = <div className={styles.PhotoTextRight}>{this.props.text_right}</div>;
        DivCommentBtn =null;
        img_left = styles.CoverLeftClose;
        img_right = styles.CoverRightOpen;

      } else {
        PhotoTextLeft = null;
        PhotoTextRight = null;
        DivCommentBtn = <CircleButtonRefresh 
              className={styles.BtnRight}
              onClickBtn={this.ShowRightComment}
              name= 'I'
              color='#6E6EFF'
              img_front = '/public/btn/comment.png'/>
        img_left = styles.CoverLeftDecrese;
        img_right = styles.CoverRightIncrese;
      }
      

    } else {
      if (this.state.RenderLeftText) {
        PhotoTextLeft = null;
        PhotoTextRight = <div className={styles.PhotoTextLeft}>{this.props.text_left}</div>;
        DivCommentBtn =null;
        img_left = styles.CoverLeftOpen;
        img_right = styles.CoverRightClose;

      } else {
        PhotoTextLeft = null;
        PhotoTextRight = null;
        DivCommentBtn = <CircleButtonRefresh 
            className={styles.BtnLeft}
            onClickBtn={this.ShowLeftComment}
            name= 'I'
            color='#6E6EFF'
            img_front = '/public/btn/comment.png'/>

        img_left = styles.CoverLeftIncrese;
        img_right = styles.CoverRightDecrese;
      }

    }

    return (
      <div className = {styles.Main}
        onMouseEnter = {this.handleonMouseEnter}
        onMouseLeave = {this.handleonMouseLeave}>
        {PhotoTextLeft}
        {PhotoTextRight}
        {DivCommentBtn}
        <img 
          className = {img_left} 
          src= {this.props.cover_left} 
          onMouseEnter = {this.handleonMouseEnterLeft}
          onMouseLeave = {this.handleonMouseLeaveLeft}/>
        <img 
          className = {img_right} 
          src= {this.props.cover_right} 
          onMouseEnter = {this.handleonMouseEnterRight}
          onMouseLeave = {this.handleonMouseLeaveRight}/>
        
      </div>
    );
  }
});

module.exports = PhotoPanel;
