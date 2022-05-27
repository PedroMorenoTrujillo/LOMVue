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
    index: state => state.index,
    quizQuestions: state => state.quizQuestions,
    correct: state => state.correct, 
    incorrect: state => state.incorrect
  },
  actions: {
    setAnswer({commit}, quizQuestion){
      commit('setAnswer', quizQuestion)
    },
    setIndex({commit}, index){
      commit('setIndex', index)
    },
    setScoreCorrect({commit}){
      commit('setScoreCorrect')
    },
    setScoreIncorrect({commit}){
      commit('setScoreIncorrect')
    },
    resetState({commit}){
      commit('resetState')
    }
  },
  mutations: {
    setAnswer(state, quizQuestion){
      state.quizQuestions[state.index] = quizQuestion
    },
    setIndex(state, index){
      state.index = index
    },
    setScoreCorrect(state){
      state.correct = state.correct + 1
    },
    setScoreIncorrect(state){
      state.incorrect = state.incorrect + 1
    },
    resetState(state){
      state.index = 0,
      state.quizQuestions = quizQuestions,
      state.correct = 0, 
      state.incorrect = 0
    }
  },
})
