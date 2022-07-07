export const initialState = {
  count: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        count: state.count + 1
      };
    }
    case 'MINUS': {
      return {
        count: state.count - 1
      };
    }
    case 'MULTIPLY': {
      return {
        count: state.count * action.payload.number
      };
    }

    case 'DIVIDE': {
      return {
        count: state.count / action.payload.number
      };
    }
  }
};
