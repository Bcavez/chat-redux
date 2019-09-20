import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/index';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />;
        })}
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.activeChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
