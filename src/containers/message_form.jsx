import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.username, this.state.content);
    this.setState({ content: ''});
  }

  componentDidMount() {
    this.formInput.focus();
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            New Message:
            <input type="text" ref={ (input) => {this.formInput = input; } } value={this.state.content} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.activeChannel,
    username: state.username
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
