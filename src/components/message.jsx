import React, { Component } from 'react';

class Message extends Component {
  render() {
    const {
      author,
      content,
      created_at
    } = this.props.message;

    return (
      <div>
        <h2>{author}:</h2>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
