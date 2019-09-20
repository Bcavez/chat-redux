import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setCities } from '../actions/index';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    // this.props.action
  }

  render() {
    return (
      this.props.messages.map((message) => {
        return <Message message={message} />;
      })
    );
  }
}

export default MessageList;
