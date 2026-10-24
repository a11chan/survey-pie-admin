import { configureStore } from "@reduxjs/toolkit";

import thunk from "./middleware/thunk";
import selectedQuestionIdSliceReducer from "./selectedQuestionId/selectedQuestionIdSlice";
import surveyReducer from "./survey/surveySlice";

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: selectedQuestionIdSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
