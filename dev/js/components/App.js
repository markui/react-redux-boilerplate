import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss');

const App = () => (
  <div>
    <h1>Username list:</h1>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
  </div>
);

export default App;
