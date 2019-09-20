export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGE':
      return action.payload.messages;
    case 'CREATE_MESSAGE':
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
