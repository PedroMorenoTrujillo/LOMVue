<template>
 <div class="bg-dark w-100 px-0 mx-0 text-white d-flex justify-content-around header">
  <div class="bg-success py-3 px-5">Correct: {{correct}}</div>
  <div class="bg-danger py-3 px-5">Incorrect: {{incorrect}}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'QuizHeader',
  computed: {
      ...mapState({
          correct: (state: any)=> state.correct,
          incorrect: (state: any)=> state.incorrect
      })
  }

});
</script>