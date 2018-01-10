import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component {
  _createListItems() {
    console.log(this);
    return (
      this.props.users.map(user =>
        <li
          key={user.id}
          onClick={() => this.props.selectUser(user)}
        >
          {user.first} {user.last}
        </li>
      )
    );
  }

  render() {
    return (
      <ul>
        {this._createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
