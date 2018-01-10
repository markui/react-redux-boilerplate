import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail'
require('../../scss/style.scss');

const App = () => (
  <div>
    <h1>Username list:</h1>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
    <UserDetail />
  </div>
);

export default App;
