const personDelete = (prevProps, personId) => {
  return {
    type: "DELETE_PERSON",
    payload: {
      persons: prevProps.filter((person) => person.id !== personId),
    },
  };
};

export default personDelete;
