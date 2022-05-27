<template>
  <div class="row text-white h-100 d-flex align-items-center mx-0">
    <div class="mainContainer">
        <h1 class="mainTitle mb-5">{{mainTexts.LastChance}}</h1>
        <h3 class="secondaryTitle mb-4">{{mainTexts.Introduction}}</h3>
        <div class="paragrphContainer px-5 fw-bold mb-4">
            <p>{{mainTexts.FirstParagraph}}</p>
            <p>{{mainTexts.SecondParagraph}}</p>
            <p>{{mainTexts.ThirdParagraph}}</p>
        </div>
        <router-link to="/quiz" type="button" class="btn btn-light px-5 fw-bold">Save humanity!!</router-link>
    </div>
</div>
</template>

<script lang="ts">
import { MainComponentTitles } from '../models';

export default {
  data(){
    return{
      mainTexts: MainComponentTitles
    }
  }
};
</script>
