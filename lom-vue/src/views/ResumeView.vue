<template>
  <QuizHeader />
  <div class="bg-success text-white p-4 rounded my-3" v-if="correct > incorrect">
    <span>NOS SALVAMOS!!!</span>
  </div>
  <div class="bg-danger text-white p-4 rounded my-3"  v-else>
      <span>FIN DE LA HUMANIDAD!!!</span>
  </div>
  <div class="row d-flex text-white justify-content-center bg-dark mt-5 rounded resumeGame mx-auto">
  <div v-for="question in quizQuestions" :key="question.id" class="my-3">
    <div>Pregunta {{question.id}}</div>
    <div>
      <span v-if="question.success">Tu respuesta fue la correcta: <span class="text-success fw-bold">{{question.userAnswer}}</span></span>
      <span v-else>Tu respuesta fue erronea: <span class="text-danger">{{question.userAnswer}}</span></span>
    </div>
  </div>
</div>

<router-link to="/" @click="resetGame" type="button" class="btn btn-light px-5 fw-bold mt-2 mb-4">Jugar de Nuevo!!</router-link>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import QuizHeader from '../components/quizHeader.vue';

export default defineComponent({
  name: 'ResumeView',
  components: {
    QuizHeader
  },
  computed: { 
    ...mapGetters(['quizQuestions', 'correct', 'incorrect']),
     },
     methods: {
       ...mapActions(['resetState']),
       resetGame(){
         this.resetState();
       }
     }
});

</script>
