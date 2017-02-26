import CSSModules from 'react-css-modules';
var React = require('react');
import { Link} from 'react-router'
import styles from './Navbar.css';

var SingleItem = React.createClass({
  handleSingleItemOnClick: function() {
    this.props.onCommitSingleItem({name: this.props.single_item.name});
  },
  render: function() {
    return (
        <li className = {styles.NavbarFrame}>
          <div className = {this.props.DivClassName}>
            <Link 
              className = {this.props.AnchorClassName}
              to={this.props.single_item.link}
            onClick={this.handleSingleItemOnClick}>
            {this.props.single_item.name}</Link>
          </div>
        </li>
    );
  }
});

var Items = React.createClass({
  handleOnCommitSingleItem: function(data) {
    this.props.onCommitItems({name: data.name});
  },
  render: function() {
    var me = this;
    return (
      <ul className = {styles.NavbarFrame}>
        {this.props.menu.map(function(single_item) {
          var AnchorClassName, DivClassName;
          if(single_item.name === me.props.selectedItem){
              AnchorClassName = styles.AnchorActive;
              DivClassName = styles.DivActive;
          } else {
              AnchorClassName = styles.AnchorDeactive;
              DivClassName = styles.DivDeactive;
          }
          return <SingleItem 
                   AnchorClassName = {AnchorClassName}
                   DivClassName = {DivClassName}
                   key={single_item.name} 
                   single_item={single_item}
                   onCommitSingleItem={me.handleOnCommitSingleItem}/>;
        })}
      </ul>
    );
  }
});

var Navbar = React.createClass({
  getInitialState: function() {
    /*
    {name: 'Home', link: '/'},
    {name: 'Profile', link: '/Profile'},
    {name: 'Stock', link: '/Stock'},
    {name: 'FoolMe', link: '/foo'},
    {name: 'BarBB', link: '/bar'}
    */
    var name;
    switch(this.props.routes) {
        case '':
            name = 'Home';
            break;
        case 'foo':
            name = 'FoolMe';
            break;
        case 'bar':
            name = 'BarBB';
            break;
        default:
            name = this.props.routes;
    }
    return {selectedItem: name};
  },
  handleOnCommitItems: function(data) {
    this.setState({selectedItem: data.name});
  },
  render: function() {
    return (
        <div className={styles.Navbar}>
          <div className={styles.NavbarWraper}>
            <Items
              menu = {this.props.menu}
              onCommitItems = {this.handleOnCommitItems}
              selectedItem = {this.state.selectedItem}/>
         </div>
        </div>
    );
  }
});

export default CSSModules(Navbar, styles);
