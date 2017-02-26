import React, {Component} from 'react';
import styles from './FoolMe.css';
import {CircleButton} from '../index';

class FoolMe extends Component {
  render() {
  	var BGImg_style1 = {
      backgroundImage: 'url(' + '/public/meal.JPG' + ')',
    };
    var BGImg_style2 = {
      backgroundImage: 'url(' + '/public/flower.JPG' + ')',
    };
    var BGImg_style3 = {
      backgroundImage: 'url(' + '/public/tree.JPG' + ')',
    };
    return (
      <div className="page">
        <div className={styles.Wraper}>
        	<div 
        	className={styles.BGImg}
        	style={BGImg_style1}></div>
        	<div className={styles.Block}>
            <div className={styles.HeadLine}>
                <h1 className={styles.HeadText}>萬里長城長萬里</h1>
                <p className={styles.BodyText}>冬日雪景橫山遠，開擴八千里眼界</p>
                <div className={styles.ButtonPanel}>
                  <CircleButton 
                    className={styles.Btn}
                    name= 'S'
                    color='#009900'
                    img_front = '/public/btn/x.png'
                    img_back = '/public/btn/cloud.png'/>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.Wraper}>
        	<div 
        	className={styles.BGImg}
        	style={BGImg_style2}></div>
        	<div className={styles.Block}>
            <div className={styles.HeadLine}>
                <h1 className={styles.HeadText}>我是頭條二</h1>
                <p className={styles.BodyText}>別找我拜託我是誰人阿</p>
                <div className={styles.ButtonPanel}>
                  <CircleButton 
                    className={styles.Btn}
                    name= 'P'
                    color='#A30000'
                    img_front = '/public/btn/x.png'
                    img_back = '/public/btn/cloud.png'/>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.Wraper}>
        	<div 
        	className={styles.BGImg}
        	style={BGImg_style3}></div>
        	<div className={styles.Block}>
            <div className={styles.HeadLine}>
                <h1 className={styles.HeadText}>Personal Resume</h1>
                <p className={styles.BodyText}>個人經歷</p>
                <div className={styles.ButtonPanel}>
                  <CircleButton 
                    className={styles.Btn}
                    name= 'S'
                    color='#8F008F'
                    img_front = '/public/btn/x.png'
                    img_back = '/public/btn/comment.png'/>
                </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FoolMe;
