import { quizQuestions } from './../models/quizQuestions';
import { StateInterface } from './../models/stateInterface';
import { createStore } from 'vuex'

export default createStore<StateInterface>({
  state: {
    index: 0,
    quizQuestions: quizQuestions,
    correct: 0, 
    incorrect: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setAnswer: ({state}, quizQuestion)=>{
      state.quizQuestions[state.index] = quizQuestion
    },
    setIndex: ({state}, index)=>{
      state.index = index
    },
    setScoreCorrect: ({state})=>{
      state.correct = state.correct + 1
    },
    setScoreIncorrect: ({state})=>{
      state.incorrect = state.incorrect + 1
    },
    resetState: ({state})=>{
      state.index = 0,
      state.quizQuestions = quizQuestions,
      state.correct = 0, 
      state.incorrect = 0
    }
  },
})
