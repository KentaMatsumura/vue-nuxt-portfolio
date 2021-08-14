<template>
  <h1>music ID: {{ musics.name }}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      musics: [
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
    music() {
      return this.musics.find((music) => music.id == this.id);
    },
  },
};
</script>
