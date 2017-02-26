import CSSModules from 'react-css-modules';
var React = require('react');
import { Link} from 'react-router'
import styles from './Navbar_s.css';
import { connect } from 'react-redux';

var SingleItem = React.createClass({
  render: function() {
    return (
        <li className = {styles.NavbarFrame}>
        <div className = {styles.DivWraper}>
          <div className = {this.props.DivBarClassName}>
          </div>
          <div className = {this.props.DivClassName}>
            <Link 
              className = {this.props.AnchorClassName}
              to={this.props.single_item.path}
            onClick={this.handleSingleItemOnClick}>
            {this.props.single_item.name}</Link>
          </div>
          
        </div>
        </li>
    );
  }
});

var Items = React.createClass({
  render: function() {
    var me = this;
    return (
      <ul className = {styles.NavbarFrame}>
        {this.props.menu.map(function(single_item) {
          var AnchorClassName, DivClassName, DivBarClassName;
          if(single_item.path === me.props.selectedPath){
              AnchorClassName = styles.AnchorActive;
              DivClassName = styles.DivActive;
              DivBarClassName = styles.DivBarActive;
          } else {
              AnchorClassName = styles.AnchorDeactive;
              DivClassName = styles.DivDeactive;
              DivBarClassName = styles.DivBarDeactive;
          }
          return <SingleItem 
                   AnchorClassName = {AnchorClassName}
                   DivClassName = {DivClassName}
                   DivBarClassName = {DivBarClassName}
                   key={single_item.name} 
                   single_item={single_item}/>;
        })}
      </ul>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    const { routing } = this.props;
    return (
        <div className={styles.Navbar}>
          <div className={styles.NavbarWraper}>
            <Items
              menu = {this.props.menu}
              selectedPath = {routing.path}/>
         </div>
        </div>
    );
  }
});

//export default CSSModules(Navbar, styles);

function select(state) {
  return {
    routing: state.routing
  }
  
}
export default connect(select)(Navbar)
