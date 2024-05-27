import { createSlice } from "@camonk/react-redux";

const initialState = {
  loading: false,
  started: false,
  active: false,
  givingAnswer: false,
  newAnswer: "",
  domain: "",
  experience: "",
  resume: "",
  step: 0,
};

export const interviewBotSlice = createSlice({
  name: "interviewBot",
  initialState,
  reducers: {
    getStarted: (state) => {
      state.started = true;
      state.step += 1;
    },
    getDomain: (state, action) => {
      state.domain = action.payload;
      state.step += 1;
    },
    getExperience: (state, action) => {
      state.experience = action.payload;
      state.step += 1;
    },
    getResume: (state, action) => {
      state.resume = action.payload;
      state.step += 1;
    },
    isGivingAnswer: (state) => {
      state.givingAnswer = true;
    },
    hasGivenAnswer: (state, action) => {
      state.givingAnswer = false;
      state.newAnswer = action.payload;
    },
    resetGivenAnswer: (state) => {
      state.givingAnswer = true;
      state.newAnswer = "";
    },
    reset: (state) => {
      state.step = 0;
    },
    goBack: (state) => {
      if (state.step > 0) state.step -= 1;
    },
  },
});

export const {
  getStarted,
  getDomain,
  getExperience,
  getResume,
  isGivingAnswer,
  hasGivenAnswer,
  resetGivenAnswer,
  reset,
  goBack,
} = interviewBotSlice.actions;

export default interviewBotSlice.reducer;
