import CSSModules from 'react-css-modules';
var React = require('react');
import styles from './ImgBlock.css';
import {CircleButton} from '../../index';

var HeadLine = React.createClass({
  onClickBtn: function() {
    this.props.onCommit();
  },
  render: function() {
    var HeadPanel, HeadText, BodyText;
    if (this.props.activate){
        HeadPanel = styles.HideHeadPanel;
    } else {
        HeadPanel = styles.ShowHeadPanel;
    }
    return (
        <div className={styles.HeadLine}>
            <div className={HeadPanel}>
              <h1 className={styles.HeadText}>{this.props.headText}</h1>
              <p className={styles.BodyText}>{this.props.bodyText}</p>
            </div>
            <div className={styles.ButtonPanel}>
              <CircleButton 
                onClickBtn={this.onClickBtn}
                className={styles.Btn}
                color={this.props.btnColor}
                img_front = {this.props.btnCoverImg}
                img_back = {this.props.btnHoverImg}/>
            </div>
        </div>
    );
  }
});

var ImgBlock = React.createClass({
  onClickBtn: function() {
    this.props.onCommit(this.props.block_index);
  },
  render: function() {
    var panel = (this.props.activate)?this.props.panel:null;
    var mask_panel = (this.props.activate)?<div className={styles.Mask}></div>:null;
    var under_block_class = (this.props.activate)?styles.UnderBlockActivate:styles.UnderBlocDeactivate;
    var show_text = false;
    var inline_style = {
      backgroundImage: 'url(' + this.props.bgimg + ')',
      opacity: this.props.bgopacity 
    }
    return (
        <div className={styles.Wraper}>

          <div className={styles.BGImg} style={inline_style}></div>        
          {mask_panel}
          <div className={styles.Content}>{panel}</div>
          <div className={under_block_class}>
            <HeadLine 
              onCommit={this.onClickBtn} 
              activate={this.props.activate} 
              headText={this.props.headtext} 
              bodyText={this.props.bodytext} 
              btnColor={this.props.btnColor}
              btnCoverImg={this.props.btnCoverImg}
              btnHoverImg={this.props.btnHoverImg}/>
          </div>

        </div>
    );
  }
});

export default CSSModules(ImgBlock, styles);
