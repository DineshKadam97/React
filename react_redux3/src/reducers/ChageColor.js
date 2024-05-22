const initialState = {
  backgroundColor: "white", // Initial background color
};

const changeColor = (state = initialState, action) => {
  console.log("inside change color");
  if (action.type == "BLUE") {
    console.log("inside blue color");
    return { ...state, backgroundColor: "blue" };
  } else if (action.type == "ORANGE") {
    console.log("inside orange color");
    return { ...state, backgroundColor: "orange" };
  } else {
    return state;
  }
};

export default changeColor;
