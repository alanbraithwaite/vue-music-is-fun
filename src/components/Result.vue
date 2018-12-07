<template>
  <div class="result">
    <h4 @click="setActive">{{index+1}}. {{movieData.title}} - {{movieData.vote_average}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'result',
    props: ['movieData', 'index', 'setActiveCB'],
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      setActive() {
        // this.$emit('imActive', this.movieData)
        this.setActiveCB(this.movieData)
        this.$store.dispatch('setActiveMovie', this.movieData)
      },
      capTitle() {
        this.movieData.title = this.movieData.title.toUpperCase()
      }
    }
  }
</script>

<style>
</style>