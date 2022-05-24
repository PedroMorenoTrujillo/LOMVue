<template>
<div class="row bg-dark rounded  mt-5 centerContainer mx-auto">
  <div class="questionNumber my-3">Pregunta {{quizQuestionCopy.id}}</div>
  <div>
    <h5>{{quizQuestionCopy.question}}</h5>
    <template v-if="quizQuestionCopy.type === 'select'">
      <div class="d-flex flex-wrap justify-content-center py-3">
        <button type="button"
          class="btn btn-primary my-3 w-75 fw-bold"
          :key="answer.id"
          v-for="answer in quizQuestionCopy.answers"
          @click="checkAnswer(answer, quizQuestionCopy.type)"
          :disabled="showAnswerCorrect || showAnswerIncorrect"
          >{{answer.answer}}
        </button>
        <span class="showAnswerQuestion text-success fw-bold" v-if="showAnswerCorrect">{{correctAnswer}}</span>
        <span class="showAnswerQuestion incorrect" v-if="showAnswerIncorrect">{{incorrectString}}<span class="text-danger fw-bold">{{incorrectAnswer}}</span></span>
      </div>
    </template>
    <template v-if="quizQuestionCopy.type === 'input'">
      <div class="d-flex flex-wrap justify-content-center py-3">
        <input type="text" v-model="inputTextValue">
        <button type="button" class="btn btn-primary my-3 w-75 fw-bold"
        @click="checkAnswer(quizQuestionCopy.answers[0], quizQuestionCopy.type)"
        :disabled="showAnswerCorrect || showAnswerIncorrect">Comprobar!!</button>
        <span class="showAnswerQuestion text-success fw-bold" v-if="showAnswerCorrect">{{correctAnswer}}</span>
        <span class="showAnswerQuestion incorrect" v-if="showAnswerIncorrect">{{incorrectString}}<span class="text-danger fw-bold">{{incorrectAnswer}}</span></span>
      </div>
    </template>
  </div>
  <button v-if="quizQuestionCopy.id < 10 && activeNextButton" type="button" class="btn btn-light px-5 fw-bold mt-2 mb-4 w-50 mx-auto" @click="nextQuestion">Siguiente!!</button>
    <router-link v-if="quizQuestionCopy.id === 10 && activeNextButton" type="button" class="btn btn-light px-5 fw-bold mt-2 mb-4" to="/resume">Ver Resultados!!</router-link>
</div>

</template>

<script lang="ts">
import { Answers, QuizQuestion } from '@/models/questionsInterfaces';
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'QuizContainer',
  props: {
      quizQuestion: {default: ()=>({})},
  },
    data(){
        return{
            showAnswerCorrect: false,
            showAnswerIncorrect: false,
            activeNextButton: false,
            correctAnswer: 'La respuesta es correcta',
            incorrectAnswer: '',
            inputTextValue: '',
            incorrectString: 'La respuesta es incorrecta. La respuesta correcta es: ',
            quizQuestionCopy:  {...this.quizQuestion} as QuizQuestion
        }
    },
  computed: {
      ...mapState({
          index: (state: any)=> state.correct,
          incorrect: (state: any)=> state.incorrect
      })
  },
  watch: {
      quizQuestion() {
          this.quizQuestionCopy = {...this.quizQuestion} as QuizQuestion
      }
  },
  methods: {
      ...mapActions(['setScoreCorrect', 'setScoreIncorrect', 'setAnswer', 'setIndex']),
      checkAnswer(answer: Answers, type: string): void{
          this.activeNextButton = true;
        if(type === 'select'){
            this.checkSelect(answer);
        }else{
            this.checkInput(answer)
        }
        this.setAnswer(this.quizQuestionCopy)
      },
      checkSelect(answer: Answers): void{
        if(answer.correct){
            this.showAnswerCorrect = true;
            this.quizQuestionCopy.success = true;
            this.quizQuestionCopy.userAnswer = answer.answer
            this.setScoreCorrect()
        }else{
            this.quizQuestionCopy.userAnswer = answer.answer;
            let correct = this.quizQuestionCopy.answers.find((answer: Answers) => answer.correct)
            this.incorrectAnswer = correct?.answer ?? '';
            this.showAnswerIncorrect = true;
            this.setScoreIncorrect()
        }
    },
    checkInput(answer: Answers): void{
        if(this.inputTextValue?.toLowerCase() === answer.answer.toLowerCase()){
            this.showAnswerCorrect = true;
            this.quizQuestionCopy.success = true;
            this.quizQuestionCopy.userAnswer = answer.answer;
            this.setScoreCorrect()
        }else{
            let correct = this.quizQuestionCopy.answers.find(answer => answer.correct)
            this.incorrectAnswer = correct?.answer ?? ''
            this.showAnswerIncorrect = true;
            this.quizQuestionCopy.userAnswer = this.inputTextValue === '' ? 'No respondiste': this.inputTextValue;
            this.setScoreIncorrect()
       }
    },
    nextQuestion(){
        this.setIndex(this.quizQuestionCopy.id);
        this.showAnswerCorrect = false;
        this.showAnswerIncorrect = false;
        this.activeNextButton = false;
        this.incorrectAnswer = '';
        this.inputTextValue =  '';
    },

  }

});
</script>