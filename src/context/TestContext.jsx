import { createContext, useReducer } from "react";

export const TestContext = createContext();

const initialState = {
  questions: [],
  user: "",
  totalTime: 0,
  questionData: [],
  timeStamp: [],
};

const testReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_QUESTIONS":
      if (action.payload === true) {
        return {
          ...state,
          questions: [...state.questions, action.id],
          totalTime: state.totalTime + 5,
        };
      } else {
        return {
          ...state,
          questions: [
            ...state.questions.filter((question) => question !== action.id),
          ],
          totalTime: state.totalTime - 5,
        };
      }
    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_QUESTION_DATA":
      return {
        ...state,
        questionData: action.payload,
      };
      case "INITIAL_TIMESTAMP": {
        const initialTimeStamp = state.questionData.map(() => {
          return 0
        })
        return {
          ...state,
          timeStamp: initialTimeStamp,
        }
      } 
      case "UPDATE_TIMESTAMP": {
        return {
          ...state,
          timeStamp: state.timeStamp.map((time, index) => {
            if(index === action.index){
              let newTime = Math.floor(state.timeStamp[index] + action.timeStamp)
              return newTime
            }
            return time
          })
        }
      }
    default:
      return state;
  }
};

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(testReducer, initialState);

  return (
    <TestContext.Provider
      value={{
        data: state,
        dispatch,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
