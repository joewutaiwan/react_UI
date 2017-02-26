import React, { Component } from 'react';
import styles from './Stock.css';
import { connect } from 'react-redux';
import { ChangeActivate } from '../../actions.js';

import { TextPanel } from '../index';
import { ImgBlock } from '../index';

var Stock = React.createClass({
  render: function() {
    const { dispatch, PageItems } = this.props;
    var panel = <TextPanel header="i am header" text="i am text"/>;
    return (
      <div className="page">
        <ImgBlock 
          activate={PageItems[3].activate}
          block_index={3}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}

          bgimg="/public/3L.JPG"
          headtext = "萬里長城就是屌" 
          bodytext = "哥哥爸爸真偉大挖勒勒"

          btnColor = "#009900"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/comment.png"

          panel={panel}/>
        <ImgBlock 
          activate={PageItems[4].activate}
          block_index={4}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}

          bgimg="/public/maobi.JPG"
          headtext = "Personal Resume" 
          bodytext = "個人履歷"

          btnColor = "#8F008F"
          btnCoverImg = "/public/btn/comment.png"
          btnHoverImg = "/public/btn/x.png"

          panel={panel}/>
        <ImgBlock 
          activate={PageItems[5].activate}
          block_index={5}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}

          bgimg="/public/tree.JPG"
          headtext = "Thanking about me" 
          bodytext = "想法以及價值觀"

          btnColor = "green"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/x.png"

          panel={panel}/>
      </div>
    );
  }
});


function select(state) {
  return {
    PageItems: state.PageItems
  }
  
}
export default connect(select)(Stock)

