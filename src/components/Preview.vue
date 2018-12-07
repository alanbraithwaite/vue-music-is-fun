<template>
  <div class="preview row">
    <div class="col">
      <h2>Preview</h2>
    </div>
    <div v-if="movie.id" class="row">
      <div class="col">
        <img :src="'https://image.tmdb.org/t/p/w200'+movie.poster_path" alt="">
        <p>{{movie.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'preview',
    computed: {
      movie() {
        return this.$store.state.activeMovie
      }
    }
  }
</script>

<style>
  .preview {
    background: grey
  }
</style>