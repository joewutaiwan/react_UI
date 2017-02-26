import CSSModules from 'react-css-modules';
var React = require('react');
import styles from './CircleButtonRefresh.css';

var CircleButtonRefresh = React.createClass({
  getInitialState: function() {
    return {hoverBtn: false};
  },
  handleonMouseEnterDiv: function() {
    this.setState({hoverBtn: true});
  },
  handleonMouseLeaveDiv: function() {
    this.setState({hoverBtn: false});
  },
  handleOnClick: function() {
    this.props.onClickBtn(this.props.name);
  },
  render: function() {
    var self = this;
    var img_front, img_back, div_btn;
    if (!this.state.hoverBtn) {
      img_front = styles.ImgFront;
      img_back = styles.ImgBack;
      div_btn = styles.DivBtn;
    } else {
      img_front = styles.ImgFrontHover;
      img_back = styles.ImgBackHover;
      div_btn = styles.DivBtnHover;
    }
    var top_size = "60px";
    var inside_size = "50px";
    var img_size = "40px";
    
    var top_div_style = {
      "height": top_size,
      "width": top_size
    };
    var inside_div_style = {
      "height": inside_size,
      "width": inside_size,
      "backgroundColor":self.props.color
    };
    var img_style = {
      "height": img_size,
      "width": img_size,
      "marginLeft": "-20px",
      "marginTop": "5px"
    };

    return (
        <div className={this.props.className} style= {top_div_style}>
          <div className={div_btn}
            style={inside_div_style}
            onMouseEnter = {this.handleonMouseEnterDiv}
            onMouseLeave = {this.handleonMouseLeaveDiv}
            onClick = {this.handleOnClick}>
            <img style={img_style} className = {img_front} src= {this.props.img_front} />
          
            
          </div>
        </div>
    );
  }
});

export default CSSModules(CircleButtonRefresh, styles);
