import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions/index';
import { fetchMessages } from '../actions/index';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.fetchMessages(channel);
  }

  render () {
    return (
      <div className="channels">
        {this.props.channelList.map((channel) => {
          return <li onClick={() => {this.handleClick(channel)}} key={channel} className={channel === this.props.activeChannel ? "active" : "" }>#{channel}</li>;
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel,
    channelList: state.channelList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
