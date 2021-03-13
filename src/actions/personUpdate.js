const personUpdate = (prevProps, newPerson) => {
  return {
    type: "ADD_PERSON",
    payload: {
      persons: prevProps.concat(newPerson),
    },
  };
};

export default personUpdate;
