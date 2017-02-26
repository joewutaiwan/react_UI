import CSSModules from 'react-css-modules';
var React = require('react');
import styles from './CircleButton.css';

var CircleButton = React.createClass({
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
    var img_front, img_back, div_btn, p_name;
    if (!this.state.hoverBtn) {
      img_front = styles.ImgFront;
      img_back = styles.ImgBack;
      div_btn = styles.DivBtn;
      p_name = styles.PName;
    } else {
      img_front = styles.ImgFrontHover;
      img_back = styles.ImgBackHover;
      div_btn = styles.DivBtnHover;
      p_name = styles.PNameHover;
    }
    var top_size = "80px";
    var inside_size = "70px";
    var img_size = "60px";
    
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
      "marginLeft": "5px",
      "marginTop": "5px"
    };

    //<p className={p_name}>{self.props.name}</p>

    return (
        <div className={this.props.className} style= {top_div_style}>
          <div className={div_btn}
            style={inside_div_style}
            onMouseEnter = {this.handleonMouseEnterDiv}
            onMouseLeave = {this.handleonMouseLeaveDiv}
            onClick = {this.handleOnClick}>
            <img style={img_style} className = {img_front} src= {this.props.img_front} />
            <img style={img_style} className = {img_back} src= {this.props.img_back} />
            
            
          </div>
        </div>
    );
  }
});

export default CSSModules(CircleButton, styles);
