import React, { Component } from 'react';
import styles from './Home.css';
import { connect } from 'react-redux';
import { ChangeActivate, ChangeOpacity } from '../../actions.js';

import { TextPanel, PhotoPanel } from '../index';
import { ImgBlock } from '../index';

var location = -1;
var img1_bgopacity_last = 1.0;
var img2_bgopacity_last = 1.0;
var img3_bgopacity_last = 1.0;

var Home = React.createClass({
  getInitialState: function() {
    return {
      Img_block1: {
          activate:false,
          bgopacity:1.0
      },
      Img_block2: {
          activate:false,
          bgopacity:1.0
      },
      Img_block3: {
          activate:false,
          bgopacity:1.0
      }
    };
  },
  onCommitBtns: function(block_index) {
   let a = ~this.state.Img_block1.activate;
   let b = ~this.state.Img_block2.activate;
   let c = ~this.state.Img_block3.activate;
   if (block_index == 3) {
      this.setState({
        Img_block1: {
          activate:a,
          bgopacity:this.state.Img_block1.bgopacity
        }
      }); 
   } else if (block_index == 4) {
      this.setState({
        Img_block2: {
          activate:b,
          bgopacity:this.state.Img_block2.bgopacity
        }
      }); 
   } else if (block_index == 5) {
      this.setState({
        Img_block3: {
          activate:c,
          bgopacity:this.state.Img_block3.bgopacity
        }
      }); 
   }
  },
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

    this.setState ({
      Img_block1: {
          activate:this.state.Img_block1.activate,
          bgopacity:img1_bgopacity
      },
      Img_block2: {
          activate:this.state.Img_block2.activate,
          bgopacity:img2_bgopacity
      },
      Img_block3: {
          activate:this.state.Img_block3.activate,
          bgopacity:img3_bgopacity
      }
    });

  },

  render: function() {
    let panel1 = <PhotoPanel 
                HeaderHeadText="Food is Significant" 
                HeaderContentText="食物即生活中不可分離的那寸暖陽"
                photos={[
                  {
                    caption:'北京即好吃不過餃子',
                    head_src: '/public/photo/mid_1.jpg',
                    src:'/public/photo/mid_1.jpg'
                  },
                  {
                    caption:'台灣新年夜的年夜飯',
                    head_src: '/public/photo/mid_6.jpg',
                    src:'/public/photo/mid_6.jpg'
                  },
                  {
                    caption:'北京清爽芥末雞爪',
                    head_src: '/public/photo/mid_7.jpg',
                    src:'/public/photo/mid_7.jpg'
                  },
                  {
                    caption:'南京復興豬排飯',
                    head_src: '/public/photo/mid_8.jpg',
                    src:'/public/photo/mid_8.jpg'
                  },
                  {
                    caption:'台北東區品川蘭牛排麵',
                    head_src: '/public/photo/mid_9.jpg',
                    src:'/public/photo/mid_9.jpg'
                  },
                  {
                    caption:'台北中山鍋燒烏龍麵',
                    head_src: '/public/photo/mid_10.jpg',
                    src:'/public/photo/mid_10.jpg'
                  },
                  {
                    caption:'台北天母海鮮招牌蓋飯',
                    head_src: '/public/photo/mid_12.jpg',
                    src:'/public/photo/mid_12.jpg'
                  },
                  {
                    caption:'台北信義區寒舍愛美下午茶',
                    head_src: '/public/photo/mid_13.jpg',
                    src:'/public/photo/mid_13.jpg'
                  }
                ]} />;
    let panel3 = <TextPanel 
                HeaderHeadText="Food is Significant" 
                HeaderContentText="食物即生活中不可分離的那寸暖陽"
                BlockHeadText1="新 嫁 娘 詞" 
                BlockContentText1_1="三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。" />;
    let panel2 = <TextPanel 
                HeaderHeadText="Art is Dispensable" 
                HeaderContentText="藝術即不同於人身而可棄"
                BlockHeadText1="新 嫁 娘 詞" 
                BlockContentText1_1="三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。"
                BlockHeadText2="新 嫁 娘 詞" 
                BlockContentText2_1="三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。 三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。 三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。" 
                BlockHeadText3="新 嫁 娘 詞" 
                BlockContentText3_1="三 日 入 廚 下 ， 洗 手 作 羹 湯 。未 諳 姑 食 性 ， 先 遣 小 姑 嘗 。"/>;
    return (
      <div className="page">
        <ImgBlock 
          activate={this.state.Img_block1.activate}
          block_index={3}
          onCommit={block_index=>this.onCommitBtns(block_index)}

          bgimg="/public/meal.JPG"
          bgopacity={this.state.Img_block1.bgopacity}
          headtext = "Food is Significant" 
          bodytext = "食物即生活中不可分離的那寸暖陽"

          btnColor = "blue"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/danceman.png"

          panel={panel1}/>
        <ImgBlock 
          activate={this.state.Img_block2.activate}
          block_index={4}
          onCommit={block_index=>this.onCommitBtns(block_index)}

          bgimg="/public/flower.JPG"
          bgopacity={this.state.Img_block2.bgopacity}
          headtext = "Art is Dispensable" 
          bodytext = "藝術即不同於人身而可棄"

          btnColor = "blue"
          btnCoverImg = "/public/btn/x.png"
          btnHoverImg = "/public/btn/danceman.png"

          panel={panel2}/>
        <ImgBlock 
          activate={this.state.Img_block3.activate}
          block_index={5}
          onCommit={block_index=>this.onCommitBtns(block_index)}

          bgimg="/public/2R.JPG"
          bgopacity={this.state.Img_block3.bgopacity}
          headtext = "Travel is Self-realization" 
          bodytext = "旅遊即圓滑的不經意表達自我"

          btnColor = "blue"
          btnCoverImg = "/public/btn/danceman.png"
          btnHoverImg = "/public/btn/comment.png"

          panel={panel3}/>
      </div>
    );
  }
});


//function select(state) {
//  return {
//    PageItems: state.PageItems
//  }
//  
//}
//export default connect(select)(Home)

export default Home