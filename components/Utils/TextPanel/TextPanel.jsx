import CSSModules from 'react-css-modules';
var React = require('react');
import styles from './TextPanel.css';

var TextBlock = React.createClass({
  render: function() {
    var contenttextpanel1 = (this.props.BlockContentText1)?
            <p className={styles.BlockContentText} >{this.props.BlockContentText1}</p> : null;
    var contenttextpanel2 = (this.props.BlockContentText1)?
            <p className={styles.BlockContentText} >{this.props.BlockContentText2}</p> : null;
    var contenttextpanel3 = (this.props.BlockContentText1)?
            <p className={styles.BlockContentText} >{this.props.BlockContentText3}</p> : null;
    var contenttextpanel4 = (this.props.BlockContentText1)?
            <p className={styles.BlockContentText} >{this.props.BlockContentText4}</p> : null;
    return (
        <div className={this.props.className}>
          <img className = {styles.TextBlockImg} src= {this.props.TextBlockImg} />
          <h2 className={styles.BlockHeadText} >{this.props.BlockHeadText}</h2>
          {contenttextpanel1}
          {contenttextpanel2}
          {contenttextpanel3}
          {contenttextpanel4}
        </div>
    );
  }
});

var TextPanel = React.createClass({
  render: function() {
    var textpanel1 = (this.props.BlockHeadText1)?
            <TextBlock 
              className={styles.Block}  
              TextBlockImg='/public/btn/comment.png'
              BlockHeadText={this.props.BlockHeadText1}
              BlockContentText1={this.props.BlockContentText1_1}
              BlockContentText2={this.props.BlockContentText1_2}
              BlockContentText3={this.props.BlockContentText1_3}
              BlockContentText4={this.props.BlockContentText1_4}/> : null;
    var textpanel2 = (this.props.BlockHeadText2)?
            <TextBlock 
              className={styles.Block}  
              TextBlockImg='/public/btn/comment.png'
              BlockHeadText={this.props.BlockHeadText2}
              BlockContentText1={this.props.BlockContentText2_1}
              BlockContentText2={this.props.BlockContentText2_2}
              BlockContentText3={this.props.BlockContentText2_3}
              BlockContentText4={this.props.BlockContentText2_4}/> : null;
    var textpanel3 = (this.props.BlockHeadText3)?
            <TextBlock 
              className={styles.Block}  
              TextBlockImg='/public/btn/comment.png'
              BlockHeadText={this.props.BlockHeadText3}
              BlockContentText1={this.props.BlockContentText3_1}
              BlockContentText2={this.props.BlockContentText3_2}
              BlockContentText3={this.props.BlockContentText3_3}
              BlockContentText4={this.props.BlockContentText3_4}/> : null;
    var textpanel4 = (this.props.BlockHeadText4)?
            <TextBlock 
              className={styles.Block}  
              TextBlockImg='/public/btn/comment.png'
              BlockHeadText={this.props.BlockHeadText4}
              BlockContentText1={this.props.BlockContentText4_1}
              BlockContentText2={this.props.BlockContentText4_2}
              BlockContentText3={this.props.BlockContentText4_3}
              BlockContentText4={this.props.BlockContentText4_4}/> : null;
    return (
        <div className={styles.Wraper}>
          <div className={styles.Header}>
            <h1 className={styles.HeaderHeadText} >{this.props.HeaderHeadText}</h1>
            <p className={styles.HeaderContentText} >{this.props.HeaderContentText}</p>
          </div>
          <div className={styles.Content}>
            {textpanel1}
            {textpanel2}
            {textpanel3}
            {textpanel4}
          </div>
        </div>
    );
  }
});

export default CSSModules(TextPanel, styles);
