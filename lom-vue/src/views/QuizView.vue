<template>
  <div class="row h-100">
    <QuizHeader />
   
    <div class="row text-white d-flex align-items-center justify-content-center rounded mx-0 mainWrapper">
      <div class="questionsContainer">
        <QuizContainer :quizQuestion="quizQuestions[index]"/>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import QuizHeader from '../components/quizHeader.vue';
import QuizContainer from '../components/quizContainer.vue';

export default defineComponent({
  name: 'QuizView',
  components: {
    QuizHeader,
    QuizContainer,
  },
  computed: 
      mapState({
          quizQuestions: (state: any)=> state.quizQuestions,
          index: (state: any)=> state.index
      }),

  
});
</script>