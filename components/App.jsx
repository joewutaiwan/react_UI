import React, {Component} from 'react';
import {Navbar_s, Header, Footer} from './index';
import {Home} from './index';
import {Stock} from './index';
var styles = require('./App.css');

var MENU = [
  {name: '首頁', path: '/'},
  {name: '個人', path: '/Profile'},
  {name: '想法', path: '/Stock'}
];

class App extends Component {

  render() {
    const { navbar, header, content, footer } = this.props;
    var current_route = "";
    if(this.props.routes[1]){
      current_route = this.props.routes[1].path;
    }

    const devToolsDisabled = (
      <p>
        Enable Dev Tools by setting <code>?devTools=true</code>. Or click <a href="/?devTools=true">here</a>!
      </p>
    );
    const devToolsEnabled = (
      <p>
        Check out the state changes in the sidebar when you navigate anywhere!
        <br />
        Click <a href="/">here</a> to disable.
      </p>
    );

    const defaultContent = (
      <div className="page centered-text">
        <img src="/images/download.png" />
        <p>
          This is a simple example of how to use redux-simple-router.
          <br />
          Please click the links at the top and check out the source!
        </p>
        {__DEVTOOLS ? devToolsEnabled : devToolsDisabled}
      </div>
    );

    return (
    
      <div className="app">
        
            {navbar  || <Navbar_s menu = {MENU} routes = {current_route}/>}
         
        <div className= {styles.Content}>
          <div className= {styles.Wraper}>
          {content || <Home/>}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
