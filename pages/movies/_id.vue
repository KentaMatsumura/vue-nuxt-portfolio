<template>
  <h1>movie ID: {{ movies.name }}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movies: [
        {
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Kevin Smith",
        },
        {
          id: 3,
          name: "Harry Bosch",
        },
      ],
    };
  },
  computed: {
    movie() {
      return this.movies.find((movie) => movie.id == this.id);
    },
  },
};
</script>
