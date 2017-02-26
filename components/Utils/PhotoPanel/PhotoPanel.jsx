import CSSModules from 'react-css-modules';
var React = require('react');
import ReactDOM from 'react-dom';
import styles from './PhotoPanel.css';

var MaskPanel = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      is_onclose:false,
      open_index:this.props.open_index,
      re_render:false
    };
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyboardInput);
    document.body.style.overflow = "hidden";
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyboardInput);
    
  },

  handleKeyboardInput: function(event) {
    if (event.keyCode === 37) {
      this.gotoPrev(event);
    } else if (event.keyCode === 39) {
      this.gotoNext(event);
    } else if (event.keyCode === 27) {
      this.handleOnClose();
    } else {
      return false;
    }
  },
  gotoPrev: function(event) {
    let new_index = (this.state.open_index - 1 + this.props.photos.length) % this.props.photos.length;
    this.setState({
      open_index: new_index,
      re_render: true
    });
  },

  gotoNext: function(event) {
    let new_index = (this.state.open_index + 1) % this.props.photos.length;
    this.setState({
      open_index: new_index,
      re_render: true
    });
  },

  handleOnClose: function() {
    // clear any existing timer
    this.setState({
      is_onclose: true,
      re_render: false
    });
    document.body.style.overflow = "scroll";
    var self = this;
    this._timer != null ? clearTimeout(this._timer) : null;
    // hide after `delay` milliseconds
    this._timer = setTimeout(function(){
      self.props.onClose();
      this._timer = null;
    }.bind(this), 1000);
  },

  render: function() {
    var inline_style = {
      "height": this.state.windowHeight,
      "width": this.state.windowWidth
    };
    var MaskPanel = (!this.state.is_onclose)?styles.MaskPanel:styles.MaskPanelOnClose;
    var MaskBlockImg = (!this.state.is_onclose)?styles.MaskBlockImg:styles.MaskBlockImgOnClose;
    MaskPanel = (this.state.re_render)? styles.MaskPanelReRender : MaskPanel;
    MaskBlockImg = (this.state.re_render)? styles.MaskBlockImgReRender : MaskBlockImg;

    return (
        <div className={MaskPanel} style= {inline_style}>
          <div className={styles.BlockWraper}>
            <div className={styles.TopBar}>
              <div className={styles.TopBarBtn}
                  onClick = {this.handleOnClose}>
              </div>
            </div>
            <div className={styles.ImgConent}>
              <img 
                className = {MaskBlockImg} 
                src= {this.props.photos[this.state.open_index].src} 
                style={{maxHeight: this.state.windowHeight*0.8}}/>
            </div>
            <div className={styles.BaseBar}>{this.props.photos[this.state.open_index].caption} </div>
          </div>
        </div>
    );
  }
});

var PhotoPreviewBlock = React.createClass({
  getInitialState: function() {
    return {
      containerWidth:0,
      containerHeight:0
    };
  },
  componentDidMount: function(){
    this.setState({
      containerWidth: Math.floor(ReactDOM.findDOMNode(this).clientWidth),
      containerHeight: Math.floor(ReactDOM.findDOMNode(this).clientHeight)
    })
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize: function(e){
    this.setState({
      containerWidth: Math.floor(ReactDOM.findDOMNode(this).clientWidth),
      containerHeight: Math.floor(ReactDOM.findDOMNode(this).clientHeight)
    })
  },
  onClickPreviewDiv: function(index, event) {
    this.props.onclickphoto(index);
  },
  render: function() {
    var inline_style = {
      "height": Math.floor(this.state.containerWidth/5),
      "width": Math.floor(this.state.containerWidth/5)
    };
    var photoPreviewNodes = [];
    for (var i=0; i<this.props.photos.length; i++){
      photoPreviewNodes.push(
        <div className={styles.Block}
             style= {inline_style}
             key={i}
             onClick={this.onClickPreviewDiv.bind(this, i)}>
          <img className = {styles.PhotoBlockImg} src= {this.props.photos[i].head_src} />
        </div>
      )
    }
    return (
      <div className={styles.PreviewBlock}>
        {photoPreviewNodes}
      </div>
    );
  }
});

var PhotoPanel = React.createClass({
  getInitialState: function() {
    return {
      open_mask:false,
      open_index:0
    };
  },

  onCloseMask: function() {
    this.setState({
      open_mask:false,
      open_index:0
    }); 
  },

  onclickphoto: function(open_index) {
    this.setState({
      open_mask:true,
      open_index:open_index
    }); 
  },

  render: function() {

    var mask_panel = (this.state.open_mask)?<MaskPanel 
              open_index = {this.state.open_index}
              onClose = {this.onCloseMask}
              photos= {this.props.photos}/>:null;

    return (
        <div className={styles.Wraper}>
          <div className={styles.Header}>
            <h1 className={styles.HeaderHeadText} >{this.props.HeaderHeadText}</h1>
            <p className={styles.HeaderContentText} >{this.props.HeaderContentText}</p>
          </div>
          <PhotoPreviewBlock 
              photos={this.props.photos}
              onclickphoto={this.onclickphoto}/>
          {mask_panel}
        </div>
    );
  }
});

export default CSSModules(PhotoPanel, styles);
