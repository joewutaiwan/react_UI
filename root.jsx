import React from 'react';
import {Route} from 'react-router';

import {FoolMe, Bar, App} from './components';
import {Home, Profile, Stock} from './components';

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <Route path="/" components={{content: Stock}}/>
      <Route path="Profile" components={{content: Profile}}/>
      <Route path="Stock" components={{content: Stock}}/>
      <Route path="FoolMe" components={{content: FoolMe}}/>
      <Route path="bar" components={{content: Stock}}/>
    </Route>
  );
}
