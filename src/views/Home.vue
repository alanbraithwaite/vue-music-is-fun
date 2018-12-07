<template>
  <div class=" container-fluid bg-image">
    <div class="row home">
      <div class="col">
        <h1>Get Music Here! </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="search">
          <input type="text" placeholder="Search" v-model='query'>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
    <!-- components here -->
    <div class="row justify-content-around mt-5 pb-5">
      <div class="col-12">
        <results></results>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  // import Preview from '@/components/Preview.vue'


  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      Results,
      // Preview
    }
  }
</script>

<style>
  .home {
    color: aliceblue;
    background-color: rgb(107, 141, 107)
  }

  .bg-image {
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1504466270223-361e33021f6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7f4022380f2a1bb821d8098c9192ac2&auto=format&fit=crop&w=1950&q=80");
    /* background-color: rgb(156, 131, 179); */
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
</style>