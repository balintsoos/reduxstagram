function postComments(state = [], action) {
  if (action.type === 'ADD_COMMENT') {
    return [ ...state, {
      user: action.author,
      text: action.comment
    }]
  }

  if (action.type === 'REMOVE_COMMENT') {
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ]
  }

  return state
}

export default function comments(state = [], action) {
  if (action.type !== undefined) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state
}
