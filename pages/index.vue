<template>
  <section class="section">
    <div class="columns is-mobile">
      <div v-for="hobby in this.$store.getters.getHobbies" v-bind:key="hobby">
        <card :title="hobby['name']" :imgUrl="hobby['imgUrl']">
          <b class="has-text-grey"> </b>{{ hobby["subText"] }}
        </card>
      </div>
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
  methods: {
    getHobbies() {
      this.$store.dispatch("fetchHobbies");
    },
  },
  created: function () {
    this.$store.dispatch("readHobbies");
  },
};
</script>
