<template>
  <div class="home">
    <p>{{contents}}</p>
  </div>
</template>

<script>
import firebase from '@/firebase/firebase'

export default {
  name: 'Home',
  data(){
    return{
      contents:[],
      db: null
    };
  },
  created() {
    this.db = firebase.firestore();
  }
}
</script>
