import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render () {
    return (
      <div className="channels">
        <p>channels</p>
      </div>
    )
  }
}

export default ChannelList;

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { },
//     dispatch
//   );
// }

// function mapStateToProps(state) {
//   return {
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
