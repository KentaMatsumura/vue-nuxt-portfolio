<template>
  <section class="section">
    <div class="columns is-mobile">
      <div v-for="hobby in this.$store.getters.getHobbies" v-bind:key="hobby">
        <card :title="hobby['name']" icon="cellphone-link">
          <b class="has-text-grey"> </b>{{ hobby["subText"] }}
        </card>
      </div>

      <!-- <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card> -->

      <!-- <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card> -->

      <!-- <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card> -->
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
