<template>
  <div class="results row">
    <div class="col">
      <h2>RESULTS: {{results.length}}</h2>
    </div>
    <div class="row">

      <!-- <result v-for="(res, i) in results" class="col-12" :setActiveCB="setActive" :class="{active: res.id == previewedMovie}"
        :movieData="res" :index="i">
      </result> -->
    </div>
  </div>
</template>

<script>
  // import Result from '@/components/Result.vue'
  export default {
    name: 'results',
    data() {
      return {
        // previewedMovie: ''
      }
    },
    // methods: {
    //   setActive(movie) {
    //     this.previewedMovie = movie.id
    //   }
    // },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    // components: {
    //   Result
    // }
  }
</script>

<style>
  .results {
    background: grey
  }

  .active {
    border: 1px solid yellow
  }
</style>