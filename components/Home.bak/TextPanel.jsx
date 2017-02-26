var React = require('react');
var styles = require('./TextPanel.css');

var TextPanel = React.createClass({
  render: function() {
    return (
      <div className = {styles.Main}>
      	<p className = {styles.Text}>{this.props.text}</p>
      	<img className = {styles.CoverLeft} src= {this.props.cover_left} />
      	<img className = {styles.CoverRight} src= {this.props.cover_right} />
      </div>
    );
  }
});

module.exports = TextPanel;
