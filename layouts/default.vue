<template>
  <div>
    <nav-bar />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  created: function () {
    this.$store.dispatch("readHobbies");
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "lightbulb",
          to: { name: "index" },
        },
        {
          title: "Comics",
          icon: "lightbulb",
          to: { name: "comics-list" },
        },
        {
          title: "Movies",
          icon: "lightbulb",
          to: { name: "movies-list" },
        },
        {
          title: "Musics",
          icon: "lightbulb",
          to: { name: "musics-list" },
        },
      ],
    };
  },
};
</script>
