import React, { Component } from 'react';
import styles from './Profile.css';
import { connect } from 'react-redux';
import { ChangeActivate, ChangeOpacity } from '../../actions.js';

import { TextPanel } from '../index';
import { ImgBlock } from '../index';

var Profile = React.createClass({
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    const { dispatch } = this.props;
    let scrollHeight = event.srcElement.body.scrollHeight
    let scrollTop = event.srcElement.body.scrollTop
    let a = scrollHeight/9;
    let b = 1.7*scrollHeight/9;
    let c = 4*scrollHeight/9;
    let d = 4.7*scrollHeight/9;

    let img1_bgopacity = 1.0;
    let img2_bgopacity = 1.0;
    let img3_bgopacity = 1.0;

    if (scrollTop < a ) {
      img1_bgopacity = 1.0;
      img2_bgopacity = 0.5;
      img3_bgopacity = 0.5;
    }

    else if (scrollTop >= a && scrollTop < b) {
      img2_bgopacity = ((scrollTop-a)/(b-a))*0.5 + 0.5;
      img1_bgopacity = (1 - (scrollTop-a)/(b-a))*0.5 + 0.5;
      img3_bgopacity = 0.5;
    }

    else if (scrollTop >= b && scrollTop < c) {
      img1_bgopacity = 0.5;
      img2_bgopacity = 1.0;
      img3_bgopacity = 0.5;
    }

    else if (scrollTop >= c && scrollTop < d) {
      img3_bgopacity = ((scrollTop-c)/(d-c))*0.5 + 0.5;
      img2_bgopacity = (1 - (scrollTop-c)/(d-c))*0.5 + 0.5;;
      img1_bgopacity = 0.5;
      
    }

    else {
      img1_bgopacity = 0.5;
      img2_bgopacity = 0.5;
      img3_bgopacity = 1.0;
    }
    let new_opacity = [
      {
        block_index:0,
        bgopacity:img1_bgopacity
      },
      {
        block_index:1,
        bgopacity:img2_bgopacity
      },
      {
        block_index:2,
        bgopacity:img3_bgopacity
      }

    ];
    dispatch(ChangeOpacity(new_opacity));

  },
  render: function() {
    const { dispatch, PageItems } = this.props;
    let panel1 = <TextPanel 
                HeaderHeadText="Personal Infomation" 
                HeaderContentText="個人基本資料"
                BlockHeadText1="姓名 / Name" 
                BlockContentText1_1="吳文喬 / Joe Wu"
                BlockHeadText2="現居地 / Current residence" 
                BlockContentText2_1="台灣台北市 / taipei, Taiwan" 
                BlockHeadText3="" 
                BlockContentText3=""
                BlockHeadText4="" 
                BlockContentText4="" />;

    let panel2 = <TextPanel 
                HeaderHeadText="Personal Resume" 
                HeaderContentText="個人履歷"
                BlockHeadText1="現職" 
                BlockContentText1_1="群暉科技產品研發人員"
                BlockHeadText2="經歷" 
                BlockContentText2_1="13年-14年 至善老人安養中心替代役"
                BlockContentText2_2="11年-13年 交通大學資訊工程研究所"
                BlockContentText2_3="08年-11年 交通大學資訊工程系"
                BlockHeadText3="Position" 
                BlockContentText3_1="Product Developer, Synology" />;

    var panel_experience = <TextPanel header="i am header" text="i am text"/>;
    return (
      <div className="page">
        <ImgBlock 
          activate={PageItems[0].activate}
          bgopacity={PageItems[0].bgopacity}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}

          block_index={0}
          bgimg="/public/joekick.jpg"
          headtext = "Personal Infomation" 
          bodytext = "個人基本資料"

          btnColor = "#009900"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/comment.png"

          panel={panel1}/>
        <ImgBlock 
          activate={PageItems[1].activate}
          bgopacity={PageItems[1].bgopacity}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}
          block_index={1}

          bgimg="/public/joesnow.jpg"
          headtext = "Personal Resume" 
          bodytext = "個人履歷"

          btnColor = "#8F008F"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/ironman.png"

          panel={panel1}/>
        <ImgBlock 
          activate={PageItems[2].activate}
          bgopacity={PageItems[2].bgopacity}
          onCommit={block_index=>dispatch(ChangeActivate(block_index))}
          block_index={2}

          bgimg="/public/joeselfice.JPG"
          headtext = "Personal Experience" 
          bodytext = "個人經歷"

          btnColor = "green"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/danceman.png"

          panel={panel2}/>
      </div>
    );
  }
});


function select(state) {
  return {
    PageItems: state.PageItems
  }
  
}
export default connect(select)(Profile)

