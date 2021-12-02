const initialState = {
conversations: [
  { id: 1, fullName: "Федор Петрович" },
  { id: 2, fullName: "Сергей Владимирович" },
  { id: 3, fullName: "Алена Петровна" },
]
  };
  
  export const conversationReducer = (state = initialState, action) => {
    switch (action.type) {

      default:
        return state;
    }
  };
  