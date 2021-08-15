<template>
  <section class="section">
    <div class="columns is-mobile">
      <div v-for="hobby in this.$store.getters.getMusics" v-bind:key="hobby">
        <card
          :title="hobby['name']"
          :imgUrl="hobby['imgUrl']"
          :type="hobby['type']"
        >
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
  // methods: {},
  // created: {},
};
</script>
