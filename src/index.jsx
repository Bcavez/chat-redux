// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import UsernameReducer from './reducers/username_reducer';
import MessagesReducer from './reducers/messages_reducer';
import ChannelListReducer from './reducers/channel_list_reducer';
import ActiveChannelReducer from './reducers/active_channel_reducer';

// State and reducers
const initialState = {
  messages: [
    {
      "author": "anonymous92",
      "content": "Hello world!",
      "created_at": "2017-09-26T23:03:16.365Z"
    },
    {
      "author": "anonymous77",
      "content": "My name is anonymous77",
      "created_at": "2017-09-26T23:03:21.194Z"
    }
  ],
  username: window.prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channelList: ["general"],
  activeChannel: "general"
};

const reducers = combineReducers({
  username: UsernameReducer,
  messages: MessagesReducer,
  channelList: ChannelListReducer,
  activeChannel: ActiveChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
