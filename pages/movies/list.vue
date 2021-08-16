<template>
  <section class="section">
    <div
      class="columns is-mobile"
      v-if="this.$store.getters.getHobbies.length"
      v-show="!this.$store.getters.loading"
    >
      <div v-for="hobby in this.$store.getters.getMovies" v-bind:key="hobby">
        <card
          :title="hobby['name']"
          :imgUrl="hobby['imgUrl']"
          :type="hobby['type']"
        >
          <b class="has-text-grey"> </b>{{ hobby["subText"] }}
        </card>
      </div>
    </div>
    <div v-else v-show="!this.$store.getters.loading">
      <p>No Data</p>
    </div>
    <div v-show="this.$store.getters.loading">
      <p>loagind</p>
    </div>
  </section>
</template>


<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",
  components: {
    Card,
  },
  // methods: {},
  // created: {},
};
</script>
