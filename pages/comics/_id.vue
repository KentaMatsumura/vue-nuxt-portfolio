<template>
  <h1>Comic ID: {{ comics.name }}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      comics: [
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
    comic() {
      return this.comics.find((comic) => comic.id == this.id);
    },
  },
};
</script>
