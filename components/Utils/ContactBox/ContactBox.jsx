import CSSModules from 'react-css-modules';
var React = require('react');
import styles from './ContactBox.css';
import {CircleButtonRefresh} from '../../index';

var ContactBox = React.createClass({
  getInitialState: function() {
    return {
      hoverBox: false,
      Btn1Detail: false,
      Btn2Detail: false,
      Btn3Detail: false
    };
  },
  handleonMouseEnterDiv: function() {
    this.setState({hoverBox: true});
  },
  handleonMouseLeaveDiv: function() {
    this.setState({
      hoverBox: false,
      Btn1Detail: false,
      Btn2Detail: false,
      Btn3Detail: false
    });
  },
  ClickBtn1: function() {
    this.setState({Btn1Detail: ~this.state.Btn1Detail});
  },
  ClickBtn2: function() {
    this.setState({Btn2Detail: ~this.state.Btn2Detail});
  },
  ClickBtn3: function() {
    this.setState({Btn3Detail: ~this.state.Btn3Detail});
  },
  handleOnClick: function() {
    this.props.onClickBtn(this.props.name);
  },
  render: function() {
    var self = this;
    var Btn1, Btn2, Btn3, Btn1Cls, Btn2Cls, Btn3Cls;
    if (!this.state.hoverBox) {
      Btn1Cls = styles.Btn1Init;
      Btn2Cls = styles.Btn2Init;
      Btn3Cls = styles.Btn3Init;
    } else {
      Btn1Cls = styles.Btn1Final;
      Btn2Cls = styles.Btn2Final;
      Btn3Cls = styles.Btn3Final;
    }
    Btn1 = <CircleButtonRefresh 
            className={Btn1Cls}
            onClickBtn={this.ClickBtn1}
            name= 'I'
            color='#6E6EFF'
            img_front = '/public/btn/comment.png'/>
    Btn2 = <CircleButtonRefresh 
            className={Btn2Cls}
            onClickBtn={this.ClickBtn2}
            name= 'I'
            color='blue'
            img_front = '/public/btn/comment.png'/>
    Btn3 = <CircleButtonRefresh 
            className={Btn3Cls}
            onClickBtn={this.ClickBtn3}
            name= 'I'
            color='green'
            img_front = '/public/btn/comment.png'/>
    var top_size = "60px";
    
    var top_div_style = {
      "position": "absolute",
      "height": "120px",
      "width": "180px",
      "bottom": 0,
      "left": 0,
      "backgroundColor":"red"
    };

    var Btn1Detail, Btn2Detail, Btn3Detail;
    if(this.state.Btn1Detail){
      Btn1Detail = <div className={styles.Btn1Detail}>Btn1Detail</div>
    } else {
      Btn1Detail = null;
    }
    if(this.state.Btn2Detail){
      Btn2Detail = <div className={styles.Btn2Detail}>Btn2Detail</div>
    } else {
      Btn2Detail = null;
    }
    if(this.state.Btn3Detail){
      Btn3Detail = <div className={styles.Btn3Detail}>Btn3Detail</div>
    } else {
      Btn3Detail = null;
    }

    return (
        <div className={this.props.className} 
          onMouseEnter = {this.handleonMouseEnterDiv}
          onMouseLeave = {this.handleonMouseLeaveDiv}
          style= {top_div_style}>
          <div className={styles.Line1}>{Btn1Detail}
          </div>
          <div className={styles.Line2}>{Btn2Detail}
          </div>
          <div className={styles.Line3}>{Btn3Detail}
          </div>
          {Btn1}
          {Btn2}
          {Btn3}

        </div>
    );
  }
});

export default CSSModules(ContactBox, styles);
