const personsReducer = (state = [], action) => {
  if (action.type === "ADD_PERSON") {
    return action.payload.persons;
  } else if (action.type === "DELETE_PERSON") {
    return action.payload.persons;
  } else {
    return state;
  }
};

export default personsReducer;
